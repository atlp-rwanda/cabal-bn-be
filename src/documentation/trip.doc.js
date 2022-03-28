/* eslint-disable import/prefer-default-export */
/* eslint-disable no-dupe-keys */
import responses from './response';

export const trip = {
  '/trips/?page={page}&limit={limit}': {
    get: {
      tags: ['Trip'],
      summary: 'Requester Retrieving all TripRequest ',
      description: 'Retrieve TripRequest',
      operationId: 'Retrieve TripRequest',
      parameters: [
        {
          name: 'page',
          in: 'path',
          type: 'integer',
          required: true
        },
        {
          name: 'limit',
          in: 'path',
          type: 'integer',
          required: true
        }
      ],
      responses,
      security: [
        {
          JWT: []
        }
      ]
    }
  },
  '/trips': {
    post: {
      tags: ['Trip'],
      summary: 'Sending Trip request',
      description: 'User create Trip request',
      operationId: 'postTrip',
      parameters: [
        {
          name: 'depart_location_id',
          in: 'formData',
          required: true,
          type: 'string'
        },
        {
          name: 'arrival_location_id',
          in: 'formData',
          required: true,
          type: 'string'
        },
        {
          name: 'accommodation_id',
          in: 'formData',
          required: true,
          type: 'string'
        },
        {
          name: 'tripDate',
          in: 'formData',
          required: true,
          type: 'string',
          format: 'date-time'
        },
        {
          name: 'returnDate',
          in: 'formData',
          type: 'string',
          format: 'date-time'
        },
        {
          name: 'reason',
          in: 'formData',
          required: true,
          type: 'string'
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
  '/trips/{id}': {
    put: {
      tags: ['Trip'],
      summary: 'Requester Update trip request with pending status',
      description: 'Update the trip',
      operationId: 'Trip',
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Add tripId',
          required: true
        },
        {
          name: 'depart_location_id',
          in: 'formData',
          required: true,
          type: 'string'
        },
        {
          name: 'arrival_location_id',
          in: 'formData',
          required: true,
          type: 'string'
        },
        {
          name: 'accommodation_id',
          in: 'formData',
          required: true,
          type: 'string'
        },
        {
          name: 'tripDate',
          in: 'formData',
          required: true,
          type: 'string',
          format: 'date-time'
        },
        {
          name: 'returnDate',
          in: 'formData',
          type: 'string',
          required: true,
          format: 'date-time'
        },
        {
          name: 'reason',
          in: 'formData',
          required: true,
          type: 'string'
        }
      ],
      security: [
        {
          JWT: []
        }
      ],
      responses
    },
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
          required: true
        }
      ],
      security: [
        {
          JWT: []
        }
      ],
      responses
    }
  }
};
