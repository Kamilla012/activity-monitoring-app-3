import React, { useEffect, useState } from "react";
import supabase from "../supabaseClient";

export default function LoginTest() {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginData, setLoginData] = useState();

  const handleLogin = async (e) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (data) {
      setLoginData(data);
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex justify-around items-center bg-black flex-col mr-10">
      <div className="w-64 h-64 bg-white rounded-lg p-4">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <div className="mb-4">
          <input
            type="text"
            className="w-full px-3 py-2 rounded-md border border-gray-300"
            placeholder="E-mail"
            value={email}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            className="w-full px-3 py-2 rounded-md border border-gray-300"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button
          className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
