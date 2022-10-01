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
`

const InnerFrame = styled.div`
  display: flex; 

`;

const Tree = React.memo(({ children, name, style, 
  item, 
  defaultOpen = false }) => {
    
  const [isOpen, setOpen] = useState(defaultOpen)
  const previous = usePrevious(isOpen)
  const [ref, { height: viewHeight }] = useMeasure()
  const { height, opacity, y } = useSpring({
    from: { height: 0, opacity: 0, y: 0 },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      
      y: isOpen ? 0 : 20,
    },
  })
  
  const goNextPage = (isOpen, item) => {
      window.open(`${item.url}`, "_blank")
  } 

  const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`]
  return (
    <Frame>
      <InnerFrame>
        <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)} />
        <Title style={style} onClick={(isOpen)=>goNextPage(isOpen, item)}>{name}</Title>
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
          // height: '15vh'
        }}>
        <a.div ref={ref} style={{ y }} children={children} />
      </Content>
    </Frame>
  )
})

export function FirstMenu({
  header
}) {
  // console.log(CategoryData.Data[header]);
  const categoryDataArr = CategoryData.Data[header];
  const subCategoryDataArr = SubCategoryData.Data;
  return (
    <Container>
      <Tree name={header} defaultOpen style={{ fontWeight: 'bold',
      }}>
       <StyledDiv>
        {
          categoryDataArr.map((item, index)=>{
            
            // console.log(`item : ${item}`);
            return (
              <>
            <Tree name={item.name} item={item}>
              {
                subCategoryDataArr[item.name] ? 
                subCategoryDataArr[item.name].map((item, index)=>{
                    console.log(item);
                    if(item){
                      return <Tree name={item.name} item={item}/>
                    }
                    else {
                      return ''
                    }
                  })
                : 
                 ''
              }
              {/* <Tree name="hello" /> */}
              {/* <Tree name="sub-subtree with children">
                <Tree name="child 1" style={{ color: '#37ceff' }} />
                <Tree name="child 2" style={{ color: '#37ceff' }} />
                <Tree name="child 3" style={{ color: '#37ceff' }} />
              </Tree> */}
            </Tree>
            {/* <Tree name="subtree with children">
              <Tree name="hello" />
              <Tree name="sub-subtree with children">
                <Tree name="child 1" style={{ color: '#37ceff' }} />
                <Tree name="child 2" style={{ color: '#37ceff' }} />
                <Tree name="child 3" style={{ color: '#37ceff' }} />
                <Tree name="custom content">
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: 200,
                      padding: 10,
                    }}>
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        background: 'black',
                        borderRadius: 5,
                      }}
                      />
                  </div>
                </Tree>
              </Tree>
            </Tree> */}
            {/* <Tree name="world" /> */}
            {/* <Tree name={<span>🙀 something something</span>} /> */}
        </>
            );
          })
        }
        </StyledDiv>
      </Tree>
    </Container>
    )
}