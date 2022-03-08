import responses from './response';

export const user = {
  '/users/register': {
    post: {
      tags: ['User'],
      summary: 'Regidter',
      description: 'Register a user',
      operationId: 'postUsersRegister',
      parameters: [
        {
          name: 'body',
          in: 'body',
          description: 'Register a user',
          required: true,
          schema: {
            $ref: '#/definitions/register'
          }
        }
      ],
      responses
    }
  }
};

export const userDefinitions = {
  register: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
        required: true
      },
      password: {
        type: 'string',
        required: true
      },
      first_name: {
        type: 'string',
        required: true
      },
      last_name: {
        type: 'string',
        required: true
      },
      address: {
        type: 'string',
        required: true
      }
    }
  }
};