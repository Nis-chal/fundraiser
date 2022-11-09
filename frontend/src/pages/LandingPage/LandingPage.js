import React ,{useState} from "react";
import Container from "./wrappers/LandingPage";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";


const LandingPage = () => {
  const [show , setshow] = useState(false)

  const togglesidebar = ()=>{
    setshow(value => !value)
  }
    
  return (
    <Container>
      <Navbar togglesidebar={togglesidebar} />
      <section className="info">
        <div className="left-container">
          <h1>Start Funding the Future Now</h1>
          <p>
            Access investment oppurtunities in the small business you belive in
          </p>
          <div className="btn-container">
            <button className="btn-started">Get Started</button>
            <button className="btn-works">How it Works</button>
          </div>
        </div>
        <div className="right-container">
        </div>

        <Sidebar show={show} togglesidebar={togglesidebar}/>
      </section>
    </Container>
  );
};

export default LandingPage;
