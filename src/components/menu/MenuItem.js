import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import ListComponent from "./ListComponent";

// data
import CATEGORYLIST from "./data/Category.json";
import SUBCATEGORYLIST from "./data/SubCategory.json";

export default function MenuItem(props) {
  const { name, url } = props.category;
  const { fontSize } = props;

  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper", padding: "3px" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component={url ? "a" : "div"}
          href={`${url}`}
          style={{
            color: "black",
            fontSize: fontSize,
            fontWeight: "bold",
            fontFamily: "Noto Sans KR",
          }}
        >
          {name}
        </ListSubheader>
      }
    >
      <Divider style={{ backgroundColor: "#F5F5F5" }} />
      {CATEGORYLIST[name] &&
        CATEGORYLIST[name].map((subCategory) => {
          return (
            <ListComponent
              key={subCategory.name}
              category={subCategory}
              subCategoryList={SUBCATEGORYLIST[subCategory.name]}
              fontSize={fontSize}
              fontFamily="Noto Sans KR"
            />
          );
        })}
    </List>
  );
}
