const urlsConfig = {
  development: {
    emailingEndpoint: 'http://localhost:7050/send',
    emailVerification: {
      uiUrl: 'http://localhost:7055/accounts/verify'
    }
  },
  cloud_test: {
    emailingEndpoint: 'https://mailer-api-test.octopurs.hexigin.com/send',
    emailVerification: {
      uiUrl: 'https://authentico-test.octopurs.hexigin.com/accounts/verify'
    },
    welcome: {
      requestEndpoint: 'https://mailer-api-test.octopurs.hexigin.com/send'
    }
  },
  production: {
    emailingEndpoint: 'https://mailer-api.octopurs.hexigin.com/send',
    emailVerification: {
      uiUrl: 'https://authentico.octopurs.hexigin.com/accounts/verify'
    }
  },
  test: {
    emailVerification: {},
    welcome: {}
  }
};

export default urlsConfig[process.env.NODE_ENV];
