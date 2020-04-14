import { Op } from 'sequelize';
import Delivery from '../models/Delivery';

class DeliverymanOrderController {
  async index(req, res) {
    const { deliverymanId } = req.params;

    const delivery = await Delivery.findAndCountAll({
      where: { deliveryman_id: deliverymanId, end_date: { [Op.not]: null } },
    });

    return res.json(delivery);
  }
}
export default new DeliverymanOrderController();
