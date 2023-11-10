import React from "react";
import BG from "../BG/BG";
import "./Home.css";
import { useState, useRef } from "react";
import axios from "axios";

const Home = () => {
  const doc1 = useRef();
  const doc2 = useRef();

  const [ans, setAns] = useState(0);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      const one = doc1.current.value;
      const two = doc2.current.value;
      const res = await axios.post("http://localhost:8000/plagarism_api", {
        one,
        two,
      });
      if (res.data.error) {
        setError(res.data.error);
        console.log(error);
      } else {
        // window.location.href = "/dashboard";
        console.log(res);
        setAns(((res.data) * 100).toFixed(2));
        console.log(ans);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 ">
            <div className="Main">
              <h1 className="Heading">Paraphrase Detection</h1>
              <input id="doc1" placeholder ="First Input" ref={doc1}></input>
              <input id="doc2" placeholder ="Second Input" ref={doc2}></input>
              <div
                className="button"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Plagiarism
              </div>
              <br/>
              <h2 className="Ans">Plagiarism is {ans}%</h2>
            </div>
          </div>
        </div>
      </div>
      <BG />
    </div>
  );
};

export default Home;
