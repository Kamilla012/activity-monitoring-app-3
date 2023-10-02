import React, { useState } from "react";
import supabase from "../supabaseClient";

export default function SignupTest() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUser = async (e) => {
    const { user, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      // Handle sign-up error
      console.error("Sign-up error:", error.message);
    } else {
      const { data: userData, error: insertError } = await supabase
        .from("user")
        .insert([
          {
            email: email,
            password: password,
          },
        ]);

      if (insertError) {
        console.error("Error inserting user data:", insertError.message);
      } else {
        alert("Verify your account in your email");
      }
    }
  };
  return (
    <div className="flex justify-around items-center h-screen bg-black">
      <div className="w-64 h-100 bg-white rounded-lg p-4">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <div className="mb-4">
          <input
            type="email"
            className="w-full px-3 py-2 rounded-md border border-gray-300"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
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
          onClick={handleUser}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}
