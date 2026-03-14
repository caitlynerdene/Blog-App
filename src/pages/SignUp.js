import { useState } from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.email === "" ||
      formData.password === ""
    ) {
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
          border: "1px solid #F3F4F6",
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
          Sign Up
        </h1>

        <form
          onSubmit={handleSignUp}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            style={inputStyle}
            onChange={handleChange}
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            style={inputStyle}
            onChange={handleChange}
          />
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

              marginTop: "5px",
            }}
          >
            Sign Up
          </button>
        </form>

        <p style={{ marginTop: "20px", fontSize: "14px", color: "#374151" }}>
          Already have an account?{" "}
          <Link
            to="/sign-in"
            style={{ textDecoration: "none", color: "#4B70F5" }}
          >
            Sign In
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
