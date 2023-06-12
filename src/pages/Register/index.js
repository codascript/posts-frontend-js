import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { get } from 'lodash'

import { SmallContainer } from '../../styles/GlobalStyles'
import { Form } from './styled'
import axios from '../../services/axios'
import history from '../../services/history'
import Loading from '../../components/Loading'

export default function Register() {
  const [isLoading, setIsLoading] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    let formErrors = false

    if (name.length === 0) {
      formErrors = true
      toast.error('Nome obrigatório!')
    }

    if (email.length === 0) {
      formErrors = true
      toast.error('E-mail obrigatório!')
    }

    if (password.length === 0) {
      formErrors = true
      toast.error('Senha obrigatória!')
    }

    if (confirmPassword.length === 0) {
      formErrors = true
      toast.error('Confirmação de senha obrigatória!')
    }

    if (password !== confirmPassword) {
      formErrors = true
      toast.error('Senha e confirmação de senha devem ser iguais!')
    }

    if (formErrors) return

    setIsLoading(true)

    try {

      const response = await axios.post('/register', {
        name, 
        email, 
        password, 
        confirmPassword
      })

      setIsLoading(false)

      toast.success(response.data.message)
      history.push('/login')
    } catch (error) {
      const errors = get(error, 'response.data.data', [])

      setIsLoading(false)

      toast.error(error?.response?.data?.message)
      if (Array.isArray(errors)) errors.map(error => toast.error(error.message))
    }
  }

  return (
    <SmallContainer>
      <Loading isLoading={isLoading} />

      <h1>Crie sua conta</h1>
      <hr />

      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nome:
          <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Digite seu nome"/>
        </label>
        <label htmlFor="email">
          E-mail:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Digite seu e-mail"/>
        </label>
        <label htmlFor="password">
          Senha:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Digite sua senha"/>
        </label>
        <label htmlFor="confirmPassword">
          Confirme sua senha:
          <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Digite sua senha novamente"/>
        </label>

        <button type="submit">Criar conta</button>
      </Form>
    </SmallContainer>
  )
}