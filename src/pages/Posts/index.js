import React, { useEffect, useState } from 'react'

import { Container, FooterSpace } from '../../styles/GlobalStyles'
import { PostContainer, PostData, PostHeader, PostUserImage } from './styled'

import axios from '../../services/axios'
import Loading from '../../components/Loading'
import PostCreator from '../../components/PostCreator'
import { FaUserAlt } from 'react-icons/fa'

export default function Posts({ isUserPosts = false }) {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function getData() {
      setIsLoading(true)

      const response = await axios.get('/auth/posts', { params: { isUserPosts } })
      setPosts(response.data.data)

      setIsLoading(false)
    }

    getData()
  }, [isUserPosts])

  return (
    <>
      <PostCreator />

      <Loading isLoading={isLoading} />

      {posts.length === 0 ? (
        <>
          <Container>Nenhum post no momento.</Container>
        </>
      ) : (
        <>
            {posts.map(post => {
              return (
                <>
                  <Container>
                    <PostContainer id={post._id.toString()}>
                      <PostHeader>
                        <PostUserImage>
                          {post?.user[0]?.image?.url ? <img src={post.user[0].image.url} alt={post.user[0].name}></img> : <FaUserAlt size={58}></FaUserAlt>}
                        </PostUserImage>

                        <PostData>
                          <h2>{post.user[0].name}</h2>
                          <span>{new Date(post.createdAt).toLocaleDateString()} - {new Date(post.createdAt).toLocaleTimeString()}</span>
                        </PostData>
                      </PostHeader>

                      <hr />

                      <p>{post.message}</p>
                      {post?.image?.url ? <img src={post.image.url} alt={post.message}></img> : ''}
                    </PostContainer>
                  </Container>
                </>
              )
            })}
        </>
      )}

      <FooterSpace />
    </>
  )
}