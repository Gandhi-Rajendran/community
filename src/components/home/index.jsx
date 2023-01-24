import React from "react";
import { useSelector } from "react-redux";
import { UseFetch } from "../../utils/query";
import User from "../user";
import { H1 } from "./home.styled";

const Home = () => {
  const page = useSelector((state) => state.user);

  console.log("user", page);

  const {
    datas: users,
    isLoading,
    isError,
  } = UseFetch("https://api.punkapi.com/v2/beers");

  return (
    <div>
      <H1>Community</H1>
      <input type="text" placeholder="Search User..." />
      {isLoading ? <h3>Loading...</h3> : null}
      {isError ? <h3>{isError}</h3> : null}
      {users?.map((user) => (
        <User key={user.id} user={user} />
      ))}
      <button>{}</button>
    </div>
  );
};

export default Home;
