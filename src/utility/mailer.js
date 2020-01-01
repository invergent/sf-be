import sendgrid from '@sendgrid/mail';
import { config } from 'dotenv';
import ErrorHandler from './ErrorHandler';

config();

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

class Mailer {
  constructor(mailingClient, errorHandler) {
    if (Mailer.exists) return Mailer.instance;

    this.emailClient = mailingClient;
    this.errorHandler = errorHandler;
    Mailer.instance = this;
    Mailer.exists = true;
  }

  async send(emailDetails) {
    try {
      await this.emailClient.send(emailDetails);
    } catch (error) {
      return this.errorHandler.handle(error, 'mailer', false);
    }
  }

  sendToMany(emailDetails) {
    emailDetails.forEach(emailDetail => this.send(emailDetail));
  }

  sender(emailDetails) {
    if (Array.isArray(emailDetails)) return this.sendToMany(emailDetails);
    return this.send(emailDetails);
  }
}

const mailer = new Mailer(sendgrid, ErrorHandler);

export default mailer;
