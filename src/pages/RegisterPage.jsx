import { useState } from "react";
import axios from "axios";

function RegisterPage() {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [contactNumber,setContactNumber]=useState("");
    const [departmentName,setDepartmentName]=useState("");

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    const [pacCommitteeMember,setPacCommitteeMember]=useState(false);

    async function handleRegister(){

        try{

            const response=await axios.post(
                "http://localhost:8080/api/employees/register",
                {
                    name,
                    email,
                    contactNumber,
                    departmentName,
                    pacCommitteeMember
                }
            );

            setUsername(response.data.username);
            setPassword(response.data.password);

            alert("Registration Successful");

        }

        catch(error){

    console.log(error);
    console.log(error.response);

    alert("Registration Failed");

}
    }

    return(

        <div className="flex justify-center py-16">

            <div className="bg-white rounded-3xl shadow-2xl p-10 w-[600px]">

                <h1 className="text-4xl text-blue-900 font-bold mb-8">
                    Employee Registration
                </h1>

                <input
                className="w-full p-4 mb-5 border-2 rounded-xl"
                placeholder="Enter Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />

                <input
                className="w-full p-4 mb-5 border-2 rounded-xl"
                placeholder="Enter Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />

                <input
                className="w-full p-4 mb-5 border-2 rounded-xl"
                placeholder="Enter Contact Number"
                value={contactNumber}
                onChange={(e)=>setContactNumber(e.target.value)}
                />

                <input
                className="w-full p-4 mb-5 border-2 rounded-xl"
                placeholder="Enter Department Name"
                value={departmentName}
                onChange={(e)=>setDepartmentName(e.target.value)}
                />
                <div className="mb-5">

    <label className="text-lg font-semibold">

        PAC Committee Member?

    </label>

    <div className="mt-2">

        <input
            type="checkbox"
            checked={pacCommitteeMember}
            onChange={(e)=>setPacCommitteeMember(e.target.checked)}
        />

        <span className="ml-3">

            Yes

        </span>

    </div>

</div>
     
                <button
                className="w-full bg-orange-600 py-4 rounded-xl text-white"
                onClick={handleRegister}
                >
                    REGISTER
                </button>

                {
                    username &&

                    <div className="mt-8">

                        <h2 className="text-green-700 text-xl">

                            Username : {username}

                        </h2>

                        <h2 className="text-green-700 text-xl">

                            Password : {password}

                        </h2>

                    </div>
                }

            </div>

        </div>
    );
}

export default RegisterPage;