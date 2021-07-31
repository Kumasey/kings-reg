import React from 'react';
import Nav from '../Components/Nav';

const RegForm = () => {
  return (
    <>
      <Nav />
      <div className="reg-form">
        <form className="col-6 m-auto">
          <h3>Register</h3>
          <div className="form-group">
            <label htmlFor="register-first-name">Title</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>Select title</option>
              <option>Brother</option>
              <option>Sister</option>
              <option>Dr.</option>
              <option>Engr.</option>
              <option>Pastor</option>
              <option>Evang.</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter first name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter last name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="register-phone">Phone No.</label>
            <input type="text" className="form-control" placeholder="Phone" />
          </div>
          <div className="form-group">
            <label htmlFor="register-email">Email</label>
            <input
              type="emaill"
              className="form-control"
              placeholder="Enter email address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="register-gender">Gender</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>Select gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="register-birthday">Birthday</label>
            <input type="date" className="form-control" id="exampleInputDate" />
          </div>
          Age Range
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="defaultCheck"
              value="option1"
              checked
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Earlier than 18
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              18 - 21
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios3"
              value="option3"
              checked
            />
            <label className="form-check-label" htmlFor="exampleRadios3">
              22 -25
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios4"
              value="option4"
            />
            <label className="form-check-label" htmlFor="exampleRadios4">
              26 - 30
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios5"
              value="option5"
            />
            <label className="form-check-label" htmlFor="exampleRadios5">
              31 - 35
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios6"
              value="option6"
            />
            <label className="form-check-label" htmlFor="exampleRadios6">
              36 - 40
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios7"
              value="option7"
            />
            <label className="form-check-label" htmlFor="exampleRadios7">
              41 - 50
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios8"
              value="option8"
            />
            <label className="form-check-label" htmlFor="exampleRadios8">
              51 and above
            </label>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="register-address">Address</label>
            <input type="text" className="form-control" placeholder="" />
          </div>
          <div className="row">
            <div className="col">
              <input type="text" className="form-control" placeholder="City" />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="State/Province"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Zip/Postal"
              />
            </div>
          </div>{' '}
          <br />
          New convert
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
              checked
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Yes
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              No
            </label>
          </div>
          <button
            type="submit"
            value="submit"
            className="btn btn-success btn-block"
          >
            Submit
          </button>
          <p className="forgot-password text-right">
            Already registered <a href="/">sign in?</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default RegForm;
