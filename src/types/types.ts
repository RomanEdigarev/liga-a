export type PostType = {
    userId: number,
    id: number,
    title: string,
    body: string
    image?: string
}

export type UserType = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company
}

type Address = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
        lat: string,
        lng: string
    }
}

type Company = {
    name: string
    catchPhrase: string
    bs: string
}

export type Images = {
    author: string
    download_url: string
    height: number
    id: string
    url: string
    width: number
}
