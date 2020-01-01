module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Role', [{
    name: 'Super Admin',
    createdAt: new Date(),
    updatedAt: new Date()
  }]),
  down: queryInterface => queryInterface.bulkDelete('Role')
};
