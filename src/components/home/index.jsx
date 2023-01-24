import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseFetch, UseFetchByPage } from "../../utils/query";
import { userSliceActions } from "../../utils/store";
import User from "../user";
import { H1, HomeContainer, Main, PageDiv } from "./home.styled";

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
      <H1>Community</H1>
      <input
        type="text"
        placeholder="Search User..."
        value={searchUser}
        onChange={(e) => setSearchUser(e.target.value)}
      />
      <Main>
        {isLoading ? <h3>Loading...</h3> : null}
        {isError ? <h3>{isError}</h3> : null}
        {filteredUsers.length === 0 ? (
          <h3>No User found.</h3>
        ) : (
          filteredUsers.map((user) => <User key={user.id} user={user} />)
        )}
      </Main>
      <PageDiv>
        <Pagination count={totalPageCount} page={page} onChange={pageHandler} />
      </PageDiv>
    </HomeContainer>
  );
};

export default Home;
