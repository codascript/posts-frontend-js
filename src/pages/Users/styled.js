import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img, h1, p {
    margin-top: 20px;
  }

  h1 {
    font-weight: normal;
  }

  & img {
    width: 25%;
    height: 25%;
    overflow:hidden;
    border-radius: 8px;
  }

  & p {
    padding: 12px 15px;
    font-size: 16px;
  }
`

export const EditButton = styled.div`
  display: flex;
  align-items: end;
  justify-content: end;
`