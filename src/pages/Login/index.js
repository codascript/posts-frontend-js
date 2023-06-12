import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { get } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'

import { Form } from './styled'
import { SmallContainer } from '../../styles/GlobalStyles'
import * as actions from '../../store/modules/auth/actions'

import Loading from '../../components/Loading'

export default function Login(props) {
  const dispatch = useDispatch()
  const prevPath = get(props, 'location.state.prevPath', '/login')

  const isLoading = useSelector(state => state.auth.isLoading)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    let formErrors = false


    if (email.length === 0) {
      formErrors = true
      toast.error('E-mail obrigatório!')
    }

    if (password.length === 0) {
      formErrors = true
      toast.error('Senha obrigatória!')
    }

    if (formErrors) return

    dispatch(actions.loginRequest({ email, password, prevPath }))
  }

  return (
    <SmallContainer>
      <Loading isLoading={isLoading} />

      <h1>Acesse sua conta</h1>
      <hr />

      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">
          E-mail:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Digite seu e-mail"/>
        </label>
        <label htmlFor="password">
          Senha:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Digite sua senha"/>
        </label>

        <button type="submit">Entrar</button>
      </Form>
    </SmallContainer>
  )
}