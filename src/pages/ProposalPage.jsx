import { useState } from "react";
import { saveProposal } from "../services/proposalService";

function ProposalPage({setPage}){
    const[deptname,setDeptname]=useState("");
    const[title,setTitle]=useState("");
    const[date,setDate]=useState("");
    const[descp,setDescp]=useState("");
    const[file,setFile]=useState(null);
    const[message,setMessage]=useState("");

    async function handleSubmit(){

   const formData = new FormData();

formData.append("departmentName", deptname);
formData.append("title", title);
formData.append("date", date);
formData.append("description", descp);
formData.append("file", file);
    try {
        await saveProposal(formData);
        setMessage("proposal submitted succesfully");
        setTimeout(()=>{setPage("dashboard")},5000);
    }
    catch(error){
        setMessage("submission failed");
    }

    }


return(
    <>
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-green-100 flex justify-center items-center py-10">
        <div className="bg-slate-900 w-[700px] rounded-3xl p-10 shadow-2xl">
            <h1 className="text-orange-700 text-4xl font-bold mb-8">PROPOSAL</h1>
            <input type="text" className="w-full bg-orange-50 border-2 border-orange-300 rounded-xl p-4 text-gray-800 focus:border-orange-600 mb-5 outline-none" placeholder="enter department name" value={deptname} onChange={(e) => {
        const value = e.target.value;
        if (/^[A-Za-z\s]*$/.test(value)) {
            setDeptname(value);
        }
    }}/>
            <input className="w-full bg-orange-50 border-2 border-orange-300 rounded-xl p-4 text-gray-800 focus:border-orange-600 mb-5 outline-none" type="text" placeholder="enter department title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <input type="date" className="w-full bg-orange-50 border-2 border-orange-300 rounded-xl p-4 text-gray-800 focus:border-orange-600 mb-5 outline-none" placeholder="enter the date" value={date} onChange={(e)=>{setDate(e.target.value)}}/>
            <textarea className="w-full bg-orange-50 border-2 border-orange-300 rounded-xl p-4 text-gray-800 focus:border-orange-600 mb-5 outline-none" type="text" placeholder="enter description" value={descp} onChange={(e)=>{setDescp(e.target.value)}}/>
            <input className="text-white mb-8" type="file"
    accept=".pdf"
    onChange={(e) => {
        const selectedFile = e.target.files[0];
        if (
            selectedFile &&
            selectedFile.type !== "application/pdf"
        ) {
            alert("Only PDF files are allowed");
            e.target.value = "";
            return;
        }
        setFile(selectedFile);
    }}/>
            <button className="w-full bg-orange-600 rounded-xl py-4 hover:bg-orange-700 duration-300 shadow-lg" onClick={handleSubmit}>
                <span>SUBMIT</span>
            </button>
            {message && (
    <p className="text-green-700 font-semibold text-lg mt-6 text-center">
        {message}
    </p>
)}
            
        </div>
    </div>
    </>
)
}

export default ProposalPage