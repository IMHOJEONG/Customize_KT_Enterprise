import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components';
import { FirstMenu } from './FirstMenu';
import { HEADERS,SUBHEADERS } from "./mainData/Header.json";
import * as CategoryData from "./mainData/Category.json";


export function FirstMenuLayout({ menu }) {

  const subHeadersArr = SUBHEADERS[menu];

  const categoryArr = subHeadersArr[menu]; 

  return (
    <>
        <FirstMenu/>
    </>
  )
}

// const BoxStyle = {
//     width: "100vw",
//     height: "90vh",
//     flexGrow: 1,
//     padding: "5vh 5vw",
// }