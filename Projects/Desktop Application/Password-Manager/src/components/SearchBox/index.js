import React from "react";

import { TextField } from "@mui/material";

const SearchBox = ({ onChange }) => {
  return (
    <TextField
      label="Search"
      onChange={e => onChange(e.target.value)}
      size="small"
      sx={{ mr: 10 }}
    />
  );
};

export default SearchBox;
