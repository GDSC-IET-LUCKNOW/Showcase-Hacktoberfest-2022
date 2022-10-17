import React, { useState, useEffect, createContext, useContext } from "react";
import authContext from "./AuthContext";

const accountsContext = createContext({
  accounts: [],
  loading: true,
  refetch: () => {},
  searchAccounts: () => {},
});

export const AccountsContext = ({ children }) => {
  const { mainPass } = useContext(authContext);
  const [rawAccounts, setRawAccounts] = useState([]);
  const [accounts, setAccounts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.db.getAllAccounts().then(data => {
      const acc = data.map(account => ({
        ...account,
        password: window.electronCrypto.decrypt(account.password, mainPass),
        email: window.electronCrypto.decrypt(account.email, mainPass),
      }));
      setAccounts(groupByName(acc));
      setRawAccounts(acc);
      setLoading(false);
    });
  }, [mainPass]);

  const groupByName = accounts => {
    return accounts.reduce((acc, account) => {
      if (!acc[account.name]) {
        acc[account.name] = [];
      }
      acc[account.name].push(account);
      return acc;
    }, {});
  };

  const refetch = () => {
    setLoading(true);
    window.db.getAllAccounts().then(data => {
      const acc = data.map(account => ({
        ...account,
        password: window.electronCrypto.decrypt(account.password, mainPass),
        email: window.electronCrypto.decrypt(account.email, mainPass),
      }));
      setRawAccounts(acc);
      setAccounts(groupByName(acc));
      setLoading(false);
    });
  };

  const filterFunc = (account, query) => {
    const containsName = account.name
      .toLowerCase()
      .includes(query.toLowerCase());
    const containsSubName = account.subName
      .toLowerCase()
      .includes(query.toLowerCase());
    const containsEmail = account.email
      .toLowerCase()
      .includes(query.toLowerCase());

    return containsName || containsSubName || containsEmail;
  };

  const searchAccounts = query => {
    const acc = rawAccounts.filter(account => filterFunc(account, query));
    setAccounts(groupByName(acc));
  };

  return (
    <accountsContext.Provider
      value={{ accounts, loading, refetch, searchAccounts }}
    >
      {children}
    </accountsContext.Provider>
  );
};

export default accountsContext;
