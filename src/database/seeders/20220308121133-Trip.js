module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      'Trips',
      [
        {
<<<<<<< HEAD
          userId: 4,
          managerId: 3,
          originCity: 'Kigali',
          destination: 'Cairo',
          tripDate: '2020-10-10',
          returnDate: '2023-10-10',
          accomodationId: 1,
          reason: 'Traveling',
          status: 'pending',
=======
          userId:4,
          managerId:3, 
          originCity: "Kigali",
          destination: 'Cairo', 
          tripDate: '2020-10-10', 
          returnDate: '2023-10-10', 
          accomodationId:1, 
          reason: "Traveling",
          status:"pending",
>>>>>>> 3088589d9b5786604e2096ab525dc64603b335e7
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
<<<<<<< HEAD
          userId: 2,
          managerId: 2,
          originCity: 'Kigali',
          destination: 'Kenya',
          tripDate: '2022-10-10',
          returnDate: '2023-10-10',
          accomodationId: 1,
          reason: 'Tourism',
          status: 'approved',
=======
          userId:2,
          managerId:2,
          originCity: "Kigali", 
          destination: 'Kenya', 
          tripDate: '2022-10-10', 
          returnDate: '2023-10-10', 
          accomodationId:1, 
          reason: "Tourism",
          status:"approved",
>>>>>>> 3088589d9b5786604e2096ab525dc64603b335e7
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    ),

  down: (queryInterface) => queryInterface.bulkDelete('Trips', null, {})
};
