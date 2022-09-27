import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

import MenuItem from "./MenuItem";

// data
import { HEADERS, SUBHEADERS } from "./data/Header.json";

export default function Menu(props) {
  const subHeaderName = "상품/서비스";

  return (
    <Box sx={{ flexGrow: 1, padding: "20px" }}>
      <Grid container spacing={2}>
        {SUBHEADERS[subHeaderName].map((category) => {
          return (
            <Grid key={category.name} {...{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <MenuItem categoryName={category.name} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
