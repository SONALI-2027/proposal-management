import { useState } from 'react';
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import ProposalPage from "./pages/ProposalPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  const [page, setPage] = useState("landing");
   
  if(page=="landing"){
    return <LandingPage setPage={setPage}/>;
  }
   if(page=="login"){
    return <LoginPage setPage={setPage}/>;
  }
   if(page=="dashboard"){
    return <DashboardPage setPage={setPage}/>;
  }
   if(page=="proposal"){
    return <ProposalPage setPage={setPage}/>;
  }
}

export default App
