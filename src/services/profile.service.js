import { Profile, User } from "../database/models";

export default class Profiles {
    static async createProfile(data) {
        return await Profile.create(data)
    }

    static async updateProfile(data, id) {
        return await Profile.update(data, {
            where: {
                user_id: id
            },
            returning: true
        })
    }

}