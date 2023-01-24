import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseFetch, UseFetchByPage } from "../../utils/query";
import { userSliceActions } from "../../utils/store";
import {
  Footer,
  H1,
  HomeContainer,
  TableContainer,
  Thead,
} from "./home.styled";

const Home = () => {
  const { page, perPage, totalPageCount } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [searchUser, setSearchUser] = useState("");

  const { datas: totalUsers } = UseFetch("https://api.punkapi.com/v2/beers");

  useEffect(() => {
    if (totalUsers !== undefined) {
      dispatch(
        userSliceActions.totalPageCountHandler(
          Math.ceil(totalUsers?.length / 10)
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalUsers]);

  const {
    datas: users,
    isLoading,
    isError,
  } = UseFetchByPage(
    `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`
  );

  const pageHandler = (event, value) => {
    dispatch(userSliceActions.pageCountHandler(value));
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchUser)
  );

  return (
    <HomeContainer>
      <H1>Users Community</H1>
      <input
        type="text"
        placeholder="Name Search..."
        value={searchUser}
        onChange={(e) => setSearchUser(e.target.value)}
      />
      {isLoading ? <h3>Loading...</h3> : null}
      {isError ? <h3>{isError}</h3> : null}
      <TableContainer>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Tag</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length === 0 ? (
            <tr>
              <td colSpan={4}>No User found.</td>
            </tr>
          ) : (
            filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.tagline}</td>
                <td>{user.description}</td>
              </tr>
            ))
          )}
        </tbody>
        {/* <tfoot> */}
        {/* </tfoot> */}
      </TableContainer>
      <Footer>
        <Pagination count={totalPageCount} page={page} onChange={pageHandler} />
      </Footer>
    </HomeContainer>
  );
};

export default Home;
