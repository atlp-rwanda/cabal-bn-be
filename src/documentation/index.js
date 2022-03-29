import dotenv from 'dotenv';
import welcome from './welcome';
import forgotP from './forgot.doc';
import { user, userDefinitions } from './user.doc';
import { role, assignRoleDefinitions } from './role.doc';
import room from './room.doc';
import accommodation from './accommodation.doc';
import { locations, locationDefinitions } from './location.doc';
import { trip } from './trip.doc';
import { tripCommentDefinitions, tripComments } from './trip.comment.doc';

dotenv.config();

const host =
  process.env.NODE_ENV === 'production'
    ? process.env.BASE_URL.split('https://')[1]
    : process.env.BASE_URL.split('http://')[1];

const paths = {
  ...welcome,
  ...user,
  ...role,
  ...forgotP,
  ...room,
  ...accommodation,
  ...locations,
  ...trip,
  ...tripComments
};

const definitions = {
  ...userDefinitions,
  ...assignRoleDefinitions,
  ...locationDefinitions,
  ...assignRoleDefinitions,
  ...tripCommentDefinitions
  // ...tripDefinitions
};

const config = {
  swagger: '2.0',
  info: {
    description: 'Barefoot Nomad Project',
    version: '1.0',
    title: 'Barefoot Nomad'
  },
  host,
  basePath: '/api/v1',
  schemes: ['http', 'https'],
  securityDefinitions: {
    JWT: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header'
    }
  },
  paths,
  definitions
};
export default config;
