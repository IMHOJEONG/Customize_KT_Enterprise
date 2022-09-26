import React from 'react';
// import sections
import HomeDrawer from './HomeDrawer';
// import Hero from '../components/sections/Hero';
// import FeaturesTiles from '../components/sections/FeaturesTiles';
// import FeaturesSplit from '../components/sections/FeaturesSplit';
// import Testimonial from '../components/sections/Testimonial';
// import Cta from '../components/sections/Cta';

// import { useSpring, animated, useTransition } from 'react-spring';
// const transitions = useTransition(show, null, {
//   from : {
//     position: "fixed", 
//     opacity: 0, 
//     width: 0
//   },
//   enter: {
//     opacity: 1, 
//     width: 320
//   },
//   leave: {
//     opacity: 0, 
//     width: 0
//   }
// });

// function LoopTrue() {
//   const styles = useSpring({
//     loop: true,
//     from: {
//       rotateZ: 0
//     },
//     to: {
//       rotateZ: 180
//     }
//   })
//   return (
//     <animated.div
//       style={{
//         width: 80,
//         height: 80,
//         backgroundColor: '#46e891',
//         borderRadius: 16,
//         ...styles,
//       }}
//     />
//   )
// }


const Home = () => {

  // const props = useSpring({
  //   to: { opacity: 1 }, 
  //   from: { opacity: 0 }
  // })

  return (
    <>
      {/* <animated.div style={props}>
        I will fade in
      </animated.div>
      <LoopTrue />
      <Test /> */}
      <HomeDrawer />
      {/* <Hero className="illustration-section-01" /> */}
      {/* <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split /> */}

    </>
  );
}

export default Home;