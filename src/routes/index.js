import express from 'express';
import Controller from './Controller';
import RequestValidator from './RequestValidator';

const router = express.Router();

const { createOrder } = Controller;
const { validateOrder } = RequestValidator;

router.post('/order', validateOrder, createOrder);
router.get('/test', (req, res) => res.status(200).json({ message: 'my message' }));

export default router;
