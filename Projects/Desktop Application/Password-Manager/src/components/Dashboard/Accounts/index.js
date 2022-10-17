import React, { useContext } from "react";

import { Typography, Stack, Box } from "@mui/material";
import NewButton from "../../Buttons/NewButton";
import AccountCarasoul from "../../AccountCarasoul";
import accountsContext from "../../../context/AccountsContext";
import SearchBox from "../../SearchBox";

const Accounts = () => {
  const { accounts, loading, searchAccounts } = useContext(accountsContext);

  return (
    <Box width="100%" height="100%">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <NewButton />
        <SearchBox onChange={searchAccounts} />
      </Stack>
      {loading && <Typography>Loading...</Typography>}
      {!loading && Object.keys(accounts).length === 0 ? (
        <Typography variant="h6" mt={2}>
          No accounts found
        </Typography>
      ) : (
        <Box
          mt={2}
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {Object.keys(accounts).map(key => (
            <AccountCarasoul accounts={accounts[key]} key={key} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Accounts;
