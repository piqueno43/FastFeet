import Deliveryman from '../models/Deliveryman';
import Delivery from '../models/Delivery';
import File from '../models/File';

class CheckOutController {
  async update(req, res) {
    const { originalname: name, filename: path } = req.file;

    const { deliverymanId, deliveryId } = req.params;
    const deliveryman = await Deliveryman.findByPk(deliverymanId);

    if (!deliveryman) {
      return res.status(401).json({ error: 'Deliveryman does exists' });
    }

    const date = new Date();

    const deliveries = await Delivery.findByPk(deliveryId, {
      where: { end_date: null, deliveryman_id: deliverymanId },
    });

    if (!deliveries) {
      return res.status(401).json({
        error: 'Delivery man has finished order delivery.',
      });
    }

    const file = await File.create({
      name,
      path,
    });

    deliveries['end_date'] = date;
    deliveries['signature_id'] = file.id;

    await deliveries.save();

    return res.json(deliveries);
  }
}
export default new CheckOutController();
