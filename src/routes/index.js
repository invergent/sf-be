import express from 'express';
import Controller from './Controller';
import RequestValidator from './RequestValidator';

const router = express.Router();

const { createOrder } = Controller;
const { validateOrder } = RequestValidator;

router.post('/order', validateOrder, createOrder);

export default router;
