import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseFetch, UseFetchByPage } from "../../utils/query";
import { userSliceActions } from "../../utils/store";
import User from "../user";
import { Div, H1, PageDiv } from "./home.styled";

const Home = () => {
  const { page, perPage, totalPages } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [searchUser, setSearchUser] = useState("");
  console.log("user", page, perPage, totalPages);

  const { datas: totalUsers } = UseFetch("https://api.punkapi.com/v2/beers");

  useEffect(() => {
    if (totalUsers !== undefined) {
      console.log(totalUsers.length);
      dispatch(userSliceActions.onPageCountHandler(totalUsers?.length));
    }
  }, []);

  const {
    datas: users,
    isLoading,
    isError,
  } = UseFetchByPage(
    `https://api.punkapi.com/v2/beers?page=1&per_page=${perPage}`
  );

  return (
    <div>
      <H1>Community</H1>
      <input
        type="text"
        placeholder="Search User..."
        value={searchUser}
        onChange={(e) => setSearchUser(e.target.value)}
      />
      {isLoading ? <h3>Loading...</h3> : null}
      {isError ? <h3>{isError}</h3> : null}
      {users
        ?.filter((user) => user.name.toLowerCase().includes(searchUser))
        .map((user) => (
          <User key={user.id} user={user} />
        ))}
      <PageDiv>
        <Pagination count={10} />
      </PageDiv>
    </div>
  );
};

export default Home;
