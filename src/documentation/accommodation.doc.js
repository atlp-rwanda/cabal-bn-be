import responses from './response';

const accommodation = {
  '/accommodations': {
    post: {
      tags: ['Accommodation'],
      summary: 'create an Accommodation',
      description: 'create an accommodation',
      operationId: 'create an Accommodation',
      consumes: ['multipart/form-data'],
      produces: ['application/json'],
      parameters: [
        {
          name: 'name',
          in: 'formData',
          required: true,
          type: 'string'
        },
        {
          name: 'description',
          in: 'formData',
          required: true,
          type: 'string'
        },
        {
          name: 'images',
          in: 'formData',
          required: true,
          type: 'file',
          allowMultiple: true
        },
        {
          name: 'location_id',
          in: 'formData',
          required: true,
          type: 'integer'
        },
        {
          name: 'services',
          in: 'formData',
          required: true,
          description: 'EX: ["gym"]',
          type: 'string'
        },
        {
          name: 'amenities',
          in: 'formData',
          required: true,
          description: 'Ex ["cooking"]',
          type: 'string'
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
  '/accommodations/?page={page}&limit={limit}': {
    get: {
      tags: ['Accommodation'],
      summary: 'get a given accommodation',
      description: 'get a given accommodation',
      operationId: 'get an accommodation',
      produces: ['application/json'],
      parameters: [
        {
          name: 'page',
          in: 'path',
          type: 'integer',
          required: true,
          default: 1
        },
        {
          name: 'limit',
          in: 'path',
          type: 'integer',
          required: true,
          default: 4
        }
      ],
      responses
    }
  },
  '/accommodations/{accommodationId}': {
    get: {
      tags: ['Accommodation'],
      summary: 'get a given accommodation',
      description: 'get a given accommodation',
      operationId: 'get one accommodation',
      produces: ['application/json'],
      parameters: [
        {
          name: 'accommodationId',
          in: 'path',
          required: true,
          type: 'integer'
        }
      ],
      responses
    },
    put: {
      tags: ['Accommodation'],
      summary: 'update a given accommodation',
      description: 'update a given accommodation',
      operationId: 'update an accommodation',
      consumes: ['multipart/form-data'],
      produces: ['application/json'],
      parameters: [
        {
          name: 'accommodationId',
          in: 'path',
          required: true,
          type: 'integer'
        },
        {
          name: 'name',
          in: 'formData',
          required: true,
          type: 'string'
        },
        {
          name: 'description',
          in: 'formData',
          required: true,
          type: 'string'
        },
        {
          name: 'images',
          in: 'formData',
          required: true,
          type: 'file',
          multiple: 'multiple'
        },
        {
          name: 'location_id',
          in: 'formData',
          required: true,
          type: 'integer'
        },
        {
          name: 'services',
          in: 'formData',
          required: true,
          description: 'Ex: ["Gym"]',
          type: 'string'
        },
        {
          name: 'amenities',
          in: 'formData',
          required: true,
          description: 'Ex: ["cooking"]',
          type: 'string'
        }
      ],
      responses,
      security: [
        {
          JWT: []
        }
      ]
    },
    delete: {
      tags: ['Accommodation'],
      summary: 'Delete/Remove a specific accommodation',
      description: 'delete an Accommodation',
      operationId: 'remove an accmmodation',
      produces: ['application/json'],
      parameters: [
        {
          name: 'accommodationId',
          in: 'path',
          required: true,
          description: 'accommodation id',
          type: 'integer'
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
  '/accommodations/{accommodationId}/like': {
    post: {
      tags: ['Accommodation'],
      summary: 'like an accommodation',
      description: 'like an accommodation',
      operationId: 'likeAccommodation',
      parameters: [
        {
          name: 'accommodationId',
          in: 'path',
          required: true,
          type: 'integer'
        }
      ],
      responses,
      security: [
        {
          JWT: []
        }
      ]
    }
  }
};

export default accommodation;
