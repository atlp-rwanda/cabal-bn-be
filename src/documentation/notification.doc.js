import responses from './response';

const notification = {
    '/notifications': {
        get: {
            summary: 'get all notification',
            tags: ['Notification'],
            security: [{
                JWT: []
            }],
            consumes: ['application/json'],
            responses,
        },
        patch: {
            summary: 'mark all notifications as read',
            tags: ['Notification'],
            security: [{
                JWT: []
            }],
            consumes: ['application/json'],
            responses,
        },
    },
    '/notifications/{id}': {
        patch: {
            summary: 'Reads one notifications',
            tags: ['Notification'],
            parameters: [{ in: 'path',
                name: 'id',
                description: 'enter  id',
                required: true,
                type: 'integer'
            }, ],
            security: [{
                JWT: []
            }],
            consumes: ['application/json'],
            responses,
        }
    },
};
export default notification