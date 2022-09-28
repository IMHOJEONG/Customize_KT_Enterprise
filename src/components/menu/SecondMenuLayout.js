import styled from 'styled-components';
import SecondMenu from './SecondMenu';
import { SUBHEADERS } from "./data/Header.json";
import * as React from "react";
import Finance from './imgs/finance.webp';
import Manufacture from './imgs/manufacture.webp';
import Distribution from './imgs/distribution.webp';
import Hospital from './imgs/hospital.webp';
import Public from './imgs/public.webp';
import Franchise from './imgs/franchise.webp';

const SecondMenuData = [Finance, Manufacture, Distribution, Hospital, Public, Franchise];

const StyledSecondMenuLayout = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex; 
    align-items: center; 
    justify-content: space-around;

`
export function SecondMenuLayout({ menu }) {

  const array = SUBHEADERS[menu].slice();
    return (
        <StyledSecondMenuLayout>
            {array.map((menu, index)=>{
                return <SecondMenu menu={menu} image={SecondMenuData[index]}/>
            })}
        </StyledSecondMenuLayout>
    )

}