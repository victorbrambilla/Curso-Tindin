interface INote {
    id?: string,
    title: string,
    description: string
}

interface ILogin{
    user: string,
    password: string | number
}

export {
    INote,
    ILogin
}

