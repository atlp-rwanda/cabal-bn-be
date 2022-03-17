/* eslint-disable no-dupe-keys */
import responses from './response';

export const trip = {
  '/trip/request': {
    post: {
      tags: ['Trip'],
      summary: 'Sending Trip request',
      description: 'User create Trip request',
      operationId: 'postTrip',
      parameters: [
        {
          name: 'body',
          in: 'body',
          description: 'Trip request',
          schema: {
            $ref: '#/definitions/Trip'
          }
        }
      ],
      security: [
        {
          JWT: []
        }
      ],
      responses
    }
  },
  '/trip': {
    get: {
      tags: ['Trip'],
      summary: 'Requester Retrieving all TripRequest ',
      description: 'Retrieve TripRequest',
      operationId: 'Retrieve TripRequest',
      responses,
      security: [
        {
          JWT: []
        }
<<<<<<< HEAD
      ]
    }
=======
      ],
    },
>>>>>>> 3088589d9b5786604e2096ab525dc64603b335e7
  },
  '/trip/manager': {
    get: {
      tags: ['Trip'],
      summary: 'Manager Retrieve all  TripRequest owned',
      description: 'Manager Retrieve all  TripRequest owned',
      operationId: 'managerTripRequest',
<<<<<<< HEAD
      parameters: [],
=======
      parameters: [
      ],
>>>>>>> 3088589d9b5786604e2096ab525dc64603b335e7
      security: [
        {
          JWT: []
        }
      ],
      responses
    }
  },

  '/trip/changeRequest/{id}': {
    put: {
      tags: ['Trip'],
      summary: 'Requester Update trip request with pending status',
      description: 'Update the trip',
      operationId: 'Trip',
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: '',
          required: true,
          schema: {}
        },
        {
          name: 'body',
          in: 'body',
          description: '',
          schema: {
            $ref: '#/definitions/Trip'
          }
        }
      ],
      security: [
        {
          JWT: []
        }
      ],
      security: [
        {
          JWT: []
        }
      ],
      security: [
        {
          JWT: []
        }
      ],
      responses
    }
  },
  '/trip/{id}': {
    delete: {
      tags: ['Trip'],
      summary: 'Requester Delete Trip Request with pending status',
      description: 'Delete TripRequest',
      operationId: 'deleteTripRequest',
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Add tripId',
          required: true,
          schema: {
            $ref: '#/definitions'
          }
        }
      ],
      security: [
        {
          JWT: []
        }
      ],
      responses
    }
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 3088589d9b5786604e2096ab525dc64603b335e7
};

export const tripDefinitions = {
  Trip: {
    type: 'object',
    properties: {
      originCity: {
        type: 'string'
      },
      destination: {
        type: 'string'
      },
      tripDate: {
        type: 'string'
      },
      returnDate: {
        type: 'string'
      },
      accomodationId: {
<<<<<<< HEAD
        type: 'integer'
      },
      reason: {
        type: 'string'
      }
=======
        type: 'integer',
      },
      reason: {
        type: 'string',
      },
>>>>>>> 3088589d9b5786604e2096ab525dc64603b335e7
    }
  }
};
