import styled from 'styled-components'


export const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

export const Post = styled.div<{image: string}>`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, .3);
  width: 70%;
  min-height: 300px;
  position: relative;
  background-image: url(${({image}) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`

export const Content = styled.div`
  padding: 10px;
  background-color: white;
  width: 100%;
  position: absolute;
  bottom: 0;
  transform: translateY(100px);
  transition: all ease-in-out 0.3s;

  :hover {
    transform: translateY(0);
  }
`

export const Author = styled.span`
  font-size: 10px;
  font-weight: 600;
`

export const Wrapper = styled.div`
  transition: all ease-in-out 0.3s;
`

export const Title = styled.h1`
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 26px;
  font-weight: 300;
  color: gray;
`

export const Text = styled.p`
  margin-bottom: 20px;
`

export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 4px;
  color: #fff;
  border: none;
  outline: none;
  background-color: #0c0cfd;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  :hover {
    cursor: pointer;
    text-decoration: underline;
    background-color: #060680;
  }
`



