import React, { useEffect, useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'

import { ProfileForm } from './styled'
import { Container } from '../../styles/GlobalStyles'
import axios from '../../services/axios'
import { useSelector } from 'react-redux'
import Loading from '../../components/Loading'
import history from '../../services/history'

export default function UserEdit() {
  const [isLoading, setIsLoading] = useState(false)
  
  const id = useSelector(state => state.auth.user.id)
  const username = useSelector(state => state.auth.user.name)
  
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [bio, setBio] = useState('')

  const [imagePreview, setImagePreview] = useState('')

  useEffect(() => {
    async function getData()  {
      try {
        setIsLoading(true)
        
        const { data } = await axios.get(`/auth/users/${id}`)

        setName(data.data.name)
        setBio(data.data.bio)
        

        const imageUrl = data.data.image.url

        if (imageUrl.slice(imageUrl.lastIndexOf('/') + 1, imageUrl.length) !== "undefined") {
          setImagePreview(data.data.image.url)
        }


        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
      }

    }

    getData()
  }, [id, username])

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      setIsLoading(true)

      const formData = new FormData()
      formData.append('name', name)
      formData.append('image', image)
      formData.append('bio', bio)

      await axios.put(`/auth/users/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      setIsLoading(false)

      history.push('/user')
    } catch (error) {
      setIsLoading(false)
    }
  }

  const handleChange = async e => {
    const file = e.target.files[0]
    const fileURL = URL.createObjectURL(file)

    setImage(file)
    setImagePreview(fileURL)
  }

  return (
    <>
      <Loading isLoading={isLoading} />
      <Container>
        <ProfileForm onSubmit={handleSubmit}>
          <label htmlFor="image">
            {
              imagePreview ? <img src={imagePreview} alt='Imagem' /> : <FaUserAlt size={120} title="Adicione uma imagem" />
            }
            <input type="file" id="image" onChange={handleChange} />
          </label>

          <input value={name} onChange={e => setName(e.target.value)} placeholder='Digite seu nome...'></input>

          <textarea value={bio} onChange={e => setBio(e.target.value)} placeholder='Digite sua bio aqui...'></textarea>

          <button type='submit'>Salvar</button>
        </ProfileForm>
      </Container>
    </>
  )
}