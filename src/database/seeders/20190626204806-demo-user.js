const bcrypt = require('bcrypt');

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [{
    firstname: 'King',
    lastname: 'James',
    emailAddress: 'spec.en.james@gmail.com',
    password: bcrypt.hashSync('password', 7),
    imageUrl: 'https://res.cloudinary.com/dbsxxymfz/image/upload/v1536757459/dummy-profile.png',
    phone: '08065432876',
    createdAt: new Date(),
    updatedAt: new Date()
  }]),
  down: queryInterface => queryInterface.bulkDelete('Users')
};
