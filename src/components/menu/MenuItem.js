import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";

import ListComponent from "./ListComponent";

// data
import CATEGORYLIST from "./data/Category.json";
import SUBCATEGORYLIST from "./data/SubCategory.json";

export default function MenuItem(props) {
  const categoryName = props.categoryName;

  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper", padding: "5px" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          style={{ color: "black", fontSize: "1em", fontWeight: "bold" }}
        >
          {categoryName}
        </ListSubheader>
      }
    >
      {CATEGORYLIST[categoryName].map((category) => {
        return (
          <ListComponent
            key={category.name}
            category={category}
            subCategoryList={SUBCATEGORYLIST[category.name]}
          />
        );
      })}
    </List>
  );
}
