import userSchema from './user.schema';

const userValidation = (req, res, next) => {
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4e05ae2 (minor changes)
=======
	console.log('user validation runned = ', req.body);
>>>>>>> 17a720a (chore: rebased dev)
=======
>>>>>>> e2aeb77 (chore: minor changes)
=======
>>>>>>> 203fb87 (chore: some rebase commit)
=======
>>>>>>> 60596c5 (chore: some rebase commit)
=======
	console.log('user validation runned = ', req.body);
>>>>>>> e08edc4 (chore: rebased dev)
=======
	console.log('user validation runned = ', req.body);
>>>>>>> 2dfab96 (feature: add user registration)
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 83da14f (chore: some minor changes)
<<<<<<< HEAD
=======
	console.log('user validation runned = ', req.body);
>>>>>>> d0a89b9 (rebase commit)
=======
>>>>>>> 4e05ae2 (minor changes)
=======
	console.log('user validation runned = ', req.body);
>>>>>>> 53839d8 (chore: rebase commit)
=======
>>>>>>> 79ba677 (chore: minor changes)
=======
=======
	console.log('user validation runned = ', req.body);
>>>>>>> e08edc4 (chore: rebased dev)
>>>>>>> 6aa9cbd (chore: some rebase commit)
=======
>>>>>>> 203fb87 (chore: some rebase commit)
=======
=======
>>>>>>> 83da14f (chore: some minor changes)
>>>>>>> 60596c5 (chore: some rebase commit)
=======

>>>>>>> 495c6bd (chore: some rebase commit)
=======
>>>>>>> 41efe18 (feature: rebase commmit)
=======
	console.log('user validation runned = ', req.body);
>>>>>>> 17a720a (chore: rebased dev)
=======
>>>>>>> e2aeb77 (chore: minor changes)
=======
	console.log('user validation runned = ', req.body);
>>>>>>> e08edc4 (chore: rebased dev)
=======
	console.log('user validation runned = ', req.body);
>>>>>>> 2dfab96 (feature: add user registration)
=======
>>>>>>> 83da14f (chore: some minor changes)
	try {
		const value = userSchema.validate(req.body);
		if (value.error) {
			res.status(406).json({
				message: value.error.details[0].message.replace(/["'`]+/g, ''),
			});
		} else {
			next();
		}
	} catch (error) {
		res.status(500).json({
			message:
				error.message ||
				error.message.replace(/["'`]+/g, '') ||
				'unexpected error occurred',
		});
	}
};

export default userValidation;
