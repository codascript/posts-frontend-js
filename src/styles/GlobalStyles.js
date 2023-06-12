import styled, { createGlobalStyle } from 'styled-components'
import * as colors from '../config/colors'
import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,700;1,100&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: Roboto, sans-serif;
    background-color: ${colors.primaryColor};
    color: #fff;
  }

  html, body, #root {
    height: 100%;
  }

  body::-webkit-scrollbar {
  width: 1em;
  }
  
  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 1px;
  }

  textarea::-webkit-scrollbar {
  width: 1em;
  }
  
  textarea::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  
  textarea::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 6px;
  }

  button {
    cursor: pointer;
    background-color: ${colors.primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
    transition: all 300ms ease-in-out;
  }

  button:hover {
    background-color: ${colors.green};
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  ul {
    list-style: none;
  }

  h1 {
    font-weight: normal;
  }

  hr {
    width: 100%;
    height: 1px;
    border: 0;
    border-top: 1px solid ${colors.primaryColor};
    margin: 0.8rem 0;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success,
  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
  }
`

export const Container = styled.section`
  max-width: 800px;
  background-color: ${colors.primaryDarkColor};
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

export const SmallContainer = styled.div`
  max-width: 500px;
  background-color: ${colors.primaryDarkColor};
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h1 {
    text-align: center;
  }

  button {
    margin-top: 20px;
  }
`

export const FooterSpace = styled.div`
  height: 15px;
`