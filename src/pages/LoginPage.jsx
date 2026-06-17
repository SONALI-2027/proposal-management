import { useState } from "react";

function LoginPage({setPage}) {
const[passw,setPassw]=useState("");
const[userId,setUserId]=useState("");
async function handleLogin() {
    try {
        setPage("dashboard");
    }
    catch(error) {
        alert("Invalid username or password");
    }
}

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-green-100 flex justify-center items-center">
        <div className="bg-white w-[450px] rounded-3xl p-10 shadow-2xl border-t-8 border-orange-600">
            <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">Sign-in Page</h1>
            <input type="text" placeholder="enter username" className="w-full bg-orange-50 border-2 border-orange-300 rounded-xl p-4 text-gray-800 mb-5 outline-none focus:border-orange-600" value={userId} onChange={(e)=>setUserId(e.target.value)}/>
            <input type="password" placeholder="enter password" className="w-full bg-orange-50 border-2 border-orange-300 rounded-xl p-4 text-gray-800 mb-8 outline-none focus:border-orange-600" value={passw} onChange={(e)=>setPassw(e.target.value)}/>
            <button
    className={`w-full rounded-xl py-4 duration-300 shadow-lg ${
        userId.trim() && passw.trim()
            ? "bg-orange-600 hover:bg-orange-700"
            : "bg-gray-400 cursor-not-allowed"
    }`}
    disabled={!userId.trim() || !passw.trim()}
    onClick={handleLogin}
>
    <span className="text-white font-semibold">
        LOGIN
    </span>
</button>
        </div>
    </div>
    </>
  )
}

export default LoginPage