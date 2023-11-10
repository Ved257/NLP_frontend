import React from "react";
import "./Landing.css";
import BG from "../BG/BG";
import {Link} from "react-router-dom";

const Landing = () => {
  return (
    <div>
    <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 ">
            <div className="Welcome">
              <h1 className="Heading">Paraphrase Detection</h1>
              <Link to="/home">
                <div className="button">Detect in English</div>
              </Link>
              <br/>
               <Link to="/lang">
                <div className="button">Detect across Languages</div>
              </Link> 
            </div>
          </div>
        </div>
      </div>
      <BG />
    </div>
  )
}

export default Landing