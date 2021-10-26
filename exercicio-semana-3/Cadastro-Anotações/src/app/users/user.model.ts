export interface ResponseUsers {
    id?: number;
    title: string;
    description: string;
}

export interface RequestCreate {
    title: string;
    description: string;
    status:string
}

export interface ResponseUpdate {
    title: string;
    description: string;
    _id?: string;
}

export interface ResponseLogin {
    name?:string,
    email: string;
    password: string;
}



export interface updateNote{
    id:string,
    title:string,
    description:string,
    status:string
  }