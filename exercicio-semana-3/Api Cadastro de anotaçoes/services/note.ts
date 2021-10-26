import { INote } from "../types/INote"
import { connect } from '../libs/mongodb'
import { Note } from '../models/noteModel'
import { Log } from '../models/logModel'

const list = async (userId?: string, page=1, perPage = 50) => {
    await connect()
    const maxPages= Math.min(perPage, 100)
    const skip = (+page-1) * (+maxPages)
    const result = await Note.find({user: userId}).skip(skip).limit(maxPages)
    await Log.create({user: userId, description: 'Listagem de anotações'})
    return result
}

const get = async (id: string, userId?: string) => {
    if (!id) {
      throw new Error("Informe o campo id!")
    }
    
    const note = await Note.findById(id)
  
    if (!note) {
        throw new Error("Nenhuma anotação encontrada para o id informado!")
    }
    
    await Log.create({user: userId, description: 'Listagem de uma anotação'})
    
    return note
}

const create = async (note: INote,  userId?: string) => {
    if (!note.title) {
        throw new Error("Informe o campo título!")
    }
  
    if (!note.description) {
        throw new Error("Informe o campo descrição!")
    }

    

    note.user = userId

    await Note.create(note)
    
    await Log.create({user: userId, description: 'Nota criada'})
    
    return true
  
}

const update = async (note: INote,  userId?: string) => {
    if (!note.id) {
        throw new Error("Informe o campo id!")
    }

    if (!note.title) {
        throw new Error("Informe o campo título!")
    }
  
    if (!note.description) {
        throw new Error("Informe o campo descrição!")
    }
  
    const noteFound = await Note.findByIdAndUpdate(note.id, note)
  
    if (!noteFound) {
      throw new Error("Nenhuma anotação encontrada para o id informado!")
    }
    
    await Log.create({user: userId, description: 'Nota editada'})
    
    return true
}

const remove = async (id: string, userId?: string) => {
    if (!id) {
        throw new Error("Informe o campo id!")
    }
  
    const note = await Note.findByIdAndRemove(id)
   
    if (!note) {
        throw new Error("Nenhuma anotação encontrada para o id informado!")
    }

    await Log.create({user: userId, description: 'Nota removida'})
  
    return true
}

export {
    list,
    get,
    create,
    update,
    remove
}
