import responses from './response';

export const user = {
	'/user/register': {
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
						$ref: '#/definitions/register',
					},
				},
			],
			responses,
		},
	},
};

export const userDefinitions = {
	register: {
		type: 'object',
		properties: {
			email: {
				type: 'string',
				required: true,
			},
			password: {
				type: 'string',
				required: true,
			},
		},
	},
};
