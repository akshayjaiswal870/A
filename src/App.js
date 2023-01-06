import "./styles.css";

import React, { useState } from "react";

export default function App() {
  const [state, setState] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    location: "Pune",
    hotel: "",
    gender: "",
    checkIn: "",
    checkOut: "",
    termsConditions: "Agree T & C"
  });

  const [booking, setBooking] = useState([]);

  function inputEvents(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }

  function confirmBooking(e) {
    e.preventDefault();
    alert(`${state.hotel} : Hotel Booked Successfully !!! `);
    setBooking([...booking, state]);
    console.log(state);
  }
  // console.log(booking);
  return (
    <div className="App">
      <h1> PRINT FORM DATA IN TABLE </h1>
      <h2>HOTEL BOOKING ( PUNE )</h2>
      <form>
        <label> First Name : </label>
        <input
          type="text"
          name="fname"
          value={state.fname}
          onChange={inputEvents}
          placeholder="Enter First Name"
        />
        <br />
        <br />
        <label> Last Name : </label>
        <input
          type="text"
          name="lname"
          value={state.lname}
          onChange={inputEvents}
          placeholder="Enter Last Name"
        />
        <br />
        <br />
        <label> Email Id : </label>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={inputEvents}
          placeholder="Enter Email Id"
        />
        <br />
        <br />
        <label> Mobile No : </label>
        <input
          type="number"
          name="mobile"
          value={state.mobile}
          onChange={inputEvents}
          placeholder="Enter Mobile No"
        />
        <br />
        <br />
        <label> Hotel Name : </label>
        <select name="hotel" value={state.hotel} onChange={inputEvents}>
          <option>Select Hotel</option>
          <option>J W Marriott </option>
          <option>The Ritz-Carlton</option>
          <option>Lemon Tree Premier</option>
          <option>The Central Park</option>
          <option>The ATMOS </option>
          <option>CONRAD</option>
        </select>
        <br />
        <br />
        <label> Location : </label>
        <span>
          <input
            type="checkbox"
            name="location"
            defaultChecked={true}
            onChange={inputEvents}
          />
        </span>
        <span> Maharashtra, Pune.</span>
        <br />
        <br />
        <label> Gender : </label>
        <span>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={inputEvents}
          />
        </span>
        <span htmlFor="male">Male</span>
        <span>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={inputEvents}
          />
        </span>
        <span htmlFor="female">Female</span>
        <br />
        <br />
        <label> Check-In : </label>
        <div>
          <input
            className="dates"
            type="date"
            name="checkIn"
            value={state.checkIn}
            onChange={inputEvents}
          />
        </div>
        <br />
        <br />
        <label> Check-Out : </label>
        <div>
          <input
            className="dates"
            type="date"
            name="checkOut"
            value={state.checkOut}
            onChange={inputEvents}
          />
        </div>
        <br />
        <br />
        <br />
        <span>
          <input
            type="checkbox"
            name="termsConditions"
            defaultChecked={true}
            onChange={inputEvents}
          />
        </span>
        <span>I am above 18 years of age and agree to terms & conditions.</span>
        <br />
        <br />
        <button type="submit" onClick={confirmBooking}>
          Submit
        </button>
      </form>
      <br />
      <h1>BOOKING DETAILS</h1>
      <table
        border="2"
        style={{
          margin: "auto",
          borderCollapse: "collapse"
        }}
      >
        <tbody>
          <tr>
            <td>Sr.No</td>
            <td>FirstName</td>
            <td>LastName</td>
            <td>Gender</td>
            <td>Email</td>
            <td>Mobile</td>
            <td>Hotel</td>
            <td>Location</td>
            <td>Check-In</td>
            <td>Check-Out</td>
          </tr>
          {booking.map((book, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{book.fname}</td>
              <td>{book.lname}</td>
              <td>{book.gender}</td>
              <td>{book.email}</td>
              <td>{book.mobile}</td>
              <td>{book.hotel}</td>
              <td>{book.location}</td>
              <td>{book.checkIn}</td>
              <td>{book.checkOut}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
