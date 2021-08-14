import axios from 'axios';
import { useContext, useState } from 'react';
import { backendUrlPrefix } from '../utils/constants';
import { AuthContext } from '../utils/context';
import config from '../utils/tokenConfig';
import makeToast from "../Components/Toaster"

const RegForm = (props) => {
  const { state } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    title: '',
    username: '',
    phone: '',
    gender: '',
    birthDay: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    image: null,
    imageUrl: 'https://via.placeholder.com/200',
    isNewConvert: '',
  });

  const handleImageChange = (event) => {
    setInputs({
      image: event.target.files[0],
      imageUrl: URL.createObjectURL(event.target.files[0]),
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(inputs);
    const formData = new FormData();
    formData.append('firstName', inputs.firstName);
    formData.append('lastName', inputs.lastName);
    formData.append('email', inputs.email);
    formData.append('title', inputs.title);
    formData.append('username', inputs.username);
    formData.append('phone', inputs.phone);
    formData.append('image', inputs.image);
    formData.append('address', inputs.address);
    formData.append('city', inputs.city);
    formData.append('state', inputs.state);
    formData.append('zip', inputs.zip);
    formData.append('birthDay', inputs.birthDay);
    formData.append('gender', inputs.gender);
    formData.append('isNewConvert', inputs.isNewConvert);
    try {
      const url = `${backendUrlPrefix}/users/add`;
      const {
        data: { data, status },
      } = await axios.post(url, formData, config(state.token));

      // console.log(data);
      
      props.onSuccess(data);
      setLoading(false);
      setInputs({
        firstName: '',
        lastName: '',
        email: '',
        title: '',
        username: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        image: null,
        imageUrl: 'https://via.placeholder.com/200',
        birthDay: '',
        isNewConvert: '',
      });
      if(status === "success") {
        makeToast("success", "successfully add user");
      }
    } catch (error) {
      console.log(error.response.data);
      makeToast('error', error?.response?.data.error);
      setLoading(false);
    }
  };

  return (
    <div className="reg-form">
      <form className="col-12 m-auto" onSubmit={handleSubmit}>
        <div className="flex-group">
          <div className="circle-cont">
            <div className="circle">
              <img src={inputs.imageUrl} alt="imager" />
            </div>
          </div>
          <div className="form-group">
            <label>Upload Image</label>
            <input
              type="file"
              className="form-control-file"
              onChange={handleImageChange}
              name="image"
            />
          </div>
        </div>
        <div className="flex-group">
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
        </div>
        <div className="flex-group">
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
        </div>
        <div className="flex-group">
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
        </div>
        <div className="flex-group">
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
          </div>
        </div>
        <div className="flex-group">
          <div onChange={handleChange} className="form-group">
            New convert
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="isNewConvert"
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
                value="No"
              />
              <label className="form-check-label" htmlFor="exampleRadios2">
                No
              </label>
            </div>
          </div>
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
        <button
          type="submit"
          value="submit"
          className="btn btn-success btn-block"
        >
          Submit
          {loading ? ' ...loading' : ''}
        </button>
      </form>
    </div>
  );
};

export default RegForm;
