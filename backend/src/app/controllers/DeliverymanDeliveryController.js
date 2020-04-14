import { Op } from 'sequelize';
import Delivery from '../models/Delivery';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

// deliveryman/2
class DeliverymanDeliveryController {
  async index(req, res) {
    const { deliverymanId: id } = req.params;

    const deliveryman = await Deliveryman.findByPk(id, {
      attributes: ['id', 'name', 'email', 'createdAt'],
      include: [{ model: File, as: 'avatar' }],
    });

    const delivery = await Delivery.findAll({
      where: { deliveryman_id: id, end_date: { [Op.not]: null } },
      include: [{ model: Recipient, as: 'recipient' }],
    });

    return res.json({ delivery, deliveryman });
  }

  async store(req, res) {
    const { deliverymanId: id } = req.params;
    const deliveryman = await Deliveryman.findByPk(id, {
      attributes: ['id', 'name', 'email', 'createdAt'],
      include: [{ model: File, as: 'avatar' }],
    });

    const delivery = await Delivery.findAll({
      where: { canceled_at: null, end_date: null, deliveryman_id: id },
      attributes: { exclude: [] },
      include: [{ model: Recipient, as: 'recipient' }],
    });

    return res.json({ delivery, deliveryman });
  }
}

export default new DeliverymanDeliveryController();
