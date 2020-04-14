import {
  startOfDay,
  endOfDay,
  setMinutes,
  setSeconds,
  setHours,
  isAfter,
  isBefore,
} from 'date-fns';
import { Op } from 'sequelize';

import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';

class CheckInController {
  async update(req, res) {
    const { deliverymanId: id, deliveryId } = req.params;

    const deliveryman = await Deliveryman.findByPk(id);
    const deliveries = await Delivery.findByPk(deliveryId);

    if (!deliveryman) {
      return res.status(401).json({ error: 'Deliveryman does exists' });
    }
    if (!deliveries) {
      return res.status(401).json({ error: 'Delivery does exists' });
    }

    const date = new Date();
    const startDate = setSeconds(setMinutes(setHours(date, 8), 0), 0);
    const endDate = setSeconds(setMinutes(setHours(date, 18), 0), 0);

    const checkStartEndDate =
      isAfter(date, startDate) && isBefore(date, endDate);

    if (!checkStartEndDate) {
      return res.status(400).json({
        error: 'Withdrawals can only be made between 08:00 and 18:00.',
      });
    }

    const deliverymanLimiteFive = await Delivery.findAndCountAll({
      where: {
        start_date: {
          [Op.between]: [startOfDay(date), endOfDay(date)],
        },
      },
    });

    if (deliverymanLimiteFive.count >= 5) {
      return res
        .status(400)
        .json({ error: 'The deliveryman can only make 5 deliveries per day.' });
    }

    const delivery = await Delivery.findOne({
      where: {
        id: deliveryId,
        start_date: null,
        deliveryman_id: id,
      },
    });

    if (!delivery) {
      return res.status(400).json({
        error: 'Delivery man has already carried out the package search',
      });
    }

    delivery['start_date'] = date;

    await delivery.save();

    return res.json({ delivery });
  }
}
export default new CheckInController();
