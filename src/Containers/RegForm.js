import axios from 'axios';
import { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Nav from '../Components/Nav';
import { backendUrlPrefix } from '../utils/constants';
import { AuthContext } from '../utils/context';
// import { Modal, Button } from 'react-bootstrap';

const RegForm = (props) => {
  const { state, dispatch } = useContext(AuthContext);
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    title: '',
    username: '',
    phone: '',
    gender: '',
    birthDay: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    dispatch({ type: 'LOADING' });
    try {
      const url = `${backendUrlPrefix}/auth/register`;
      const {
        data: { data, status },
      } = await axios.post(url, inputs);
      if (status === 'success') {
        dispatch({ type: 'REGISTER_SUCCESS', payload: data });
      }
      console.log(data);
    } catch (error) {
      dispatch({ type: 'REGISTER_FAIL' });
      console.log(error.response.data);
    }
  };
  const query = new URLSearchParams(props.location.search);
  const next = query.get('next');
  if (state.isAuth) {
    return <Redirect to={next === null ? '/dashboard' : `/${next}`} />;
  }
  return (
    <>
      <Nav />

      <h3>Register Member</h3>

      <div className="reg-form">
        <form className="col-6 m-auto" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="register-first-name">Title</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              name="title"
              onChange={handleChange}
              value={inputs.title}
            >
              <option>Select title</option>
              <option value="Brother">Brother</option>
              <option value="Sister">Sister</option>
              <option value="Dr.">Dr.</option>
              <option value="Engr.">Engr.</option>
              <option value="Pastor">Pastor</option>
              <option value="Evang.">Evang.</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="first-name">Username</label>
            <input
              autoComplete="username"
              type="text"
              className="form-control"
              placeholder="Enter username"
              name="username"
              onChange={handleChange}
              value={inputs.username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter first name"
              name="firstName"
              onChange={handleChange}
              value={inputs.firstName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter last name"
              name="lastName"
              onChange={handleChange}
              value={inputs.lastName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="register-phone">Phone No.</label>
            <input
              type="text"
              className="form-control"
              placeholder="Phone"
              name="phone"
              onChange={handleChange}
              value={inputs.phone}
            />
          </div>
          <div className="form-group">
            <label htmlFor="register-email">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email address"
              name="email"
              value={inputs.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="register-gender">Gender</label>
            <select
              className="form-control"
              name="gender"
              onChange={handleChange}
              value={inputs.gender}
            >
              <option>Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="register-birthday">Birthday</label>
            <input
              type="date"
              className="form-control"
              id="exampleInputDate"
              name="birthDay"
              onChange={handleChange}
              value={inputs.birthDay}
            />
            ;
          </div>
          <div onChange={handleChange}>
            Age Range
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ageRange"
                value="<18"
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Earlier than 18
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ageRange"
                id="exampleRadios2"
                value="18-21"
              />
              <label className="form-check-label" htmlFor="exampleRadios2">
                18 - 21
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ageRange"
                id="exampleRadios3"
                value="22-25"
              />
              <label className="form-check-label" htmlFor="exampleRadios3">
                22 -25
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ageRange"
                id="exampleRadios4"
                value="26-30"
              />
              <label className="form-check-label" htmlFor="exampleRadios4">
                26 - 30
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ageRange"
                id="exampleRadios5"
                value="31-35"
              />
              <label className="form-check-label" htmlFor="exampleRadios5">
                31 - 35
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ageRange"
                id="exampleRadios6"
                value="36-40"
              />
              <label className="form-check-label" htmlFor="exampleRadios6">
                36 - 40
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ageRange"
                id="exampleRadios7"
                value="41-50"
              />
              <label className="form-check-label" htmlFor="exampleRadios7">
                41 - 50
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="ageRange"
                id="exampleRadios8"
                value=">51"
              />
              <label className="form-check-label" htmlFor="exampleRadios8">
                51 and above
              </label>
            </div>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="register-address">Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              value={inputs.address}
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                name="city"
                value={inputs.city}
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="State/Province"
                name="state"
                onChange={handleChange}
                value={inputs.state}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Zip/Postal"
                name="zip"
                onChange={handleChange}
                value={inputs.zip}
              />
            </div>
          </div>{' '}
          <br />
          <div onChange={handleChange}>
            New convert
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="isNewConvert"
                id="exampleRadios1"
                value="Yes"
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="isNewConvert"
                id="exampleRadios2"
                value="No"
              />
              <label className="form-check-label" htmlFor="exampleRadios2">
                No
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="register-address">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={inputs.password}
            />
          </div>
          <button
            type="submit"
            value="submit"
            className="btn btn-success btn-block"
          >
            Submit
            {state.loading ? '    Loading.....' : ''}
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
