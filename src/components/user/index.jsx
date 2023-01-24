import { Div } from "./user.styled";

const User = ({ user }) => {
  return (
    <Div>
      <h3>{user.name}</h3>
      <h4>{user.tagline}</h4>
      <p>{user.description}</p>
    </Div>
  );
};

export default User;
