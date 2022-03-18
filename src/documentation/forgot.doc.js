import responses from './response';

const forgot = {
    '/users/forgot-password': {
        post: {
            summary: 'Forgotten password',
            tags: ['User'],
            parameters: [{ in: 'body',
                name: 'forgot',
                schema: {
                    example: {
                        email: "email"
                    }
                },
                required: true,
            }, ],
            consumes: ['application/json'],
            responses,
        },
    },
    '/users/reset-password/{token}': {
        patch: {
            summary: 'Reset password',
            tags: ['User'],
            parameters: [{ in: 'path',
                    name: 'token',
                    required: true,
                    schema: {
                        example: "dsagbfghdfhgdfgfdgdjhdfsjfh",
                    },
                },
                { in: 'body',
                    name: 'name',
                    required: true,
                    schema: {
                        example: {
                            password: 'password',
                        },
                    },
                },

            ],
            consumes: ['application/json'],
            responses,
        }
    }
};

export default forgot