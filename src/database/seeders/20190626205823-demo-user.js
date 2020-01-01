module.exports = {
  up: queryInterface => queryInterface.bulkInsert('User', [{
    firstname: 'King',
    lastname: 'James',
    emailAddress: 'spec.en.james@gmail.com',
    roleId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }]),
  down: queryInterface => queryInterface.bulkDelete('User')
};
