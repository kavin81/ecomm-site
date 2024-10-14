import { Router } from 'express'


import order from './order.routes'
import product from './product.routes'
import user from './user.routes'

const router = Router()

router.use('/order', order)
router.use('/product', product)
router.use('/user', user)

export default router;