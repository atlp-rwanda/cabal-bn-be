import { User } from 'database/models';

export default class UserService {
    async createUser(data) {
        const newUser = await User.create(data);
        return newUser;
    }

    async userExist(email) {
        const user = await User.findOne({ where: { email } });
        if (user) {
            return user;
        }
        return false;
    };

    async userLogin(data, res) {
        const userExist = await User.findOne({
            where: { email: data }
        })

        if (userExist) {
            return userExist
        }

        return res.status(404).json({ message: "User not found in database" })
    }

    async getUser(email) {
        return User.findOne({ where: { email } });
    }
}