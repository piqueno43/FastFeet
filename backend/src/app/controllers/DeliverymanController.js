import * as Yup from 'yup';
import { Op } from 'sequelize';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

class DeliverymanController {
  async index(req, res) {
    const { q, page = 1 } = req.query;
    const deliverymans = await Deliveryman.findAndCountAll({
      where: q && {
        name: {
          [Op.iLike]: `%${q}%`,
        },
      },
      order: ['id'],
      limit: 5,
      offset: (page - 1) * 5,
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(deliverymans);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const checkDeliverymanExists = await Deliveryman.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (checkDeliverymanExists) {
      return res.status(401).json({ error: 'Deliveryman is already exits' });
    }
    const { name, avatar_id, email } = await Deliveryman.create(req.body);

    return res.json({ name, avatar_id, email });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const deliveryman = await Deliveryman.findByPk(req.params.id);

    if (!deliveryman) {
      res.status(400).json({ error: 'Deliveryman does not match' });
    }

    const { name, email, avatar_id } = await deliveryman.update(req.body);

    return res.json({ name, email, avatar_id });
  }

  async delete(req, res) {
    const { id } = req.params;
    const deliveryman = await Deliveryman.findByPk(id);

    if (!deliveryman) {
      res.status(400).json({ error: 'Deliveryman does not match' });
    }

    await deliveryman.destroy();

    return res.json();
  }
}
export default new DeliverymanController();
