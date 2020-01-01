const responseTypes = Object.freeze({
  conflict: 'conflict',
  okay: 'okay',
  internalError: 'internalError',
  badRequest: 'badRequest',
  success: 'success',
  unauthorised: 'unauthorised',
  forbidden: 'forbidden'
});

const requestTypes = Object.freeze({
  post: 'post',
  get: 'get',
  put: 'put',
  delete: 'delete'
});

const actionTypes = Object.freeze({
  emailVerification: 'emailVerification',
  welcome: 'welcome'
});

const sourceTypes = Object.freeze({
  decodeToken: 'decodeToken',
  signup: 'signup',
  http: 'http',
  verifyAccount: 'verifyAccount'
});

export default {
  actionTypes,
  requestTypes,
  responseTypes,
  sourceTypes
};
