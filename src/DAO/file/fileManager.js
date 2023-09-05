import fs from 'fs'

class FileManager {
    constructor(path) {
        this.path = path
    }

    read = () => {
        if (fs.existsSync(this.path)) {
            return fs.promises.readFile(this.path, 'utf-8').then(r => JSON.parse(r))
        }
        return []
    }

    write = (list) => {
        return fs.promises.writeFile(this.path, JSON.stringify(list))
    }

    getNextID = list => {
        const count = list.length
        return (count > 0) ? list[count-1].id + 1 : 1
    }

    get = async() => {
        const data = await this.read()
        return data
    }

    getOneByParam = async(param, value) => {
        const data = await this.read()
        const obj = data.find(item => item[param] == value)
        return obj
    }

    add = async(obj) => {
        const list = await this.read()
        obj.id = this.getNextID(list)
        list.push(obj)
        await this.write(list)
        return obj
    }

    update = async(id, data) => {
        obj.id = id
        const list = await this.read()

        for (let index = 0; index < list.length; index++) {
            if (list[index].id == id) {
                list[index] = obj
                break
            }
            
        }

        await this.write(list)
        return obj
    }
}

export default FileManager