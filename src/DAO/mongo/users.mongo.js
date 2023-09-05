import UserModel from "./models/users.model.js";

export default class User {
    get = async() => await UserModel.find()
    create = async(data) => await UserModel.create(data)
    getByID = async(id) => await UserModel.findById(id)
    update = async(id, data) => await UserModel.updateOne({ _id: id }, data)
}