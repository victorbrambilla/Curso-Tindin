export interface ResponseUsers {
    id?: number;
    title: string;
    description: string;
}

export interface RequestCreate {
    title: string;
    description: string;
}

export interface ResponseUpdate {
    title: string;
    description: string;
    id?: number;
}

export interface ResponseLogin {
    user?: string,
    email?: string;
    password: string | number;
}



