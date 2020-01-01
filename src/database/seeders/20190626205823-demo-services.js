module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Service', [{
    name: 'Cleaning',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Plumbing',
    createdAt: new Date(),
    updatedAt: new Date()
  }]),
  down: queryInterface => queryInterface.bulkDelete('Service')
};
