import styled from 'styled-components'

import * as colors from '../../config/colors'

export const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  label input {
    display: none;
  }

  label, label img {
    cursor: pointer;
    text-align: center;
  }

  label img {
    width: 100%;
    height: 200px;
    border-radius: 8px;
  }

  & input {
    color: white;
    background: none;
    border: 0;
    font-size: 32px;
    text-align: center;
    margin: 30px;
    border-bottom: 1px solid #ddd;
    transition: all 300ms ease-in-out;
  }

  & input:focus {
    border-bottom: 1px solid ${colors.green};
  }

  textarea {
    height: 150px;
    width: 100%;
    resize: none;
    padding: 12px 15px;
    font-size: 16px;
    background-color: #242424;
    border-radius: 4px;
    border: none;
    color: #fff;
  }

  button {
    margin-top: 30px;
  }
`