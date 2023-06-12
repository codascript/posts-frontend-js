import styled from 'styled-components'
import { primaryDarkColor } from '../../config/colors'

export const Nav = styled.nav`
  background-color: ${primaryDarkColor};

  a {
    color: #acacac;
    font-weight: bold;
    transition: all 300ms ease-in-out;
  }

  a:hover {
    color: #fff;
  }

  @media (max-width: 800px) {
    padding: 0 20px;

    a {
      color: #fff
    }
}
`

export const MenuContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
`

export const Logo = styled.div`
  a {
    font-size: 24px;
    font-weight: normal;
    color: #acacac;
  }

  span {
    color: #fff;
  }
`

export const MenuItens = styled.div`
  a {
    margin: 0 8px;
  }
`