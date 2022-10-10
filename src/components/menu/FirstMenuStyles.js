import styled from 'styled-components'
import { animated } from '@react-spring/web'

export const Container = styled('div')`

  margin: 0;
  padding: 1vh 1vw;
  font-size: 1.1vw;
  line-height: 21px;
  max-height: 100%;
  --webkit-user-select: none;
  user-select: none;
  display: flex;
  border-radius: 5px;
  overflow-y: scroll;
  overflow-x: hidden;
  box-shadow: 2px 1px 2px 2px lightslategrey;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar:hover {
    cursor: pointer;
  }

  &::-webkit-scrollbar-track {
      background-color: #e4e4e4;
      border-radius: 15px;
  }
  &::-webkit-scrollbar-thumb {
      background-color: #d4aa70;
      border-radius: 100px;
  }
  & {
      scrollbar-color: #D4AA70 #e4e4e4;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%);  
    box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
    border-radius: 5px;
  }
`;

export const Frame = styled('div')`
  position: relative;
  padding: 0.4vh 0.4vw;
  width: 15vw;
  vertical-align: middle;
  color: #24292e;
  fill: #24292e;

  display: flex;
  flex-direction: column;
  
`;

export const Title = styled('span')`
  
    vertical-align: middle;
    cursor:pointer;
    font-family: "Noto_Sans", "Noto Sans KR";
    &:hover {
      background: black; 
      color: white;
    }
`;

export const Content = styled(animated.div)`

  will-change: transform, opacity, height;
  margin-left: 0.6vw;
  padding: 0px 0px 0px 14px;
  border-left: 1px dashed rgba(255, 255, 255, 0.4);
`;

export const toggle = {
  width: '1.2vw',
  height: '1.2vh',
  marginTop: '0.5vh',
  marginRight: '0.5vw',
  transform: 'scale(2)',
  cursor: 'pointer',
  verticalAlign: 'middle',
}
