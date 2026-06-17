

function DashboardPage({setPage}) {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-green-100 p-10">

    <div className="bg-white shadow-2xl rounded-3xl p-16 border-t-8 border-orange-600 max-w-4xl mx-auto text-center">

        <h1 className="text-5xl text-blue-900 font-bold mb-10">
           Proposal Management System
        </h1>

        <button className="bg-orange-600 hover:bg-orange-700 duration-300 rounded-xl px-10 py-4 shadow-xl" onClick={()=>setPage("proposal")}>
            Submit Proposal
        </button>

    </div>

</div>
    </>
  )
}

export default DashboardPage;