type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    address:{
        street: String
    },
    phone: string,
    website: string,
    company:{
        name: string
    }
}

export type UserFetched={
    user: User | null,
    error: string | null
}