import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function ListComponent(props) {
  const { category, subCategoryList } = props;

  const [open, setOpen] = React.useState(false);

  if (!subCategoryList) {
    return (
      <ListItemButton
        href={`${category.url}`}
        style={{ color: "black", fontSize: "0.45em" }}
      >
        <ListItemText primary={category.name} />
      </ListItemButton>
    );
  }

  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <ListItemButton href={`${category.url}`} style={{ color: "black" }}>
        <ListItemText primary={category.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {subCategoryList.map((subCategory, idx) => {
            return (
              <ListItemButton
                key={idx}
                sx={{ pl: 4 }}
                href={`${subCategory.url}`}
              >
                <ListItemText
                  primary={`${subCategory.name}`}
                  style={{ color: "#666", fontSize: "0.25em" }}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </div>
  );
}
