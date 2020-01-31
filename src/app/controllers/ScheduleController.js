import { startOfDay, endOfDay, parseISO } from 'date-fns';
import { Op } from 'sequelize';

import Appointment from '../models/Appointment';

class ScheduleController {
  async index(req, res) {
    const { date } = req.query;
    const parsedDate = parseISO(date);

    // Atendimento começa 2020-06-22 00:00:00
    // Atendimento termina 2020-06-22 23:59:00

    const appointments = await Appointment.findAll({
      where: {
        provider_id: req.userId,
        canceled_at: null,
        date: {
          [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)],
        },
      },
      order: ['date'],
    });

    return res.json(appointments);
  }
}

export default new ScheduleController();
