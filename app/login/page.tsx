"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const res = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    console.log("SIGNIN RESULT:", res);

    if (res?.error) {
      alert("Login failed");
      return;
    }

    // IMPORTANT: force full navigation (bypasses Next router completely)
    window.location.replace("/dashboard/settings/index.html");
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form onSubmit={handleLogin} className="flex flex-col gap-4 border p-6 rounded">
        <h1 className="text-2xl font-bold">Login</h1>

        <input
          type="text"
          placeholder="Username"
          className="border p-2"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="bg-black text-white p-2 rounded">
          Sign In
        </button>
      </form>
    </div>
  );
}