module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      "Trips",
      [
        {
          userId:4,
          managerId:3, 
          originCity: "Kigali",
          destination: 'Cairo', 
          tripDate: '2020-10-10', 
          returnDate: '2023-10-10', 
          accomodationId:1, 
          reason: "Traveling",
          status:"pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId:2,
          managerId:2,
          originCity: "Kigali", 
          destination: 'Kenya', 
          tripDate: '2022-10-10', 
          returnDate: '2023-10-10', 
          accomodationId:1, 
          reason: "Tourism",
          status:"approved",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface) =>
    queryInterface.bulkDelete("Trips", null, {}),
};
