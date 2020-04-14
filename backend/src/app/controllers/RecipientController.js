import { Op } from 'sequelize';
import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
  async index(req, res) {
    const { q, page = 1 } = req.query;

    const recipient = await Recipient.findAndCountAll({
      where: q && { name: { [Op.iLike]: `%${q}%` } },
      order: [['id', 'ASC']],
      limit: 5,
      offset: (page - 1) * 5,
    });

    return res.json(recipient);
  }
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      district: Yup.string().required(),
      number: Yup.string().required(),
      adjunct: Yup.string().required(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zip_code: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const recipientName = await Recipient.findOne({
      where: { name: req.body.name },
    });

    if (recipientName) {
      return res.status(400).json({ error: 'Recipient already exists' });
    }
    const recipient = await Recipient.create(req.body);

    return res.json(recipient);
  }
  async update(req, res) {
    const schema = Yup.object().shape({
      street: Yup.string().required(),
      district: Yup.string().required(),
      number: Yup.string().required(),
      adjunct: Yup.string().required(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zip_code: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const recipient = await Recipient.findByPk(req.params.id);

    if (!recipient) {
      return res.status(400).json({ error: 'Recipient already exists' });
    }

    const {
      street,
      district,
      number,
      adjunct,
      state,
      city,
      zip_code,
    } = await recipient.update(req.body);

    return res.json({
      street,
      district,
      number,
      adjunct,
      state,
      city,
      zip_code,
    });
  }

  async delete(req, res) {
    const { id } = req.params;
    const recipient = await Recipient.findByPk(id);

    await recipient.destroy();

    return res.json();
  }
}

export default new RecipientController();
