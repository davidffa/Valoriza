import { Request, Response } from 'express';
import { ListUserReceivedComplimentsService } from '../services/ListUserReceivedCompliments';

class ListUserReceivedComplimentsController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;

    const listReceivedSentComplimentsService = new ListUserReceivedComplimentsService();

    const compliments = await listReceivedSentComplimentsService.execute(user_id);

    return res.json(compliments);
  }
}

export { ListUserReceivedComplimentsController };