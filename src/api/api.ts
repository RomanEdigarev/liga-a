import axios from "axios";
import {Images, PostType, UserType} from "../types/types";

export const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
})

export const getPosts = async () : Promise<PostType[]> => {
    const images: Images[] = await axios.get<Images[]>('https://picsum.photos/v2/list?limit=100')
         .then(({data}) => data)
    const posts: PostType[] = await instance.get<PostType[]>('posts')
        .then(({data}) => data.map((post, index) => ({...post, image: images[index].download_url})))
        .catch(() => {
            throw new Error('ошибка')
        })
    return posts
}

export const getUsers = async () : Promise<UserType[]> => {
    const users = await instance.get<UserType[]>('users')
        .then(({data}) => data)
        .catch(() => {
            throw new Error('ошибка')
        })
    return users
}

