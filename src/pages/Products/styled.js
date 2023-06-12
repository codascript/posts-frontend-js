import styled from 'styled-components'

import * as colors from '../../config/colors'

export const ProductContainer = styled.div`
  margin-top: 30px;

  table {
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
    border-radius: 1em;
    overflow: hidden;
  }

  th, td {
    text-align: center;
    background: ${colors.primaryColor};
    border-bottom: 2px solid ${colors.primaryDarkColor};
    padding: 8px;
  }
  
  th {
    background-color: ${colors.green};
  }

  td {
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export const ProductPicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 4px;
  }
`