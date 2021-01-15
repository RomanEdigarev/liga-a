import React, {FC, useState} from 'react';
import {Author, Button, Container, Content, Post, Text, Title, Wrapper} from './Posts.elemets';
import {PostType, UserType} from "../../types/types";
import {pagination} from "../../lib/lib";
import {Pagination} from "./Pagination";

type Props = {
    users: UserType[] | null
    posts: PostType[] | null
}

export const Posts: FC<Props> = ({posts, users}) => {
    const [currentPage, setCurrentPage] = useState<number>(1)

    const {currentArray: currentPosts, pagesCount} = pagination<PostType>(posts!, currentPage)

    const nextPage = () => {
        setCurrentPage(currentPage + 1)
        window.scrollTo(0, 0)
    }

    const prevPage = () => {
        setCurrentPage(currentPage - 1)
        window.scrollTo(0, 0)
    }

    return (
        <Container>
            {
                currentPosts?.map(post => {
                    const currentUser = users?.find(user => user.id === post.userId)
                    return (
                        <Post key={post.id} image={post.image!}>
                            <Content>
                                <Author>{`${currentUser?.name} @${currentUser?.username}`}</Author>
                                <Title>{post.title}</Title>
                                <Wrapper>
                                    <Text>{post.body}</Text>
                                    <Button>Подробнее</Button>
                                </Wrapper>
                            </Content>
                        </Post>
                    )
                })
            }

            <Pagination currentPage={currentPage} nextPage={nextPage} prevPage={prevPage} pagesCount={pagesCount}/>
        </Container>
    )
}



