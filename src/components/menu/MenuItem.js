import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListComponent from "./ListComponent";

const CATEGORYLIST = [
  { name: "AI Contact Center", url: "/pd/P_PD_AI_CC_001.do" },
  { name: "AI Robot", url: "/pd/P_PD_AI_RB_SM.do" },
  { name: "AI Space", url: "/pd/P_PD_AI_AS_SM.do" },
];

const SUBCATEGORYLIST = {
  "AI Robot": [
    { name: "AI 방역로봇", url: "/pd/P_PD_AI_RB_005.do" },
    { name: "AI 서비스로봇", url: "/pd/P_PD_AI_RB_004.do" },
  ],
  "AI Space": [
    { name: "AI 아파트", url: "/pd/P_PD_AI_AS_001.do" },
    { name: "AI 주택형 솔루션", url: "/pd/P_PD_AI_AS_002.do" },
  ],
};

export default function MenuItem() {
  const baseUrl = "https://enterprise.kt.com";

  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          style={{ color: "black", fontSize: "25px", fontWeight: "bold" }}
        >
          AI/BigData
        </ListSubheader>
      }
    >
      {CATEGORYLIST.map((category) => {
        return (
          <ListComponent
            baseUrl={baseUrl}
            category={category}
            subCategoryList={SUBCATEGORYLIST[category.name]}
          />
        );
      })}
    </List>
  );
}
