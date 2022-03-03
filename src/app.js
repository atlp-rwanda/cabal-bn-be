<<<<<<< HEAD
=======
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 08689d6 (* chore/changed procfile setting)
/* eslint-disable import/no-unresolved */
import docs from 'documentation/index';
import passport from 'middlewares/passport.middleware';
import express from 'express';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 6c5879f (rebase commit)
import Sequelize from 'sequelize';
import 'dotenv/config';
>>>>>>> 6c5879f (rebase commit)
import { serve, setup } from 'swagger-ui-express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes/index';
<<<<<<< HEAD
import 'dotenv';
=======
=======
=======
<<<<<<< HEAD
=======
>>>>>>> 181901f (minor changes)
import express from 'express';
>>>>>>> 4e05ae2 (minor changes)
=======
import express from 'express';
>>>>>>> 0b01047 (chore: some rebase commit)
import routes from 'routes/index';
=======
>>>>>>> 86d4444 (chore: updated yarn.lock)
import { serve, setup } from 'swagger-ui-express';
import cors from 'cors';
import morgan from 'morgan';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import passport from 'middlewares/passport.middleware';
import 'dotenv';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0b01047 (chore: some rebase commit)
>>>>>>> 6c5879f (rebase commit)
=======
import { uuid } from 'uuidv4';
>>>>>>> 4e05ae2 (minor changes)
=======
>>>>>>> 181901f (minor changes)
=======
import passport from './middlewares/passport.middleware';
import docs from './documentation/index';
import routes from './routes/index';
<<<<<<< HEAD
import 'dotenv';
>>>>>>> 86d4444 (chore: updated yarn.lock)
=======
=======
=======
<<<<<<< HEAD
=======
>>>>>>> 181901f (minor changes)
import express from 'express';
>>>>>>> 4e05ae2 (minor changes)
=======
import express from 'express';
>>>>>>> 0b01047 (chore: some rebase commit)
import routes from 'routes/index';
=======
>>>>>>> 86d4444 (chore: updated yarn.lock)
import { serve, setup } from 'swagger-ui-express';
import cors from 'cors';
import morgan from 'morgan';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import passport from 'middlewares/passport.middleware';
import 'dotenv';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0b01047 (chore: some rebase commit)
>>>>>>> 6c5879f (rebase commit)
=======
import { uuid } from 'uuidv4';
>>>>>>> 4e05ae2 (minor changes)
=======
>>>>>>> 181901f (minor changes)

const app = express();
=======
import passport from 'middlewares/passport';
import 'dotenv';
=======
import routes from 'routes/index';
=======
import express from "express";
import routes from "routes/index";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> e08edc4 (chore: rebased dev)
=======
>>>>>>> 2dfab96 (feature: add user registration)
=======
>>>>>>> e08edc4 (chore: rebased dev)
=======
>>>>>>> 2dfab96 (feature: add user registration)
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config';
import passport from 'middlewares/passport';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import passport from 'middlewares/passport.middleware';
>>>>>>> 97759dc (chore: addedd other user model fields)
import 'dotenv';
import { uuid } from 'uuidv4';

<<<<<<< HEAD
const app = express();
const port = process.env.PORT || 5000;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 921d028 (chore: rebase commit)
=======
>>>>>>> e08edc4 (chore: rebased dev)
=======
>>>>>>> 2dfab96 (feature: add user registration)
=======
import express from 'express';
import routes from 'routes/index';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config';
<<<<<<< HEAD
import Sequelize from 'sequelize';
=======
import express from "express";
import Sequelize from "sequelize";
import "dotenv/config";
import routes from "routes/index";
import { serve, setup } from "swagger-ui-express";
import docs from "documentation/index";
>>>>>>> f0f2d1f (chore(documentation):settingup the documentationfor the project (#2))
=======
=======
/* eslint-disable import/no-unresolved */
import docs from 'documentation/index';
import passport from 'middlewares/passport.middleware';
>>>>>>> 886728a (finished rebasing and updating user model)
import express from 'express';
>>>>>>> 08689d6 (* chore/changed procfile setting)
import { serve, setup } from 'swagger-ui-express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes/index';
<<<<<<< HEAD
import 'dotenv';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize());

app.use('/api/v1', routes);
app.use('/api-docs', serve, setup(docs));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to Barefoot Nomad.' });
});

app.get('*', (req, res) => {
  res.status(404).json({ message: 'Route not found.' });
});

app.listen(port, () => {
  console.log('server up running on port ', port);
});

export default app;
=======
<<<<<<< HEAD
>>>>>>> 7b33ab0 (#181339470-Configure ESLint (#15))
=======
import express from "express";
import "dotenv/config";
import { serve, setup } from "swagger-ui-express";
import routes from "routes/index";
import docs from "documentation/index";
import db from "database/models";
>>>>>>> 7644ca4 (#181339524-docker-setup-for-cabal-project (#14))

const app = express();
const port = process.env.PORT || 5000;
<<<<<<< HEAD
const mode = process.env.NODE_ENV || 'development';
>>>>>>> 9c4883f (#181339469 setting-up-unit-tests (#4))
=======
import 'dotenv';
=======
import passport from 'middlewares/passport';
import 'dotenv';
=======
import passport from 'middlewares/passport';
import 'dotenv';
=======
import 'dotenv';
=======
import 'dotenv';

const app = express();
const port = process.env.PORT || 5000;
>>>>>>> 2dfab96 (feature: add user registration)

<<<<<<< HEAD
const app = express();
const port = process.env.PORT || 5000;
>>>>>>> e08edc4 (chore: rebased dev)

const app = express();
const port = process.env.PORT || 5000;
>>>>>>> 921d028 (chore: rebase commit)
=======
import passport from 'middlewares/passport.middleware';
import 'dotenv';
import { uuid } from 'uuidv4';
>>>>>>> 97759dc (chore: addedd other user model fields)
=======
import passport from './middlewares/passport.middleware';
import docs from './documentation/index';
import routes from './routes/index';
import 'dotenv';
>>>>>>> 86d4444 (chore: updated yarn.lock)

const app = express();

const port = process.env.PORT || 5000;
>>>>>>> 0b01047 (chore: some rebase commit)

<<<<<<< HEAD
const app = express();
=======
>>>>>>> 4e05ae2 (minor changes)
=======
>>>>>>> 6d0b069 (chore: minor changes)
const port = process.env.PORT || 5000;

app.use(cors());
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize());
>>>>>>> 886728a (finished rebasing and updating user model)

<<<<<<< HEAD
const app = express();

<<<<<<< HEAD
app.use('/api/v1', routes);
app.use('/api-docs', serve, setup(docs));
<<<<<<< HEAD
>>>>>>> 0b01047 (chore: some rebase commit)
=======
>>>>>>> 5f2e4bf (chore: minor changes)
=======
>>>>>>> 6d0b069 (chore: minor changes)
const port = process.env.PORT || 5000;

app.use(cors());
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize());

<<<<<<< HEAD
app.use('/api/v1', routes);
app.use('/api-docs', serve, setup(docs));
<<<<<<< HEAD
=======
=======
>>>>>>> 4e05ae2 (minor changes)
const port = process.env.PORT || 5000;
>>>>>>> 6c5879f (rebase commit)

<<<<<<< HEAD
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to Barefoot Nomad.' });
=======
try {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use(cors());
  app.use(morgan('dev'));

  app.use(passport.initialize());

<<<<<<< HEAD
	app.use('/api/v1', routes);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
	app.use('/api-docs', serve, setup(docs));

	app.get('/uuid', (rea, res, next) => {
		let obj = {};

		for (let i = 0; i < 5; i++) {
			obj[i] = uuid();
		}
		res.send(obj);
	});

	app.listen(port, async () => {
=======

<<<<<<< HEAD
	app.listen(port, () => {
>>>>>>> 921d028 (chore: rebase commit)
=======
	app.listen(port, async () => {
>>>>>>> 2416061 (chore: added tests)
=======

	app.listen(port, () => {
>>>>>>> e08edc4 (chore: rebased dev)
=======

	app.listen(port, () => {
>>>>>>> 2dfab96 (feature: add user registration)
		console.log('server up running on port ', port);
	});
=======
  app.use('/api/v1', routes);
  app.use('/api-docs', serve, setup(docs));

  app.listen(port, () => {
    console.log('server up running on port ', port);
  });
>>>>>>> 86d4444 (chore: updated yarn.lock)
} catch (error) {
  console.log(error);
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const server = app.listen(port, () => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    console.log('server up running on port ', port);
<<<<<<< HEAD
>>>>>>> d0a89b9 (rebase commit)
=======
=======
	console.log('server up running on port ', port);
>>>>>>> 0b01047 (chore: some rebase commit)
>>>>>>> 6c5879f (rebase commit)
=======
	console.log('server up running on port ', port);
>>>>>>> 921d028 (chore: rebase commit)
});

app.get('*', (req, res) => {
  res.status(404).json({ message: 'Route not found.' });
});

app.listen(port, () => {
  console.log('server up running on port ', port);
=======
	console.log('server up running on port ', port);
>>>>>>> 0b01047 (chore: some rebase commit)
});

=======

>>>>>>> 4e05ae2 (minor changes)
=======

>>>>>>> 79ba677 (chore: minor changes)
=======

>>>>>>> e2aeb77 (chore: minor changes)
export default app;
=======
  //TESTING DATABASE CONNECTION
  if (mode === 'development') {
    const sequelize = new Sequelize(process.env.DEV_DATABASE_URL);
    sequelize
      .authenticate()
      .then(() => {
        console.log('DEV DATABASE CONNECTION ESTABLISHED!');
      })
      .catch((err) => {
        console.log('Unable to connect to the database: ', err);
      });
  }
  if (mode === 'test') {
    const sequelize = new Sequelize(process.env.TEST_DATABASE_URL);
    sequelize
      .authenticate()
      .then(() => {
        console.log('TEST DATABASE CONNECTION ESTABLISHED!');
      })
      .catch((err) => {
        console.log('Unable to connect to the database: ', err);
      });
  }
  if (mode === "production") {
    const sequelize = new Sequelize(process.env.PROD_DATABASE_URL);
    sequelize
      .authenticate()
      .then(() => {
        console.log("PRODUCTION DATABASE CONNECTION ESTABLISHED!");
      })
      .catch((err) => {
        console.log("Unable to connect to the database: ", err);
      });
  }
  app.use("/api/v1", routes);
  app.use("/api-docs", serve, setup(docs));
=======
	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());
>>>>>>> 0b01047 (chore: some rebase commit)
=======
	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());
>>>>>>> e08edc4 (chore: rebased dev)
=======
	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());
>>>>>>> 2dfab96 (feature: add user registration)

	app.use(cors());
	app.use(morgan('dev'));

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 6c5879f (rebase commit)
    // TESTING DATABASE CONNECTION
    if (mode === 'development') {
        const sequelize = new Sequelize(process.env.DEV_DATABASE_URL);
        sequelize
            .authenticate()
            .then(() => {
                console.log('DEV DATABASE CONNECTION ESTABLISHED!');
            })
            .catch((err) => {
                console.log('Unable to connect to the database: ', err);
            });
    }
    if (mode === 'test') {
        const sequelize = new Sequelize(process.env.TEST_DATABASE_URL);
        sequelize
            .authenticate()
            .then(() => {
                console.log('TEST DATABASE CONNECTION ESTABLISHED!');
            })
            .catch((err) => {
                console.log('Unable to connect to the database: ', err);
            });
    }
    if (mode === 'production') {
        const sequelize = new Sequelize(process.env.PROD_DATABASE_URL);
        sequelize
            .authenticate()
            .then(() => {
                console.log('PRODUCTION DATABASE CONNECTION ESTABLISHED!');
            })
            .catch((err) => {
                console.log('Unable to connect to the database: ', err);
            });
    }
    app.use('/api/v1', routes);
    app.use('/api-docs', serve, setup(docs));
<<<<<<< HEAD
>>>>>>> 7b33ab0 (#181339470-Configure ESLint (#15))
=======
=======
=======
>>>>>>> 4e05ae2 (minor changes)
=======
>>>>>>> 921d028 (chore: rebase commit)
	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());

	app.use(cors());
	app.use(morgan('dev'));

<<<<<<< HEAD
=======
>>>>>>> 0b01047 (chore: some rebase commit)
	app.use(passport.initialize());

	app.use('/api/v1', routes);
	app.use('/api-docs', serve, setup(docs));

	app.get('/uuid', (rea, res, next) => {
		let obj = {};

		for (let i = 0; i < 5; i++) {
			obj[i] = uuid();
		}
		res.send(obj);
	});

	app.listen(port, async () => {
		console.log('server up running on port ', port);
	});
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0b01047 (chore: some rebase commit)
>>>>>>> 6c5879f (rebase commit)
=======
>>>>>>> 0b01047 (chore: some rebase commit)
=======
=======
>>>>>>> e08edc4 (chore: rebased dev)
=======
>>>>>>> 2dfab96 (feature: add user registration)
	app.use(passport.initialize());

	app.use('/api/v1', routes);

<<<<<<< HEAD
<<<<<<< HEAD
	app.listen(port, async () => {
		console.log('server up running on port ', port);
	});
>>>>>>> 921d028 (chore: rebase commit)
} catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    console.log(error);
=======
<<<<<<< HEAD

console.log("authenticating ....");
async function connectdb() {
  try {
    const { sequelize } = db;
    await sequelize.authenticate();
    console.log("Database established successfully !!");
  } catch (err) {
    console.log("failed to connect to the database", err);
  }
>>>>>>> 7644ca4 (#181339524-docker-setup-for-cabal-project (#14))
=======
	console.log(error);
>>>>>>> 53839d8 (chore: rebase commit)
>>>>>>> d0a89b9 (rebase commit)
=======
	console.log(error);
>>>>>>> 53839d8 (chore: rebase commit)
=======
	console.log(error);
>>>>>>> 17a720a (chore: rebased dev)
=======
	app.listen(port, () => {
		console.log('server up running on port ', port);
	});
} catch (error) {
	console.log(error);
>>>>>>> e08edc4 (chore: rebased dev)
=======
	app.listen(port, () => {
		console.log('server up running on port ', port);
	});
} catch (error) {
	console.log(error);
>>>>>>> 2dfab96 (feature: add user registration)
}
<<<<<<< HEAD
<<<<<<< HEAD
connectdb();

app.use("/api/v1", routes);
app.use("/api-docs", serve, setup(docs));

app.get("/", function (req, res) {
  res.status(200).json({message: "Welcome to Barefoot Nomad." });
});
app.get("*", function (req, res) {
  res.status(404).json({message: "Route not found." });
});
const server = app.listen(port, () => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  console.log("server up running on port ", port);
=======
<<<<<<< HEAD
    console.log('server up running on port ', port);
=======
	console.log('server up running on port ', port);
>>>>>>> 0b01047 (chore: some rebase commit)
>>>>>>> 6c5879f (rebase commit)
=======
	console.log('server up running on port ', port);
>>>>>>> 0b01047 (chore: some rebase commit)
=======
	console.log('server up running on port ', port);
>>>>>>> 921d028 (chore: rebase commit)
});

export default server;
>>>>>>> 9c4883f (#181339469 setting-up-unit-tests (#4))
=======

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to Barefoot Nomad.' });
});

app.get('*', (req, res) => {
  res.status(404).json({ message: 'Route not found.' });
});

app.listen(port, () => {
  console.log('server up running on port ', port);
});

export default app;
>>>>>>> 886728a (finished rebasing and updating user model)
=======
=======
try {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use(cors());
  app.use(morgan('dev'));

  app.use(passport.initialize());

  app.use('/api/v1', routes);
  app.use('/api-docs', serve, setup(docs));

  app.listen(port, () => {
    console.log('server up running on port ', port);
  });
>>>>>>> 86d4444 (chore: updated yarn.lock)
} catch (error) {
  console.log(error);
}

export default app;
>>>>>>> 4e05ae2 (minor changes)
=======

export default app;
>>>>>>> 79ba677 (chore: minor changes)
=======

export default app;
>>>>>>> e2aeb77 (chore: minor changes)
>>>>>>> 08689d6 (* chore/changed procfile setting)
