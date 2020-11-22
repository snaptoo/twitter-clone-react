import React from "react";
import Input from "./Input";
import useInput from "./useInput";

const MiniLogin = () => {
  const email = useInput("");
  const password = useInput("");

  const handleForm = (e) => {
    e.preventDefault();
    if (!email.state || !password.state) {
      throw new Error("Empty Fields");
    }
    console.log(email.state, password.state);
  };

  return (
    <form className="mini-login" onSubmit={handleForm} noValidate>
      <Input
        type="email"
        labelName="Email"
        value={email.state}
        onChange={email.onChange}
      />
      <Input
        type="password"
        labelName="Password"
        value={password.state}
        onChange={password.onChange}
      />
      <button type="submit" className="btn" to="/">
        Log in
      </button>
    </form>
  );
};

export default MiniLogin;
