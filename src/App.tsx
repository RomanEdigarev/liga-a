import React, {useEffect, useState} from 'react';
import './App.css';
import {GlobalStyle} from './globalStyles'
import {Posts} from './components/Posts/Posts'
import {PostType, UserType} from "./types/types";
import {getPosts, getUsers} from "./api/api";
import Search from "./components/Search/Search";

type State = {
    posts: PostType[] | null
    loading: boolean
    users: UserType[] | null
}

function App() {
    const [{users, posts, loading}, setState] = useState<State>({posts: null, loading: true, users: null})
    const [filter, setFilter] = useState<string | null>(null)
    const filteredPosts = filter ? posts!.filter(post => post.title.toLowerCase().includes(filter)) : posts


    useEffect(() => {
        const fetching = async () => {
            const users = await getUsers()
            const posts = await getPosts()
            setState({users, posts, loading: false})
        }

        fetching()
    }, [])

    const displayLoading = <div>Loading...</div>

    return (
        <>
            {
                loading ? displayLoading :
                    <>
                        <GlobalStyle/>
                        <Search setFilter={setFilter}/>
                        <Posts posts={filteredPosts} users={users}/>
                    </>
            }
        </>

    );
}

export default App;
