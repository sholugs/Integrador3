import TicketModel from "./models/tickets.model.js";

export default class Ticket {
    get = async() => await TicketModel.find()
    create = async(data) => await TicketModel.create(data)
    getByID = async(id) => await TicketModel.findById(id)
    update = async(id, data) => await TicketModel.updateOne({ _id: id }, data)
}