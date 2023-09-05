import UserDTO from '../DTO/users.dto.js'
import Mail from '../helpers/mail.js'
import { TicketService } from './index.js'

export default class UserRepository {
    constructor(dao) {
        this.dao = dao
        this.mail = new Mail()
    }

    get = async() => await this.dao.get()
    create = async(data) => {
        const dataToInsert = new UserDTO(data)
        return await this.dao.create(dataToInsert)
    }
    getByID = async(id) => await this.dao.getByID(id)

    addTicket = async(userID, ticketID) => {
        const user = await this.dao.getByID(userID)
        user.tickets.push(ticketID)
        return this.dao.update(userID, user)
    }

    reminder = async(userID) => {
        const user = await this.dao.getByID(userID)
        let html = `<h1>Tickets:</h1>`

        for (let index = 0; index < user.tickets.length; index++) {
            const ticketID = user.tickets[index]
            const ticket = await TicketService.getByID(ticketID)
            html = html.concat(`<h2>${ticket.name}</h2><p>${ticket.description}</p>`)
            
        }
        const result = this.mail.send(user, "Tickets reminder!", html)
        return result
    }
}