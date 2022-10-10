import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function ListComponent(props) {
  const { category, subCategoryList, fontSize } = props;

  const [open, setOpen] = React.useState(false);

  if (!subCategoryList) {
    return (
      <ListItemButton href={`${category.url}`} style={{ color: "black" }}>
        <ListItemText
          primary={category.name}
          primaryTypographyProps={{
            fontSize: { fontSize },
            fontFamily: "Noto Sans KR",
          }}
        />
      </ListItemButton>
    );
  }

  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <ListItemButton
        href={`${category.url}`}
        style={{ color: "black", fontFamily: "Noto Sans KR" }}
      >
        <ListItemText
          primary={category.name}
          primaryTypographyProps={{
            fontSize: { fontSize },
            fontFamily: "Noto Sans KR",
          }}
        />
        {open ? (
          <ExpandLess fontSize={fontSize} fontFamily="Noto Sans KR" />
        ) : (
          <ExpandMore fontSize={fontSize} fontFamily="Noto Sans KR" />
        )}
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
                  primaryTypographyProps={{
                    color: "#666",
                    fontSize: { fontSize },
                    fontFamily: "Noto Sans KR",
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </div>
  );
}
