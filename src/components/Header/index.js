import React from 'react'
import { FaSignInAlt, FaUserAlt, FaSignOutAlt, FaHome } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { Nav, Logo, MenuContent, MenuItens } from './styled'
import * as actions from '../../store/modules/auth/actions'
import history from '../../services/history'

export default function Header () {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const location = useLocation()
  const isUserProfileRoute = location.pathname === '/user'

  const handleLogout = e => {
    e.preventDefault()

    dispatch(actions.loginFailure())
    history.push('/login')
  }


  return (
    <Nav>
      <MenuContent>
        <Logo>
          <Link to='/'>
            Coda<span>Dev</span>
          </Link>
        </Logo>
        <MenuItens>
          {
            isLoggedIn ?
            (
              <>
                {isUserProfileRoute ? 
                  <>
                    <Link to='/' title="Página principal">
                      <FaHome size={24} />
                    </Link>
                  </> : 
                  <>
                    <Link to='/user' title="Acesse seu perfil">
                      <FaUserAlt size={24} />
                    </Link>
                  </>
                }
                <Link onClick={handleLogout} to='/logout' title="Sair da conta">
                  <FaSignOutAlt size={24} />
                </Link>
              </>
            ) :
            (
              <>
                <Link to='/register' title="Crie sua conta">
                  <FaUserAlt size={24} />
                </Link>
                <Link to='/login' title="Acesse sua conta">
                  <FaSignInAlt size={24} />
                </Link>
              </>
            )
          }
        </MenuItens>
      </MenuContent>
    </Nav>
  )
}