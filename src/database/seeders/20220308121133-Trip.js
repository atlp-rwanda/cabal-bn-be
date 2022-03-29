module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      'Trips',
      [
        {
          user_id: 4,
          manager_id: 3,
          depart_location_id: 1,
          arrival_location_id: 1,
          tripDate: new Date('2020-09-10').toISOString(),
          returnDate: new Date('2020-10-10').toISOString(),
          accommodation_id: 1,
          reason: 'Traveling',
          status: 'APPROVED',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 6,
          manager_id: 5,
          depart_location_id: 1,
          arrival_location_id: 1,
          tripDate: new Date('2020-10-10').toISOString(),
          returnDate: new Date('2020-12-10').toISOString(),
          accommodation_id: 1,
          reason: 'Tourism',
          status: 'PENDING',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    ),

  down: (queryInterface) => queryInterface.bulkDelete('Trips', null, {})
};
