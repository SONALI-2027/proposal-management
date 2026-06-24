import { useState, useEffect } from "react";
import axios from "axios";

function AdminDashboard({ setIsLoggedIn, setPage }) {

    const [option, setOption] = useState("dashboard");
    const [employees, setEmployees] = useState([]);
const [pacMembers, setPacMembers] = useState([]);
const [proposals, setProposals] = useState([]);

useEffect(() => {
    loadEmployees();
    loadPacMembers();
    loadProposals();
}, []);

async function loadEmployees() {

    const response = await axios.get(
        "http://localhost:8080/api/employees"
    );

    setEmployees(response.data);
}

async function loadPacMembers() {

    const response = await axios.get(
        "http://localhost:8080/api/admin/pac-members"
    );

    setPacMembers(response.data);
}

async function loadProposals() {

    const response = await axios.get(
        "http://localhost:8080/api/proposals"
    );

    setProposals(response.data);
}

async function addPacMember(id) {

    await axios.put(
        `http://localhost:8080/api/admin/add-pac/${id}`
    );

    loadEmployees();
    loadPacMembers();
}
async function deleteEmployee(id) {

    if (!window.confirm("Delete employee permanently?"))
        return;

    await axios.delete(
        `http://localhost:8080/api/admin/delete-employee/${id}`
    );

    loadEmployees();
    loadPacMembers();
}

    function handleLogout() {
        setIsLoggedIn(false);
        setPage("landing");
    }

    return (
        <div className="flex h-screen">
            <div className="w-72 bg-blue-900 text-white p-6">

                <h1 className="text-2xl font-bold mb-10">
                    ADMIN PANEL
                </h1>

               <div className="flex flex-col gap-4">

    <button
        className="bg-blue-700 p-3 rounded-xl"
        onClick={() => setOption("dashboard")}
    >
        Dashboard
    </button>

    <button
        className="bg-blue-700 p-3 rounded-xl"
        onClick={() => {setOption("employees");
            loadEmployees();
        }}
    >
        Employees
    </button>

    <button
        className="bg-blue-700 p-3 rounded-xl"
        onClick={() => {setOption("pacMembers");
            loadPacMembers();
        }}
    >
        PAC Members
    </button>

    <button
        className="bg-blue-700 p-3 rounded-xl"
        onClick={() => setOption("editMembers")}
    >
        Edit Members
    </button>

    <button
        className="bg-blue-700 p-3 rounded-xl"
        onClick={() => setOption("proposals")}
    >
        Proposals
    </button>

    <button
        className="bg-red-600 p-3 rounded-xl"
        onClick={handleLogout}
    >
        Logout
    </button>

</div>
            </div>
         <div className="flex-1 bg-gray-100 p-10">
                {
                    option === "dashboard" &&
                    <div>
                        <h1 className="text-4xl font-bold text-blue-900 mb-8">
                            Dashboard
                        </h1>

                        <div className="grid grid-cols-2 gap-8">

                            <div className="bg-white p-8 rounded-2xl shadow-xl">
                                <h2 className="text-2xl font-bold">
                                    Total Employees
                                </h2>

                                <p className="text-4xl text-orange-600 mt-5">
                                    {pacMembers.length}
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-xl">
                                <h2 className="text-2xl font-bold">
                                    PAC Members
                                </h2>

                                <p className="text-4xl text-orange-600 mt-5">
                                    {employees.length}
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-xl">
                                <h2 className="text-2xl font-bold">
                                    Chairman
                                </h2>

                                <p className="text-2xl text-orange-600 mt-5">
                                    Not Assigned
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-xl">
                                <h2 className="text-2xl font-bold">
                                    Total Proposals
                                </h2>

                                <p className="text-4xl text-orange-600 mt-5">
                                    {proposals.length}
                                </p>
                            </div>

                        </div>

                    </div>
                }

                {
                    option === "employees" &&

                    <div>

                        <h1 className="text-4xl font-bold text-blue-900 mb-8">
                            Employees
                        </h1>

                       <div className="bg-white rounded-2xl shadow-xl p-6">

    <table className="w-full">

        <thead>

            <tr className="border-b">

                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Contact</th>
                <th className="p-3 text-left">Department</th>
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-left">PAC Member</th>
                <th className="p-3 text-left">Proposals</th>

            </tr>

        </thead>

        <tbody>

            {employees.map((employee) => (

                <tr
                    key={employee.id}
                    className="border-b"
                >

                    <td className="p-3">
                        {employee.id}
                    </td>

                    <td className="p-3">
                        {employee.name}
                    </td>

                    <td className="p-3">
                        {employee.email}
                    </td>

                    <td className="p-3">
                        {employee.contactNumber}
                    </td>

                    <td className="p-3">
                        {employee.departmentName}
                    </td>

                    <td className="p-3">
                        {employee.role?.roleName}
                    </td>

                    <td className="p-3">
                        {employee.pacCommitteeMember ? "Yes" : "No"}
                    </td>

                    <td className="p-3">
                        {employee.proposals?.length || 0}
                    </td>

                </tr>

            ))}

        </tbody>

    </table>

</div>

                    </div>
                }

                {
    option === "pacMembers" &&

    <div>

        <h1 className="text-4xl font-bold text-blue-900 mb-8">
            PAC Members
        </h1>

        <div className="bg-white rounded-2xl shadow-xl p-6">

            <table className="w-full">

                <thead>

                    <tr className="border-b">

                        <th className="p-3 text-left">
                            Name
                        </th>

                        <th className="p-3 text-left">
                            Email
                        </th>

                        <th className="p-3 text-left">
                            Contact
                        </th>

                        <th className="p-3 text-left">
                            Department
                        </th>

                        <th className="p-3 text-left">
                            Designation
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {
                        pacMembers.map((member) => (

                            <tr
                                key={member.id}
                                className="border-b"
                            >

                                <td className="p-3">
                                    {member.name}
                                </td>

                                <td className="p-3">
                                    {member.email}
                                </td>

                                <td className="p-3">
                                    {member.contactNumber}
                                </td>

                                <td className="p-3">
                                    {member.departmentName}
                                </td>

                                <td className="p-3">
                                    {member.role?.roleName}
                                </td>

                            </tr>
                        ))
                    }

                </tbody>

            </table>

        </div>

    </div>
}

  {
option === "editMembers" &&

<div>

    <h1 className="text-4xl font-bold text-blue-900 mb-8">
        Edit Members
    </h1>

    <div className="bg-white rounded-2xl shadow-xl p-6">

        <table className="w-full">

            <thead>

                <tr className="border-b">

                    <th className="p-3 text-left">ID</th>
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 text-left">Email</th>
                    <th className="p-3 text-left">Department</th>
                    <th className="p-3 text-left">PAC Member</th>
                    <th className="p-3 text-left">Actions</th>

                </tr>

            </thead>

            <tbody>

                {
                    employees.map((employee) => (

                        <tr
                            key={employee.id}
                            className="border-b"
                        >

                            <td className="p-3">
                                {employee.id}
                            </td>

                            <td className="p-3">
                                {employee.name}
                            </td>

                            <td className="p-3">
                                {employee.email}
                            </td>

                            <td className="p-3">
                                {employee.departmentName}
                            </td>

                            <td className="p-3">
                                {employee.pacCommitteeMember
                                    ? "Yes"
                                    : "No"}
                            </td>

                            <td className="p-3 flex gap-3">

                                {
                                    !employee.pacCommitteeMember &&

                                    <button
                                        className="bg-green-600 text-white px-4 py-2 rounded"
                                        onClick={() =>
                                            addPacMember(employee.id)
                                        }
                                    >
                                        Add PAC
                                    </button>
                                }

                                {
                                    employee.pacCommitteeMember &&

                                    <button
        className="bg-red-600 text-white px-4 py-2 rounded"
        onClick={() => deleteEmployee(employee.id)}
    >
        Remove Member
    </button>

                                }

                            </td>

                        </tr>
                    ))
                }

            </tbody>

        </table>

    </div>

</div>
}
                {
                    option === "proposals" &&

                    <div>

                        <h1 className="text-4xl font-bold text-blue-900 mb-8">
                            Proposals
                        </h1>

                        <tbody>
{
    proposals.map((proposal) => (

        <tr key={proposal.id}>

            <td>{proposal.id}</td>
            <td>{proposal.title}</td>
            <td>{proposal.departmentName}</td>
            <td>{proposal.groupHeadName}</td>
            <td>{proposal.projectCoordinator}</td>
            <td>{proposal.status}</td>

        </tr>

    ))
}
</tbody>

                    </div>
                }

            </div>

        </div>

    );
}

export default AdminDashboard;