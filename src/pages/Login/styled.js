import styled from 'styled-components'

import * as colors from '../../config/colors'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  label {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
  }

  input {
    color: #fff;
    height: 40px;
    width: 100%;
    font-size: 18px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #ddd;
    padding: 0 10px;
    margin-top: 5px;
    transition: all 300ms ease-in-out;

    &:focus {
      border-bottom: 1px solid ${colors.green};
    }
  }
`