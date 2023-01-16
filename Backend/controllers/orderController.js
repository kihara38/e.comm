import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import Product from '../models/productModel.js';

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
    return;
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

// @desc    Create new order
// @route   get /api/orders/:id
// @access  Private
const getOrderByID = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  );
  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('order not Found');
  }
});

// @desc    update order to paid
// @route   POST /api/orders/:id/pay
// @access  Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findByIdAndUpdate(
    req.params.id,

    {
      paidAt: new Date(),
      isPaid: true,
      paymentResult: {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.email_address,
      },
    },
    {
      new: true,
    }
  );
  console.log(order);
  order.orderItems.forEach(async (item, index) => {
    console.log(item);
    const product = await Product.findById(item.product);
    console.log(product);
    if (product) {
      await Product.findByIdAndUpdate(
        product._id,
        { countInStock: product.countInStock - item.qty },
        { new: true }
      ).exec();
      if (index === item.length - 1) {
        console.log('count updated');
      }
    }
  });
});

// @desc    update order to Delivered
// @route   POST /api/orders/:id/delivered
// @access  Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    {
      deliveredAt: new Date(),
      isDelivered: true,
    },
    {
      new: true,
    }
  );
});

// @desc    get logged in user orders
// @route   POST /api/orders/myorders
// @access  Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
});
// @desc    get logged in user orders
// @route   POST /api/orders/myorders
// @access  Private
const getPaidItems = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
});

// @desc    get logged in user orders
// @route   POST /api/orders/myorders
// @access  Private
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate('user', 'id name');
  res.json(orders);
});

export {
  getPaidItems,
  addOrderItems,
  getOrderByID,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
};
