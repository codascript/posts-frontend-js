import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FaEdit, FaUserAlt } from 'react-icons/fa'

import { EditButton, ProfileContainer } from './styled'
import { Container } from '../../styles/GlobalStyles'
import axios from '../../services/axios'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import Posts from '../Posts'

export default function User({ match }) {
  const id = useSelector(state => state.auth.user.id)
  const username = useSelector(state => state.auth.user.name)
  
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [bio, setBio] = useState('')

  useEffect(() => {
    async function getData()  {
      try {
        
        const { data } = await axios.get(`/auth/users/${id}`)
        setName(data.data.name)
        setBio(data.data.bio)

        const imageUrl = data.data.image.url

        if (imageUrl.slice(imageUrl.lastIndexOf('/') + 1, imageUrl.length) !== "undefined") {
          setImage(data.data.image.url)
        }

      } catch (error) {
        toast.error(error?.response?.data?.message)
      }

    }

    getData()
  }, [id, username])

  return (
    <>
      <Container>
        <EditButton>
          <Link to='/user/edit' title="Editar sua conta">
            <FaEdit size={18} />
          </Link>
        </EditButton>

        <ProfileContainer>
          {image ? <img src={image} alt={name}></img> : <FaUserAlt size={60}></FaUserAlt>}
          <h1>{name}</h1>

          <hr />

          <p>{bio ? bio : "bio"}</p>
        </ProfileContainer>
      </Container>

      <Posts isUserPosts={true}></Posts>
    </>
  )
}

User.propTypes = {
  match: PropTypes.shape({}).isRequired
}