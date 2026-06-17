import React from 'react';

function LandingPage({setPage}) {
  return (
   <>
   <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-green-100 flex justify-center items-center">
    <div className="text-center bg-white shadow-2xl rounded-3xl px-16 py-14 border-t-8 border-orange-600">
        <h1 className="text-6xl font-bold text-blue-900 mb-6">Proposal Management System</h1>
        <p className="text-gray-700 text-xl mb-8">Submit and manage proposals efficiently</p>
        <button className="bg-orange-600 hover:bg-orange-700 duration-300 rounded-xl px-10 py-4 shadow-xl"onClick={()=>setPage("login")}>
            <span className="text-white font-semibold text-lg">LOGIN</span>
        </button>
    </div>
   </div>
   </>
  )
}

export default LandingPage;