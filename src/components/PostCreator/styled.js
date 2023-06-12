import styled from 'styled-components'

export const PostForm = styled.form`

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
`

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 12px 10px 0 10px;
`

export const MenuAttach = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  fill: white;
  cursor: pointer;

  label {
    display: flex;
    flex-direction: row;
  }

  label, label img {
    cursor: pointer;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
  }

  label span {
    margin-left: 10px;
  }
  
  input {
    display: none;
  }
`