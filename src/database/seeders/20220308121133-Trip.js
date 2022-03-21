module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      'Trips',
      [
        {
          user_id: 4,
          manager_id: 3,
          origin: 'Kigali',
          destination: 'Cairo',
          tripDate: new Date('2020-09-10').toISOString(),
          returnDate: new Date('2020-10-10').toISOString(),
          accomodationId: 1,
          reason: 'Traveling',
          status: 'PENDING',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 6,
          manager_id: 5,
          origin: 'Kigali',
          destination: 'Kenya',
          tripDate: new Date('2020-10-10').toISOString(),
          returnDate: new Date('2020-12-10').toISOString(),
          accomodationId: 1,
          reason: 'Tourism',
          status: 'APPROVED',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    ),

  down: (queryInterface) => queryInterface.bulkDelete('Trips', null, {})
};
