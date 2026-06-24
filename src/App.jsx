import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ProposalPage from "./pages/ProposalPage";
import AboutPage from "./pages/AboutPage";
import RegisterPage from "./pages/RegisterPage";
import PacDashboard from "./pages/PacDashboard";
import AdminDashboard from "./pages/AdminDashboard";

function App() {

  const [page, setPage] = useState("landing");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-100 via-white to-green-100">

      <Header />

      <Navbar
        setPage={setPage}
        isLoggedIn={isLoggedIn}
      />

      {page === "landing" && (
        <LandingPage setPage={setPage} />
      )}

      {page === "login" && (
        <LoginPage
          setPage={setPage}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}

      {page==="register" &&

        <RegisterPage/>

      }

      {page==="adminDashboard" &&
      <AdminDashboard  setPage={setPage}
    setIsLoggedIn={setIsLoggedIn}/>
        }

        {
page==="pacDashboard" &&
<PacDashboard
setPage={setPage}
setIsLoggedIn={setIsLoggedIn}
/>
}


      {page === "dashboard" && (
        <DashboardPage setPage={setPage}
setIsLoggedIn={setIsLoggedIn} />
      )}

      {page === "proposal" && (
        <ProposalPage setPage={setPage} />
      )}

      {page === "about" && (
        <AboutPage />
      )}

    </div>
  );
}

export default App;