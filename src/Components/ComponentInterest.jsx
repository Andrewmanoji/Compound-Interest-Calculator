import React, { useState } from "react";
import "./style.css";
const ComponentInterest = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [compound, setCompound] = useState(0);
  const [amount, setAmount] = useState(0);

  const handlePrincipalChange = (event) => {
    setPrincipal(event.target.value);
  };

  const handleRateChange = (event) => {
    setRate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const calculateCompoundInterest = () => {
    const amount = principal * Math.pow(1 + rate / 100, time);
    const interest = amount - principal;
    setAmount(amount);
    setCompound(interest);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const Reset = (e) => {
    setPrincipal("");
    setRate("");
    setTime("");
    setCompound(0);
    setAmount(0);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1
            style={{
              textAlign: "center",
              fontSize: "25px",
              fontWeight: "600",
              fontFamily: "san-serif",
              color: "black",
            }}
          >
            <span className="ci">CI</span> <span>CALCULATOR</span>
          </h1>
          <div>
            <label>Principal Amount : </label> <br />
            <input
              type="number"
              value={principal}
              onChange={handlePrincipalChange}
            />
          </div>
          <div className="container">
            <label>Rate of Interest :</label>
            <br />
            <input type="number" value={rate} onChange={handleRateChange} />
          </div>

          <div className="container">
            <label>Time (in years) :</label>
            <br />
            <input type="number" value={time} onChange={handleTimeChange} />
          </div>
          <div className="btn">
            <button onClick={calculateCompoundInterest}>Calculate</button>
            <button className="reset" onClick={Reset}>
              Reset
            </button>
          </div>
          <div className="output">Total Amount : {amount}</div>

          <div className="output">Compound Interest : {compound}</div>
        </div>
      </form>
    </div>
  );
};

export default ComponentInterest;
