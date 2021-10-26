interface IUser {
    _id?: string,
    name?: string,
    email: string,
    password: string,
   

}

interface createUser{
    name: string,
    email: string,
    password: string
}

export {
    IUser,
    createUser
}