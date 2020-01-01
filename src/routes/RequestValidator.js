import utility from '../utility';
// import services from '../services';

const {
  expectedFields, Respond, regexen, Validation
} = utility;
// const { TokenService } = services;
// const tokenEngine = new TokenService();

class RequestValidator {
  static validateOrder(req, res, next) {
    const errors = new Validation('order', req.body, expectedFields.order, regexen);
    return errors.length ? Respond.send(res, 'badRequest', errors) : next();
  }

  // static validateToken(req, res, next) {
  //   const { params: { token } } = req;
  //   const [status, data] = tokenEngine.decode(token);

  //   if (status !== responseTypes.success) return Respond.send(res, status, data);

  //   req.authDUser = data;
  //   return next();
  // }
}

export default RequestValidator;
