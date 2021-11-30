import { Router } from 'express';
import { getView, getSearch } from '../controllers/viewController';

const viewRouter: Router = Router();

viewRouter.route('/search').get(getSearch);
viewRouter.route('/:id').get(getView);

export default viewRouter;
