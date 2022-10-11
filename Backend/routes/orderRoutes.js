import express from 'express'
import { addOrderItems, getMyOrders, getOrderByID, getOrders, updateOrderToDelivered, updateOrderToPaid } from '../controllers/orderController.js'
import { admin, protect } from '../middleware/authMiddleware.js'
const router=express.Router()

router.route('/').post(protect, addOrderItems).get(protect,admin,getOrders)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderByID)
router.route('/pay/:id').put(protect, updateOrderToPaid)
router.route('/deliver/:id').put(protect, admin,updateOrderToDelivered)


export default router