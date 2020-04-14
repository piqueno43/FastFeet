import { Op } from 'sequelize';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';
import Delivery from '../models/Delivery';

import DetailsMail from '../jobs/DetailsMail';
import Queue from '../../lib/Queue';
import CancellationMail from '../jobs/CancellationMail';

class DeliveryController {
  async index(req, res) {
    const { q, page = 1 } = req.query;

    const delivery = await Delivery.findAndCountAll({
      where: q && {
        product: {
          [Op.iLike]: `%${q}%`,
        },
      },
      order: [['id', 'ASC']],
      limit: 5,
      offset: (page - 1) * 5,
      include: [
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['id', 'name', 'email'],
          include: [
            { model: File, as: 'avatar', attributes: ['name', 'path', 'url'] },
          ],
        },
        {
          model: Recipient,
          as: 'recipient',
          attributes: [
            'id',
            'name',
            'city',
            'state',
            'district',
            'number',
            'street',
            'zip_code',
          ],
        },
        {
          model: File,
          as: 'signature',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(delivery);
  }

  async store(req, res) {
    const {
      recipient_id,
      deliveryman_id,
      start_date,
      product,
      end_date,
    } = req.body;
    const recipient = await Recipient.findByPk(recipient_id);

    if (!recipient) {
      return res.status(400).json({ error: 'Recipient already exists' });
    }
    const deliveryman = await Deliveryman.findByPk(deliveryman_id, {
      attributes: ['name', 'email'],
    });

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman already exists' });
    }

    const delivery = await Delivery.create({
      recipient_id,
      deliveryman_id,
      start_date,
      product,
      end_date,
    });

    await Queue.add(DetailsMail.key, {
      delivery,
      deliveryman,
      recipient,
    });

    return res.json(delivery);
  }

  async update(req, res) {
    const { id } = req.params;
    const delivery = await Delivery.findByPk(id);

    if (!delivery) {
      return res.status(400).json({ error: 'De not found' });
    }

    const { recipient_id, deliveryman_id, product } = await delivery.update(
      req.body
    );

    return res.json({ recipient_id, deliveryman_id, product });
  }

  async delete(req, res) {
    const { id } = req.params;
    const delivery = await Delivery.findByPk(id);
    const deliveryman = await Deliveryman.findByPk(delivery.deliveryman_id);

    await delivery.destroy();

    await Queue.add(CancellationMail.key, {
      delivery,
      deliveryman,
    });

    return res.json();
  }
}
export default new DeliveryController();
