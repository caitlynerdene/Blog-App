import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Homepage</h1>
      <Link to="/sign-in">Log in</Link>
    </div>
  );
};
