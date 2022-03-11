import responses from './response';

export const trip = {
  '/trip/request/{userId}': {
    post: {
      tags: ['Trip'],
      summary: 'Trip request',
      description: 'Trip request',
      operationId: 'postTrip',
      parameters: [
        {
          name: 'userId',
          in: 'path',
          description: 'Trip request',
          required: true,
          schema: {
          }
        },
        {
          name: 'body',
          in: 'body',
          description: 'Trip request',
          schema: {
            $ref: '#/definitions/Trip'
          }
        }
      ],
      responses
    }
  },
  '/trip/{userId}': {
    get: {
      tags: ['Trip'],
      summary: 'Retrieve TripRequest',
      description: 'Retrieve TripRequest',
      operationId: 'manager RetrieveTripRequest',
      parameters: [
        {
          name: 'userId',
          in: 'path',
          description: 'Retrieve TripRequest',
          required: true,
          schema: {
            $ref: '#/definitions/managerRetrieveTripRequest'
          }
        },
      ],
      responses
    }
  },
  '/trip/manager/{managerId}': {
    get: {
      tags: ['Trip'],
      summary: 'Retrieve TripRequest',
      description: 'Retrieve TripRequest',
      operationId: 'RetrieveTripRequest',
      parameters: [
        {
          name: 'managerId',
          in: 'path',
          description: 'Retrieve TripRequest',
          required: true,
          schema: {
            $ref: '#/definitions/RetrieveTripRequest'
          }
        },
      ],
      responses
    }
  },

  '/trip/changeRequest/{userId}/{id}': {
    put: {
      tags: ['Trip'],
      summary: 'Update the trip',
      description: 'Update the trip',
      operationId: 'Trip',
      parameters: [
        {
          name: 'userId',
          in: 'path',
          description: '',
          required: true,
          schema: {
          }
        },
        {
          name: 'id',
          in: 'path',
          description: '',
          required: true,
          schema: {
           
          }
        },
        {
          name: 'body',
          in: 'body',
          description: '',
          schema: {
            $ref: '#/definitions/Trip'
          }
        },
      ],
      responses
    }
  },
  '/trip/tripRemove/{userId}/{id}': {
    delete: {
      tags: ['Trip'],
      summary: 'Delete TripRequest',
      description: 'Delete TripRequest',
      operationId: 'deleteTripRequest',
      parameters: [
        {
          name: 'userId',
          in: 'path',
          description: 'Add UserId',
          required: true,
          schema: {
            $ref: '#/definitions/deleteTripRequest'
          }
        },
        {
          name: 'id',
          in: 'path',
          description: 'Add tripId',
          required: true,
          schema: {
            $ref: '#/definitions/deleteTripRequest'
          }
        }
      ],
      responses
    }
  },


};

export const tripDefinitions = {
    Trip: {
    type: 'object',
    properties: {
      originCity: {
        type: 'string',
      },
      destination: {
        type: 'string',
      },
      tripDate: {
        type: 'string',
      },
      returnDate: {
        type: 'string',
      },
      accomodationId: {
        type: 'string',
      },
      reason: {
        type: 'string',
      },
      managerId: {
        type: 'integer',
      },
    }
  }
};
