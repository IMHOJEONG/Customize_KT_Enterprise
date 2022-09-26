import React, { useState, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'
// import shuffle from 'lodash.shuffle'

// import data from './data'

// import styles from './styles.module.css'


export default function HomeDrawer() {
    
    // return (
    //   <div className="App">
       
    //     {transitions?.map(
    //       ({ item, key, props }) =>
    //         item && (
    //           <animated.div
    //             key={key}
    //             style={{ opacity: props.opacity }}
    //             className="overlay"
    //           >
    //             <animated.div style={{ width: props.width }} className="drawer">
    //               Hey look it's a side drawer!
    //             </animated.div>
    //             <div className="fill" onClick={() => setShow(false)} />
    //           </animated.div>
    //         )
    //     )}
    //   </div>
    // );

  const [show, set] = useState(false)
  const transitions = useTransition(show, {
    from: { position: "fixed", opacity: 0, width: 0 },
      enter: { opacity: 1, width: 320, height: '100vh' },
      leave: { opacity: 0, width: 0 }
  })
  return (
    <>
     <button onClick={() => set((prevState) => !prevState)}>
          Click me
        </button>
        {
            transitions(
                (styles, item) => item && 
                    <animated.div style={styles}>
                        <animated.div style={{ width: styles.width }} className="drawer">
                            Hey look it's a side drawer!
                        </animated.div>
                        <div className="fill" onClick={() => set(false)} /> 
                    </animated.div>
              )
        }
    </>
  )
  
// const [rows, set] = useState(data)
// useEffect(() => {
//   const t = setInterval(() => set(shuffle), 2000)
//   return () => clearInterval(t)
// }, [])

// let height = 0
// const transitions = useTransition(
//   rows.map(data => ({ ...data, y: (height += data.height) - data.height })),
//   {
//     key: (item) => item.name,
//     from: { height: 0, opacity: 0 },
//     leave: { height: 0, opacity: 0 },
//     enter: ({ y, height }) => ({ y, height, opacity: 1 }),
//     update: ({ y, height }) => ({ y, height }),
//   }
// )

// return (
//   <div className={styles.list} style={{ height }}>
//     {transitions((style, item, t, index) => (
//       <animated.div className={styles.card} style={{ zIndex: data.length - index, ...style }}>
//         <div className={styles.cell}>
//           <div className={styles.details} style={{ backgroundImage: item.css }} />
//         </div>
//       </animated.div>
//     ))}
//   </div>
// )


}
