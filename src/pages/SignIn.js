import { useState } from "react";
import { Link } from "react-router-dom";

export const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    if (formData.email === "" || formData.password === "") {
      alert("Please fill in all fields!");
      return;
    }

    console.log(formData);
  };

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
      <div
        style={{
          width: "100%",
          maxWidth: "380px",
          padding: "40px",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 20px black",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "25px",
            textAlign: "left",
          }}
        >
          Sign In
        </h1>

        <form
          onSubmit={handleSignIn}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <input
            name="email"
            type="text"
            placeholder="Email"
            style={inputStyle}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            style={inputStyle}
            onChange={handleChange}
          />

          <button
            type="submit"
            style={{
              padding: "14px",
              backgroundColor: "#4B70F5",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              fontWeight: "500",
              cursor: "pointer",
              marginTop: "5px",
            }}
          >
            Sign In
          </button>
        </form>

        <p style={{ marginTop: "20px", fontSize: "14px", color: "#374151" }}>
          Do not have an account?{" "}
          <Link to="/sign-up" style={{ color: "#4B70F5" }}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

const inputStyle = {
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid #D1D5DB",
  fontSize: "15px",
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
};
