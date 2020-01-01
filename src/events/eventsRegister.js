import notify from './notify';
import services from '../services';
import utility from '../utility';

const { EmailService } = services;
const { types: { actionTypes } } = utility;

notify.register(actionTypes.newOrder, EmailService.sendNewOrderEmail);

export default notify;
