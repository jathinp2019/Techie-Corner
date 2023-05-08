import React, { useState } from "react";
import { MdSpaceDashboard, MdAssessment } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoIosWallet } from "react-icons/io";
import imga from "./images/aa.jpg";
import { BsPersonCheckFill } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import "./css/Sidebar.css";
import Head from "./Header";
import Quiz from "../pages/Quiz.js";
import { Link } from "react-router-dom";
const style = { color: "white", fontSize: "35px" };
const style1 = {
  color: "white",
  fontSize: "35px",
  alignItems: "center",
  justifyContent: "center",
};
const Sidebar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <main className={show ? "space-toggle" : null}>
        <header className="header">
          <div>
            <Head></Head>
          </div>
        </header>
        <>
          <div className={`sidebar ${show ? "show" : null}`}>
            <nav className="nav">
              <div className="header-toggle" onClick={() => setShow(!show)}>
                <div className="ham">
                  <GiHamburgerMenu />
                </div>
                <div className="nav-list">
                  <Link to="/dashboard" className="nav-link active">
                    <MdSpaceDashboard style={style} />
                    <span className="nav-link-name">Dashboard</span>
                  </Link>
                  <Link to="/hotel" className="nav-link">
                    <CgProfile style={style} />
                    <span className="nav-link-name">Profile</span>
                  </Link>
                  <Link to="/gallery" className="nav-link">
                    <MdAssessment style={style} />
                    <span className="nav-link-name">Marks</span>
                  </Link>
                  <Link to="/payment" className="nav-link">
                    <IoIosWallet style={style} />
                    <span className="nav-link-name">Payment</span>
                  </Link>
                  <Link to="/gallery" className="nav-link">
                    <BsPersonCheckFill style={style} />
                    <span className="nav-link-name">Attendance</span>
                  </Link>

                  <Link to="/course" className="nav-link">
                    <FaBookOpen style={style} />
                    <span className="nav-link-name">Course</span>
                  </Link>
                  <Link to="/editor" className="nav-link">
                    <AiFillEdit style={style} />
                    <span className="nav-link-name">Edit</span>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </>
      </main>
    </>
  );
};

export default Sidebar;
