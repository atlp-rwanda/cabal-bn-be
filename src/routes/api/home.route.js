import express from 'express';

const home = express.Router();

<<<<<<< HEAD
<<<<<<< HEAD
home.get("/", (req, res, next) => {
  res.status(200).json({ message: "Welcome to our homepage" });
<<<<<<< HEAD
=======
home.get('/', (req, res, next) => {
  res.send('Welcome to our homepage');
>>>>>>> 9c4883f (#181339469 setting-up-unit-tests (#4))
});
=======
home.get("/", (req, res, next) => {
<<<<<<< HEAD
    res.status(200).send({ message: "Welcome to our homepage" });
})
>>>>>>> f0f2d1f (chore(documentation):settingup the documentationfor the project (#2))
=======
  res.status(200).json({ message: "Welcome to our homepage" });
});
>>>>>>> 7644ca4 (#181339524-docker-setup-for-cabal-project (#14))
=======
});
>>>>>>> 886728a (finished rebasing and updating user model)

export default home;
