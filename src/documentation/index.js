<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import dotenv from 'dotenv';
import welcome from './welcome';
=======
import dotenv from "dotenv";
import welcome from "./welcome";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 06a440c (chore: added swagger doc)
=======
>>>>>>> 544990b (chore: added swagger doc)
=======
import dotenv from 'dotenv';
import welcome from './welcome';
>>>>>>> 86d4444 (chore: updated yarn.lock)
=======
import dotenv from 'dotenv';
import welcome from './welcome';
>>>>>>> 86d4444 (chore: updated yarn.lock)
import { user, userDefinitions } from './user.doc';
=======
import dotenv from "dotenv";
import welcome from "./welcome";
>>>>>>> f0f2d1f (chore(documentation):settingup the documentationfor the project (#2))
=======
import { user, userDefinitions } from './user.doc';
>>>>>>> 913ca05 (chore: added swagger doc)
=======
import dotenv from 'dotenv';
import welcome from './welcome';
import { user, userDefinitions } from './user.doc';
>>>>>>> 886728a (finished rebasing and updating user model)
=======
import { user, userDefinitions } from './user.doc';
>>>>>>> 4e05ae2 (minor changes)
=======
import { user, userDefinitions } from './user.doc';
>>>>>>> 06a440c (chore: added swagger doc)
=======
import { user, userDefinitions } from './user.doc';
>>>>>>> 544990b (chore: added swagger doc)

dotenv.config();

const host =
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 886728a (finished rebasing and updating user model)
  process.env.NODE_ENV === 'production'
    ? process.env.BASE_URL.split('https://')[1]
    : process.env.BASE_URL.split('http://')[1];

const paths = {
  ...welcome,
  ...user
};

const definitions = {
  ...userDefinitions
};

const config = {
  swagger: '2.0',
<<<<<<< HEAD
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
=======
	process.env.NODE_ENV === 'production'
		? process.env.BASE_URL?.split('https://')[1]
		: process.env.BASE_URL?.split('http://')[1];
=======
  process.env.NODE_ENV === 'production'
    ? process.env.BASE_URL.split('https://')[1]
    : process.env.BASE_URL.split('http://')[1];
>>>>>>> 86d4444 (chore: updated yarn.lock)

const paths = {
  ...welcome,
  ...user
};

const definitions = {
  ...userDefinitions
};

const config = {
<<<<<<< HEAD
=======
	process.env.NODE_ENV === 'production'
		? process.env.BASE_URL?.split('https://')[1]
		: process.env.BASE_URL?.split('http://')[1];
=======
  process.env.NODE_ENV === 'production'
    ? process.env.BASE_URL.split('https://')[1]
    : process.env.BASE_URL.split('http://')[1];
>>>>>>> 86d4444 (chore: updated yarn.lock)

const paths = {
  ...welcome,
  ...user
};

const definitions = {
  ...userDefinitions
};

const config = {
<<<<<<< HEAD
>>>>>>> 544990b (chore: added swagger doc)
=======
	process.env.NODE_ENV === 'production'
		? process.env.BASE_URL?.split('https://')[1]
		: process.env.BASE_URL?.split('http://')[1];

const paths = {
	...welcome,
	...user,
};

const definitions = {
	...userDefinitions,
};

const config = {
>>>>>>> 4e05ae2 (minor changes)
=======
	process.env.NODE_ENV === 'production'
		? process.env.BASE_URL?.split('https://')[1]
		: process.env.BASE_URL?.split('http://')[1];

const paths = {
	...welcome,
	...user,
};

const definitions = {
	...userDefinitions,
};

const config = {
>>>>>>> 06a440c (chore: added swagger doc)
=======
	process.env.NODE_ENV === 'production'
		? process.env.BASE_URL?.split('https://')[1]
		: process.env.BASE_URL?.split('http://')[1];

const paths = {
	...welcome,
	...user,
};

const definitions = {
	...userDefinitions,
};

const config = {
>>>>>>> 544990b (chore: added swagger doc)
	swagger: '2.0',
	info: {
		description: 'Barefoot Nomad Project',
		version: '1.0',
		title: 'Barefoot Nomad',
	},
	host,
	basePath: '/api/v1',
	schemes: ['http', 'https'],
	securityDefinitions: {
		JWT: {
			type: 'apiKey',
			name: 'Authorization',
			in: 'header',
		},
	},
	paths,
	definitions,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 06a440c (chore: added swagger doc)
=======
>>>>>>> 544990b (chore: added swagger doc)
=======
=======
>>>>>>> 86d4444 (chore: updated yarn.lock)
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
<<<<<<< HEAD
>>>>>>> 86d4444 (chore: updated yarn.lock)
=======
  process.env.NODE_ENV === "production"
    ? process.env.BASE_URL?.split("https://")[1]
    : process.env.BASE_URL?.split("http://")[1];
=======
	process.env.NODE_ENV === 'production'
		? process.env.BASE_URL?.split('https://')[1]
		: process.env.BASE_URL?.split('http://')[1];
>>>>>>> 913ca05 (chore: added swagger doc)

const paths = {
	...welcome,
	...user,
};

const definitions = {
	...userDefinitions,
};

const config = {
<<<<<<< HEAD
  swagger: "2.0",
=======
>>>>>>> 886728a (finished rebasing and updating user model)
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
<<<<<<< HEAD
>>>>>>> f0f2d1f (chore(documentation):settingup the documentationfor the project (#2))
=======
	swagger: '2.0',
	info: {
		description: 'Barefoot Nomad Project',
		version: '1.0',
		title: 'Barefoot Nomad',
	},
	host,
	basePath: '/api/v1',
	schemes: ['http', 'https'],
	securityDefinitions: {
		JWT: {
			type: 'apiKey',
			name: 'Authorization',
			in: 'header',
		},
	},
	paths,
	definitions,
>>>>>>> 913ca05 (chore: added swagger doc)
=======
  definitions
>>>>>>> 886728a (finished rebasing and updating user model)
=======
>>>>>>> 4e05ae2 (minor changes)
=======
>>>>>>> 06a440c (chore: added swagger doc)
=======
>>>>>>> 544990b (chore: added swagger doc)
=======
>>>>>>> 86d4444 (chore: updated yarn.lock)
};
export default config;
