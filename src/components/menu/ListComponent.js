import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function ListComponent(props) {
  const [open, setOpen] = React.useState(false);

  const { baseUrl, category, subCategoryList } = props;
  const handleMouseInOut = () => {
    setOpen(!open);
  };

  if (!subCategoryList) {
    return (
      <ListItemButton
        href={`${baseUrl}${category.url}`}
        style={{ color: "black" }}
      >
        <ListItemText primary={category.name} />
      </ListItemButton>
    );
  }

  return (
    <div onMouseEnter={handleMouseInOut} onMouseLeave={handleMouseInOut}>
      <ListItemButton
        component="a"
        href={`${baseUrl}${category.url}`}
        style={{ color: "black" }}
      >
        <ListItemText primary={category.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {subCategoryList.map((subCategory) => {
            return (
              <ListItemButton
                sx={{ pl: 6 }}
                href={`${baseUrl}${subCategory.url}`}
              >
                <ListItemText
                  primary={`${subCategory.name}`}
                  style={{ color: "#666" }}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </div>
  );
}
