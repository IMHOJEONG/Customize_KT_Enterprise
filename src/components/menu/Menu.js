import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import styled from 'styled-components';
import MenuItem from "./MenuItem";

// data
import { HEADERS, SUBHEADERS } from "./data/Header.json";

const BoxStyle = {
  width: "100vw",
  height: "90vh",
  flexGrow: 1,
  padding: "5vh 5vw",
}

const StyledBox = (props) => (
  <Box sx={BoxStyle}>
    {props.children}
  </Box>
);

const StyledBreakLine = styled.div`
  width: 0.25px; 
  height: 30vh;
  border: 0.25px solid gray;
`;

const GridLayout = styled.div`
  display: grid; 
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2vw;
`;

const GridFirstStyle = {
  display: "flex",
  justifyContent: "space-around"
  
}

const GridLastStyle = {
  display: "flex",
  justifyContent: "space-around"
}

const GridItemStyle = {
  // spacing: "{{ xs: 12, sm: 6, md: 4, lg: 3 }}",
  gridArea: `line1`
}
const fontSize = "1vw";
const StyledGrid = (props) => {

  const upperArray = SUBHEADERS[props.menu].slice(0,4);
  const lowerArray = SUBHEADERS[props.menu].slice(4);
  return (
    <GridLayout>
      <Grid sx={GridFirstStyle}>
        {upperArray.map((category, index) => {

          if(index === upperArray.length-1) {
            return (
              <Grid key={category.name} style={GridItemStyle}>
                <MenuItem category={category} fontSize={fontSize} />
              </Grid>
            );
          }
          else {
            return (
              <>
                <Grid key={category.name} style={GridItemStyle}>
                  <MenuItem category={category} fontSize={fontSize} />
                </Grid>
                <StyledBreakLine />
              </>
            );
          }
          
        })}
      </Grid>
      <Grid sx={GridLastStyle}>
        {lowerArray.map((category, index) => {
           if(index === lowerArray.length-1) {
            return (
              <Grid key={category.name} style={GridItemStyle}>
                <MenuItem category={category} fontSize={fontSize} />
              </Grid>
            );
          }
          else {
            return (
              <>
                <Grid key={category.name} style={GridItemStyle}>
                  <MenuItem category={category} fontSize={fontSize} />
                </Grid>
                <StyledBreakLine />
              </>
            );
          }
        })}
      </Grid>
    </GridLayout>


  );
}

export default function Menu({ menu, ...props}) {
  return (
    <StyledBox>
      <StyledGrid menu={menu}/>
    </StyledBox>
  );
}
