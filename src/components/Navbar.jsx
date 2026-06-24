function Navbar({ setPage, isLoggedIn }) {
  return (
    <div className="flex justify-center mt-8">

     <div
className="
bg-[#072A80]
rounded-full
shadow-2xl
border-4 border-amber-500
w-[90%]
py-5
flex
justify-center
gap-32
"
>

        <button
          className="text-white text-2xl font-semibold hover:text-orange-300 duration-300"
          onClick={() => setPage("landing")}
        >
          Home
        </button>

        <button
          className="text-white text-2xl font-semibold hover:text-orange-300 duration-300"
          onClick={() => setPage("about")}
        >
          About Us
        </button>

        {!isLoggedIn ? (
<>
<button
className="text-white text-2xl font-semibold hover:text-orange-300"
onClick={() => setPage("register")}
>
Register
</button>

<button
className="text-white text-2xl font-semibold hover:text-orange-300"
onClick={() => setPage("login")}
>
Sign In
</button>
</>

) : (

<button
className="text-white text-2xl font-semibold hover:text-orange-300"
onClick={() => setPage("dashboard")}
>
Dashboard
</button>

)}
      </div>

    </div>
  );
}

export default Navbar;