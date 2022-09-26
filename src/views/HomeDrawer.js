import React, { useState } from 'react'
import { useTransition, animated } from '@react-spring/web'
// import shuffle from 'lodash.shuffle'

// import data from './data'

// import styles from './styles.module.css'


export default function HomeDrawer() {
    
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

}
