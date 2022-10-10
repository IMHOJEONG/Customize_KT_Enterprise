import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import CursorPng from './cursor.png';

const StyledDiv = styled.div`

   & > .cursor-dot,
   & > .cursor-dot-outline {
     pointer-events: none;
     position: absolute;
     z-index: 4;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     border-radius: 50%;
     opacity: 1;
     transition: opacity 0.3s ease-in-out,
        transform 0.3s ease-in-out;
   }

   & > .cursor-dot-outline {
    width: 15px; 
    height: 15px;
    background-image: url("${CursorPng}");
    background-repeat: no-repeat;
    background-position: center;
   } 

   & > .links-container {
    display: grid;
    place-items: center;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 50px;
   }


`;

export const Cursor = () => {
    const delay = 1;
    const dot = useRef(null);
    const dotOutline = useRef(null);
    const list = useRef(null);
    const cursorVisible = useRef(true);
    const cursorEnlarged = useRef(false);
  
    const endX = useRef(window.innerWidth / 2);
    const endY = useRef(window.innerHeight / 2);
    const _x = useRef(0);
    const _y = useRef(0);
    const requestRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', mouseOverEvent);
        document.addEventListener('mouseup', mouseOutEvent);
        document.addEventListener('mousemove', mouseMoveEvent);
        document.addEventListener('mouseenter', mouseEnterEvent);
        document.addEventListener('mouseleave', mouseLeaveEvent);
    
        animateDotOutline();
    
        return () => {
          document.removeEventListener('mousedown', mouseOverEvent);
          document.removeEventListener('mouseup', mouseOutEvent);
          document.removeEventListener('mousemove', mouseMoveEvent);
          document.removeEventListener('mouseenter', mouseEnterEvent);
          document.removeEventListener('mouseleave', mouseLeaveEvent);
    
          cancelAnimationFrame(requestRef.current);
        };
      });

      const toggleCursorVisibility = () => {
        if (cursorVisible.current) {
          dot.current.style.opacity = 1;
          dotOutline.current.style.opacity = 1;
        } else {
          dot.current.style.opacity = 0;
          dotOutline.current.style.opacity = 0;
        }
      };
    
      const toggleCursorSize = () => {
        if (cursorEnlarged.current) {
          dot.current.style.transform = 'translate(-50%, -50%) scale(0.75)';
          dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
        } else {
          dot.current.style.transform = 'translate(-50%, -50%) scale(1)';
          dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1)';
        }
      };
    
      const mouseOverEvent = () => {
        cursorEnlarged.current = true;
        toggleCursorSize();
      };
    
      const mouseOutEvent = () => {
        cursorEnlarged.current = false;
        toggleCursorSize();
      };
    
      const mouseEnterEvent = () => {
        cursorVisible.current = true;
        toggleCursorVisibility();
      };
    
      const mouseLeaveEvent = () => {
        cursorVisible.current = false;
        toggleCursorVisibility();
      };
    
      const mouseMoveEvent = e => {
        cursorVisible.current = true;
        toggleCursorVisibility();
    
        endX.current = e.pageX;
        endY.current = e.pageY;
    
        dot.current.style.top = endY.current + 'px';
        dot.current.style.left = endX.current + 'px';
      };
    
      const animateDotOutline = () => {
        _x.current += (endX.current - _x.current) / delay;
        _y.current += (endY.current - _y.current) / delay;
    
        dotOutline.current.style.top = _y.current + 'px';
        dotOutline.current.style.left = _x.current + 'px';
    
        requestRef.current = requestAnimationFrame(animateDotOutline);
      };


    return (
        <StyledDiv>
            <div ref={dotOutline} 
                className="cursor-dot-outline">
            </div>
            <div ref={dot} 
                className="cursor-dot">
            </div>

            <div ref={list} className="links-container">
                {/* {[...Array(4).keys()].map(i => (
                    <Link key={i} src={getImage(i+1)} />
                ))} */}
            </div>
        </StyledDiv>
    )
}

// export const Link = ({ src }) => {
//     return <img src={src} />;
// }
