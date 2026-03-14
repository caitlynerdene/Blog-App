import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "white",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "50px" }}>
        <h1
          style={{
            fontSize: "120px",
            fontWeight: "400",
            margin: 0,
            color: "black",
          }}
        >
          404
        </h1>

        <div
          style={{
            height: "120px",
            width: "1px",
            backgroundColor: "white",
          }}
        ></div>

        <div style={{ maxWidth: "350px" }}>
          <h2 style={{}}>Page Not Found</h2>
          <p>
            We're sorry, This page is unknown or does not exist the page you are
            looking for.
          </p>

          <Link to="/">
            <button
              style={{
                padding: "12px 24px",
                backgroundColor: "#4B70F5",
                color: "white",
                border: "none",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
