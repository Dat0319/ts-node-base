import { expressRouter, router } from '../../common';
import { validate } from '../../common/middlewares';
import loyaltyController from './loyalty.controller';
import { LoyaltyValidation } from './loyalty.validation';

//#region Admin section
router.get('/admin/loyalties', [loyaltyController.create]);

router.post('/admin/loyalties', [
  validate(LoyaltyValidation.create, ['s']),
  loyaltyController.create,
]);

router.patch('/admin/loyalties/:id', [loyaltyController.create]);

router.delete('/admin/loyalties/:id', [loyaltyController.create]);
//#endregion Admin section

//#region User section
router.get('/user/loyalty', [loyaltyController.list]);
//#endregion User section

export default expressRouter;
