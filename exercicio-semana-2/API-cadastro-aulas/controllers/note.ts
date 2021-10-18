import { Request, Response } from 'express'
import * as note from '../services/note'
import { error } from '../libs/bindError'

const list = async (req: Request<any>, res: Response<any>) => {
    try {
        const notes = await note.list()
        return res.json(notes)
    } catch (err: any) {
        return error(res, err)
    }
}

const get = async (req: Request<any>, res: Response<any>) => {
    try {
        const id = req.params.id

        if(!id) return res.status(400).json({ message: 'Informe o campo id!' })    

        const noteFound = await note.get(id)
        res.json(noteFound)
    } catch (err: any) {
        return error(res, err)
    }

}

const create = async (req: Request<any>, res: Response<any>) => {
    try {
        const title = req.body.title
        const description = req.body.description

        const noteCreated = await note.create({ title, description })
        return res.json(noteCreated)
    } catch (err: any) {
        return error(res, err)
    }

  
}

const update = async (req: Request<any>, res: Response<any>) => {
    try {
        const id = req.body.id
        const title = req.body.title
        const description = req.body.description

        if (!id) {
            return res.status(400).json({ message: 'Informe o campo id!' })
        }

        const noteUpdated = await note.update({ id, title, description })
        return res.json(noteUpdated)
    } catch (err: any) {
        return error(res, err)
    }

}

const remove = async (req: Request<any>, res: Response<any>) => {
    try {
        const id = req.params.id

        if (!id) {
            return res.status(400).json({ message: 'Informe o campo id!' })
        }

        const noteDelete = await note.remove(id)
        
        res.json(noteDelete)

    } catch (err: any) {
        return error(res, err)
    }
}

//login


const search = async (req: Request<any>, res: Response<any>) => {
    try {
        const login = await note.search()
        return res.json(login)
    } catch (err: any) {
        return error(res, err)
    }
}


const createUser = async (req: Request<any>, res: Response<any>) => {
    try {
        const user = req.body.user
        const password = req.body.password

        const createdUser = await note.createUser({ user, password})
        return res.json(createdUser)
    } catch (err: any) {
        return error(res, err)
    }

  
}

export {
    list,
    get, 
    create,
    update, 
    remove,
    search,
    createUser
}