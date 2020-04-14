import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';
import DeliveryProblem from '../models/DeliveryProblem';

import Queue from '../../lib/Queue';
import CancellationMail from '../jobs/CancellationMail';

class ProblemController {
  async index(req, res) {
    const { q, page = 1 } = req.query;
    const problem = await DeliveryProblem.findAndCountAll({
      where: q && { name: { [Op.iLike]: `%${q}%` } },
      order: [['id', 'ASC']],
      limit: 5,
      offset: (page - 1) * 5,
    });
    return res.json(problem);
  }

  async delete(req, res) {
    const { problemId } = req.params;
    const problem = await DeliveryProblem.findByPk(problemId, {
      include: [
        {
          model: Delivery,
          as: 'delivery',
          include: [{ model: Deliveryman, as: 'deliveryman' }],
        },
      ],
    });

    if (!problem) {
      return res.status(400).json({ error: 'Problem already exists' });
    }

    const date = new Date();

    problem.delivery['canceled_at'] = date;

    await problem.delivery.save();

    await Queue.add(CancellationMail.key, {
      delivery: problem.delivery,
      deliveryman: problem.delivery.deliveryman,
    });

    return res.json(problem);
  }
}
export default new ProblemController();
