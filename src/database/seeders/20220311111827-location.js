module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert('Locations', [
      {
        name: 'Kigali',
        description: 'down Town',
        country: 'Rwanda',
        longitude:345678,
        latitude:345678,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lagos',
        description: 'business town',
        country: 'Nigeria',
        longitude:345678,
        latitude:345678,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'NewYork',
        description: 'near UN',
        country: 'USA',
        longitude:345678,
        latitude:345678,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kigali',
        description: 'south america',
        country: 'Mexico',
        longitude:345678,
        latitude:345678,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dubai',
        description: 'east arabs',
        country: 'UAE',
        longitude:345678,
        latitude:345678,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]),
  down: (queryInterface) => queryInterface.bulkDelete('Locations', null, {})
};
