import FileManager from "./fileManager.js"

export default class Ticket {
    constructor() {
        this.fileManager = new FileManager('./db/tickets.json')
    }
    get = async() => await this.fileManager.get()
    create = async(data) => await this.fileManager.add(data)
    getByID = async(id) => await this.fileManager.getOneByParam("id", id)
    update = async(id, data) => await this.fileManager.update(id, data)
}