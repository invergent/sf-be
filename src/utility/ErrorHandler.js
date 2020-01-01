import types from './types';

const { responseTypes } = types;

class ErrorHandler {
  static log(error) {
    console.log(error);
  }

  static handle(error, source, responseRequired = true) {
    ErrorHandler.log(error);

    if (responseRequired) {
      const err = error.toString().split('Error: ')[1];
      return [responseTypes.internalError, err];
    }
  }

  // static errorReport(error, source) {
  //   const err = error.toString().split('Error: ')[1];

  //   switch (true) {
  //     case source === sourceTypes.signup && err.includes('already exists'):
  //       return [responseTypes.conflict, err];

  //     case source === sourceTypes.decodeToken:
  //       return [responseTypes.unauthorised, err];

  //     default:
  //       return [responseTypes.internalError];
  //   }
  // }
}

export default ErrorHandler;
