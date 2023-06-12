import styled from 'styled-components'

import * as colors from '../../config/colors'

export const PostContainer = styled.div`

  p {
    margin: 0 0 20px 0;
  }

  img {
    width: 100%;
    height: fit-content;
    border-radius: 4px;
  }

  & + div {
    border-top: 1px solid ${colors.primaryColor};
  }

  hr {
    margin: 8px 0;
  }
`

export const PostHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const PostUserImage = styled.div`

  img {
    width: 58px;
    height: 58px;
    border-radius: 50%;
  }
`

export const PostData = styled.div`
  margin-left: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-weight: normal;
  }

  span {
    font-size: 16px;
    color: #ACACAC;
  }
`