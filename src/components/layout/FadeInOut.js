import * as React from "react";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import Menu from "../menu/Menu";

import "./FadeInOut.scss";

export default function FadeInOut(props) {
  const [checked, setChecked] = React.useState(false);

  return (
    <div
      onMouseOver={() => setChecked(true)}
      onMouseLeave={() => setChecked(false)}
    >
      <div class={"btnStyle-" + (checked ? "inactive" : "active")}>
        {props.name}
      </div>
      <Box sx={{ display: "flex" }}>
        <Grow in={checked}>
          <div class="menu_active">
            <Menu headerName={props.name} />
          </div>
        </Grow>
      </Box>
    </div>
  );
}
