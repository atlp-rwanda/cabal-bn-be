import responses from './response';


const forgot = {
    '/users/forgot': {
        post: {
            summary: 'Forgotten password',
            tags: ['Forgot '],
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
    '/users/reset': {
        post: {
            summary: 'reset password',
            tags: ['Reset'],
            security: [{
                JWT: [],
            }, ],
            parameters: [{ in: 'body',
                name: 'forgot',
                schema: {
                    example: {
                        password: "password"
                    }
                },
                required: true,
            }, ],
            consumes: ['application/json'],
            responses,
        }
    }
};

export default forgot