import React, { useState } from 'react'

import { PostForm, Menu, MenuAttach } from './styled'
import { FaImage } from 'react-icons/fa'
import Loading from '../Loading'
import axios from '../../services/axios'
import history from '../../services/history'
import { Container } from '../../styles/GlobalStyles'

export default function PostCreator() {
  const [isLoading, setIsLoading] = useState(false)

  const [message, setMessage] = useState('')
  const [image, setImage] = useState('')
  const [imagePreview, setImagePreview] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    if (message.length === 0 && !image) {
      return
    }

    try {
      setIsLoading(true)

      const formData = new FormData()
      formData.append('message', message)
      formData.append('image', image)


      await axios.post('/auth/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      setIsLoading(false)

      history.go(0)
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
    <Container>
      <Loading isLoading={isLoading} />
      <PostForm onSubmit={handleSubmit}>
        <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder='Digite seu post aqui...'></textarea>

        <Menu>
          <MenuAttach>
            <label htmlFor="image">
              {
                image ? <img src={imagePreview} alt='Imagem' /> : <FaImage size={24} title="Adicione uma imagem" />
              }
              <input type="file" id="image" onChange={handleChange} />
            </label>
          </MenuAttach>

          <button type="submit">Postar</button>
        </Menu>
      </PostForm>
    </Container>
  )
}