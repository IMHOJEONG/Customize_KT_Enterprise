import React, { useState } from 'react'
import styled from 'styled-components';
import { useTrail, animated as a } from "react-spring";
import styles from './styles.thirdmenu.module.css';

const StyledBoxButton = styled.div`
    display: flex;
    align-items: center;
    justify-contents: center;
`;  

const Button = (menus, index) => {
    return (
        <StyledBoxButton /*onClick={goPage(array[index].url)}*/>
            {menus[index].name}
        </StyledBoxButton>
    )
}

export const ThirdMenu = ({ menus }) => {

    const [open, set] = useState(true);
    // array
    // console.log(array);
    // const array = SUBHEADERS[menu].slice();

    const trail = useTrail(menus.length, {
      config: { mass: 5, tension: 2000, friction: 200 },
      opacity: open ? 1 : 0,
      x: open ? 0 : 20,
      height: open ? 50 : 0,
      from: { opacity: 0, x: 20, height: 0 },
    });

    // const goPage = (url) =>{
    //     location.href=url
    // }
    
    return (
        <div className="trails-main" onClick={() => set(state => !state)}>
            {trail.map(({ height, ...style }, index) => {
                if(index === 0) {
                    return <></>;
                }
                else {
                    return (
                    <a.div key={index} className={styles.trailsText} style={style}>
                            <a.div style={{ height }}> 
                            {Button(menus, index)}    
                        </a.div>
                    </a.div>) 
                }
            })}
      </div>
    )
  }


// export default function ThirdMenu({ menu, image }) {

//     return (
//         <> 
//             {/* <a.div
//                 key={items[index]}
//                 className="trails-text"
//                 style={{
//                     ...rest,
//                     transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
//                 }}
//             >
//                 <a.div style={{ height }}>{items[index]}</a.div>
//             </a.div> */}
//         </>
//       );

// }

 
 