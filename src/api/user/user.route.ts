import { Router } from 'express';
import { validationMiddleware } from '../../common/middlewares';
import { CreateUserDto } from './dtos';
import UserController from './user.controller';

const router = Router();
const userController = new UserController();

router.get('/user', userController.list.bind(userController));

router.post(
  '/user',
  validationMiddleware(CreateUserDto),
  userController.create.bind(userController)
);

router.get('/user/:id', userController.getById.bind(userController));

router.patch('/user/:id', userController.create.bind(userController));

router.delete('/user/:id', userController.create.bind(userController));

export default router;
