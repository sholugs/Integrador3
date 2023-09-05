import TicketDTO from '../DTO/tickets.dto.js'

export default class TicketRepository {
    constructor(dao) {
        this.dao = dao
    }

    get = async() => await this.dao.get()
    create = async(data) => {
        const dataToInsert = new TicketDTO(data)
        return await this.dao.create(dataToInsert)
    }
    getByID = async(id) => await this.dao.getByID(id)
}