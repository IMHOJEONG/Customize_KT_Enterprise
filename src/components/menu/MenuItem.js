import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";

import ListComponent from "./ListComponent";

// data
import CATEGORYLIST from "./data/Category.json";
import SUBCATEGORYLIST from "./data/SubCategory.json";

export default function MenuItem(props) {
  const { name, url } = props.category;

  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper", padding: "5px" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component={url ? "a" : "div"}
          href={`${url}`}
          style={{ color: "black", fontSize: "1em", fontWeight: "bold" }}
        >
          {name}
        </ListSubheader>
      }
    >
      {CATEGORYLIST[name] &&
        CATEGORYLIST[name].map((subCategory) => {
          return (
            <ListComponent
              key={subCategory.name}
              category={subCategory}
              subCategoryList={SUBCATEGORYLIST[subCategory.name]}
            />
          );
        })}
    </List>
  );
}
