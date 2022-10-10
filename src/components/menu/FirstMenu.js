import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components';
import { useSpring, a } from '@react-spring/web'
import useMeasure from 'react-use-measure';
import { Container, Title, Frame, Content, toggle } from './FirstMenuStyles'
import * as Icons from './FirstMenuIcons';
import CategoryData from './mainData/Category.json';
import SubCategoryData from './mainData/SubCategory.json';

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => void (ref.current = value), [value]);
    return ref.current;
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 10vw;
  height: 100%;
  font-family: "Noto_Sans";
`

const InnerFrame = styled.div`
  display: flex; 

`;

const Tree = React.memo(({ children, name, style, 
  item, 
  onMouseOver,
  onMouseLeave,
  defaultOpen = false }) => {
    
  const [isOpen, setOpen] = useState(defaultOpen);
  const previous = usePrevious(isOpen);
  const [ref, { height: viewHeight }] = useMeasure();
  const { height, opacity, y } = useSpring({
    from: { height: 0, opacity: 0, y: 0 },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      
      y: isOpen ? 0 : 20,
    },
  });
  
  const goNextPage = (item) => {
    if(item){
      window.location.href =`${item.url}`
      return;
    }

  } 

  const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`]
    
  
    if(onMouseOver && onMouseLeave) {
      return (
        <Frame
        onMouseOver={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <InnerFrame>
          <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)}
          />
          <Title style={style} onClick={()=>goNextPage(item)}>{name}</Title>
        </InnerFrame>
        <Content
         
          style={{
            opacity,
            height: isOpen && previous === isOpen ? 'auto' : height,
            pointerEvents: isOpen? 'auto' : 'none', 
            width: "15vw",
            maxWidth: '15vw',
            minHeight: 'auto',
            maxHeight: '40vh',
          }}>
          <a.div ref={ref} style={{ y }} children={children} />
        </Content>
      </Frame>
      )
    }
    else {
      return (<Frame>
        <InnerFrame>
          <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)}
          />
          <Title style={style} onClick={()=>goNextPage(item)}>{name}</Title>
        </InnerFrame>
        <Content
         
          style={{
            opacity,
            height: isOpen && previous === isOpen ? 'auto' : height,
            pointerEvents: isOpen? 'auto' : 'none', 
            width: "15vw",
            maxWidth: '15vw',
            minHeight: 'auto',
            maxHeight: '40vh',
          }}>
          <a.div ref={ref} style={{ y }} children={children} />
        </Content>
      </Frame>
      )
    }
  
})

export function FirstMenu({
  header
}) {
  
  const categoryDataArr = CategoryData.Data[header];
  const subCategoryDataArr = SubCategoryData.Data;
  return (
    <Container>
      <Tree name={header} defaultOpen style={{ fontWeight: 'bold',
        fontFamily: "'Noto_Sans', 'Noto Sans KR'"
      }}>
       <StyledDiv>
        {
          categoryDataArr.map((item, index)=>{
            
            return (
              <div key={index}>
            <Tree name={item.name} item={item} 
                  onMouseOver
                  onMouseLeave
            >
              {
                subCategoryDataArr[item.name] ? 
                subCategoryDataArr[item.name].map((item, index)=>{
                    if(item){
                      return <Tree name={item.name} item={item} key={index}
                          onMouseOver
                          onMouseLeave
                        style={{
                          fontFamily: "Noto Sans KR"
                        }}
                      />
                    }
                    else {
                      return ''
                    }
                  })
                : 
                 ''
              }
            </Tree> 
        </div>
            );
          })
        }
        </StyledDiv>
      </Tree>
    </Container>
    )
}