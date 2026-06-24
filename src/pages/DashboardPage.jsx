function DashboardPage({ setPage, setIsLoggedIn }) {

    function handleLogout() {
        setIsLoggedIn(false);
        setPage("login");
    }

    return (
        <>
            <div className="flex justify-center pt-24">
                <div className="bg-white shadow-2xl rounded-3xl p-16 border-t-8 border-orange-600 max-w-4xl mx-auto text-center relative">
                    <button
                        className="absolute top-6 right-6 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                    <h1 className="text-5xl text-blue-900 font-bold mb-10">
                        Proposal Management System
                    </h1>
                    <button
                        className="bg-orange-600 hover:bg-orange-700 duration-300 rounded-xl px-10 py-4 shadow-xl"
                        onClick={() => setPage("proposal")}
                    >
                        Submit Proposal
                    </button>
                </div>
            </div>
        </>
    );
}

export default DashboardPage;