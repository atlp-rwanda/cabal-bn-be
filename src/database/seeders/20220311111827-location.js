module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert('Locations', [
      {
        name: 'kigali',
        description: 'down Town',
        country: 'Rwanda',
        longitude: 345678,
        latitude: 345678,
        visitCount: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'lagos',
        description: 'business town',
        country: 'Nigeria',
        longitude: 345678,
        latitude: 345678,
        visitCount: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'newyork',
        description: 'near UN',
        country: 'USA',
        longitude: 345678,
        latitude: 345678,
        visitCount: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'rio ave',
        description: 'south america',
        country: 'Mexico',
        longitude: 345678,
        latitude: 345678,
        visitCount: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'dubai',
        description: 'east arabs',
        country: 'UAE',
        longitude: 345678,
        latitude: 345678,
        visitCount: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]),
  down: (queryInterface) => queryInterface.bulkDelete('Locations', null, {})
};
