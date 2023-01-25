import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseFetch, UseFetchByPage } from "../../utils/query";
import { userSliceActions } from "../../utils/store";
import { Footer, H1, HomeContainer, TableContainer, Td } from "./home.styled";

const Home = () => {
  const { page, perPage, totalPageCount, pages } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

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

  const { isLoading, isError } = UseFetchByPage(
    `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`,
    page
  );

  const [userList, setUserList] = useState([]);
  const [searchUser, setSearchUser] = useState("");

  useEffect(() => {
    setUserList(pages[page]);
  }, [page, pages]);

  const pageHandler = (event, value) => {
    dispatch(userSliceActions.pageCountHandler(value));
  };

  const searchHandler = (e) => {
    setSearchUser(e.target.value);
    if (e.target.value) {
      const filteredUsers = Object.values(pages)
        .flat()
        ?.filter((user) =>
          user.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
        .slice(0, 10);
      console.log(filteredUsers);
      return setUserList(filteredUsers);
    }
    return setUserList(pages[page]);
  };

  return (
    <HomeContainer>
      <H1>Users Community</H1>
      <input
        type="text"
        placeholder="Name Search..."
        value={searchUser}
        onChange={(e) => searchHandler(e)}
      />
      {isLoading ? <h3>Loading...</h3> : null}
      {isError ? <h3>{isError}</h3> : null}
      <TableContainer>
        <thead>
          <tr>
            <th style={{ width: "10%" }}>S.No</th>
            <th style={{ width: "20%" }}>Name</th>
            <th style={{ width: "20%" }}>Tag</th>
            <th style={{ width: "50%" }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {userList?.length === 0 ? (
            <tr>
              <Td colSpan={4}>No User found.</Td>
            </tr>
          ) : (
            userList?.map((user) => (
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
