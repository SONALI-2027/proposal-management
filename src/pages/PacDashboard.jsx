import { useEffect, useState } from "react";
import axios from "axios";

function PacDashboard({ setPage, setIsLoggedIn }) {

    const [proposals, setProposals] = useState([]);

    useEffect(() => {
        fetchProposals();
    }, []);

    async function fetchProposals() {

        try {

            const response = await axios.get(
                "http://localhost:8080/api/proposals"
            );

            setProposals(response.data);

        }

        catch (error) {

            console.log(error);

        }
    }

    async function reviewProposal(id) {

        const remarks = prompt(
            "Enter review"
        );

        if (!remarks)
            return;

        try {

            await axios.put(

                `http://localhost:8080/api/proposals/${id}/review`,

                {
                    review: remarks
                }

            );

            fetchProposals();

        }

        catch (error) {

            console.log(error);

        }

    }

    async function approveProposal(id) {

        try {

            await axios.put(

                `http://localhost:8080/api/proposals/${id}/approve`

            );

            fetchProposals();

        }

        catch (error) {

            console.log(error);

        }

    }

    function viewProposal(fileName) {

    window.open(
        `http://localhost:8080/uploads/${fileName}`,
        "_blank"
    );

}

function downloadProposal(fileName) {

    const link = document.createElement("a");

    link.href =
        `http://localhost:8080/uploads/${fileName}`;

    link.download = fileName;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

}

    function logout() {

        setIsLoggedIn(false);

        setPage("login");

    }

    return (

        <div className="p-10">

            <div className="flex justify-between mb-8">

                <h1 className="text-4xl font-bold text-blue-900">

                    PAC Dashboard

                </h1>

                <button
                    className="bg-red-600 text-white px-6 py-3 rounded-xl"
                    onClick={logout}
                >
                    Logout
                </button>

            </div>

            <table className="w-full border">

                <thead className="bg-blue-900 text-white">

                    <tr>

                        <th className="p-3">Id</th>

                        <th>Title</th>

                        <th>Description</th>

                        <th>Department</th>

                        <th>Status</th>

                        <th>Review</th>
<th>Proposal</th>
<th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        proposals.map((proposal) => (

                            <tr
                                key={proposal.id}
                                className="text-center border"
                            >

                                <td>{proposal.id}</td>

                                <td>{proposal.title}</td>

                                <td>{proposal.description}</td>

                                <td>{proposal.departmentName}</td>

                                <td>{proposal.status}</td>

                                <td>{proposal.review}</td>
                                <td>

    <div className="flex justify-center gap-2">

        <button
            className="bg-blue-600 text-white px-3 py-2 rounded"
            onClick={() =>
                viewProposal(proposal.file)
            }
        >
            View
        </button>

        <button
            className="bg-green-600 text-white px-3 py-2 rounded"
            onClick={() =>
                downloadProposal(proposal.file)
            }
        >
            Download
        </button>

    </div>

</td>

                                <td>

                                    {

                                        proposal.status === "UNDER_REVIEW" &&

                                        <button
                                            className="bg-yellow-500 text-white px-4 py-2 rounded"
                                            onClick={() =>
                                                reviewProposal(proposal.id)
                                            }
                                        >

                                            Review

                                        </button>

                                    }

                                    {

                                        proposal.status === "CHANGES_REQUIRED" &&

                                        <p>

                                            Waiting for Employee

                                        </p>

                                    }

                                    {

                                        proposal.status === "RESUBMITTED" &&

                                        <div className="space-x-3">

                                            <button
                                                className="bg-green-600 text-white px-4 py-2 rounded"
                                                onClick={() =>
                                                    approveProposal(proposal.id)
                                                }
                                            >

                                                Approve

                                            </button>

                                            <button
                                                className="bg-orange-600 text-white px-4 py-2 rounded"
                                                onClick={() =>
                                                    reviewProposal(proposal.id)
                                                }
                                            >

                                                Review Again

                                            </button>

                                        </div>

                                    }

                                    {

                                        proposal.status === "APPROVED" &&

                                        <p className="text-green-700">

                                            Approved

                                        </p>

                                    }

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default PacDashboard;