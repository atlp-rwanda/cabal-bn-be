module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      "Trips",
      [
        {
          userId:1,
          managerId:2, 
          originCity: "Kigali",
          destination: 'Cairo', 
          tripDate: '2020-10-10', 
          returnDate: '2023-10-10', 
          accomodationId:'0ce36391-2c08-3074-bddb-a4ea8cccbbc5', 
          reason: "Traveling",
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
          accomodationId:'0ce36391-2c08-3074-bddb-a4ea8cccbbc5', 
          reason: "Tourism",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface) =>
    queryInterface.bulkDelete("Trips", null, {}),
};
