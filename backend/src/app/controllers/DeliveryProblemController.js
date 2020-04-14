import DeliveryProblem from '../models/DeliveryProblem';

import Delivery from '../models/Delivery';

class DeliveryProblemController {
  async index(req, res) {
    const { deliveryId } = req.params;

    const problem = await DeliveryProblem.findAll({
      where: { delivery_id: deliveryId },
    });

    return res.json(problem);
  }

  async store(req, res) {
    const { deliveryId } = req.params;

    const delivery = await Delivery.findByPk(deliveryId);

    if (!delivery) {
      return res.status(400).json({ error: 'Delivery already exists' });
    }

    const { description } = req.body;

    const problem = await DeliveryProblem.create({
      delivery_id: delivery.id,
      description,
    });

    return res.json(problem);
  }
}
export default new DeliveryProblemController();
