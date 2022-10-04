import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

import MenuItem from "./MenuItem";

// data
import { SUBHEADERS } from "./data/Header.json";

export default function Menu(props) {
  const { headerName } = props;

  return (
    <Box style={{ flexGrow: 1, padding: "20px" }}>
      <Grid container justifyContent="center" spacing={{ xs: 2, md: 2 }}>
        {SUBHEADERS[headerName].map((category) => {
          return (
            <Grid key={category.name} {...{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <MenuItem category={category} fontSize="15px" />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
