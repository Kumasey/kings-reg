import axios from 'axios';
import Nav from '../Components/Nav';
import { backendUrlPrefix } from '../utils/constants';

import config from '../utils/tokenConfig';
import { AuthContext } from '../utils/context';

import React, { useState, useEffect, useContext } from 'react';

const MemberDetails = (props) => {
  const { state } = useContext(AuthContext);
  const [users, setUsers] = useState({});
  const id = props.id;
  console.log('++++++>', id);
  console.log('+>', props);
  useEffect(() => {
    const getMember = async () => {
      try {
        const url = `${backendUrlPrefix}/users/${id}`;
        const res = await axios.get(url, config(state.token));
        console.log('--------->', res.data.data);
        setUsers(res.data.data);
        console.log('--+-->', users);
      } catch (error) {
        console.log(error);
      }
    };
    getMember();
  }, [id, state.token]);
  const deletConfirm = () => {
    alert('are you sure you want to delete member forever?');
  };
  const confirmMember = () => {
    alert('are you sure you want to confirm this entry?');
  };
  var cts = users.createdAt,
    cdate = new Date(cts).toLocaleDateString();
  var mts = users.createdAt,
    mDate = new Date(mts).toLocaleDateString();
  var bts = users.createdAt,
    bDate = new Date(bts).toLocaleDateString();
  return (
    <>
      <Nav />
      <div className="member-detail">
        Member datails <br />{' '}
        <h4>
          {users.firstName} {users.lastName}
        </h4>
      </div>
      <div className="container bootstrap snippets bootdey">
        <div className="panel-body inf-content">
          <div className="row">
            <div className="col-md-4">
              <img
                alt=""
                title="member image"
                className="img-circle img-thumbnail isTooltip"
                src={users.imageUrl}
                data-original-title="Usuario"
              />
            </div>
            <div className="col-md-6">
              <div className="table-responsive">
                <table className="table table-user-information">
                  <tbody>
                    <tr>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-asterisk text-primary"></span>
                          Identificacion
                        </strong>
                      </td>
                      <td className="text-primary">{users._id}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-user  text-primary"></span>
                          Title:
                        </strong>
                      </td>
                      <td className="text-primary">{users.title}</td>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-cloud text-primary"></span>
                          Gender:
                        </strong>
                      </td>
                      <td className="text-primary">{users.gender}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-user  text-primary"></span>
                          Firstname:
                        </strong>
                      </td>
                      <td className="text-primary">{users.firstName}</td>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-cloud text-primary"></span>
                          Lastname:
                        </strong>
                      </td>
                      <td className="text-primary">{users.lastName}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-bookmark text-primary"></span>
                          Username:
                        </strong>
                      </td>
                      <td className="text-primary">{users.username}</td>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-eye-open text-primary"></span>
                          Role:
                        </strong>
                      </td>
                      <td className="text-primary">{users.role}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-envelope text-primary"></span>
                          Email:
                        </strong>
                      </td>
                      <td className="text-primary">{users.email}</td>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-eye-open text-primary"></span>
                          Birthday:
                        </strong>
                      </td>
                      <td className="text-primary">{bDate}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-envelope text-primary"></span>
                          Address:
                        </strong>
                      </td>
                      <td className="text-primary">{users.address}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-envelope text-primary"></span>
                          State:
                        </strong>
                      </td>
                      <td className="text-primary">{users.state}</td>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-envelope text-primary"></span>
                          City:
                        </strong>
                      </td>
                      <td className="text-primary">{users.city}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-envelope text-primary"></span>
                          Phone:
                        </strong>
                      </td>
                      <td className="text-primary">{users.phone}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-calendar text-primary"></span>
                          created:
                        </strong>
                      </td>
                      <td className="text-primary">{cdate}</td>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-calendar text-primary"></span>
                          Modified:
                        </strong>
                      </td>
                      <td className="text-primary">{mDate}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="detail-button">
                  <button
                    className="btn btn-danger"
                    type="button"
                    onClick={deletConfirm}
                  >
                    DELETE MEMBER
                  </button>
                  <button
                    className="btn btn-success"
                    type="button"
                    onClick={confirmMember}
                  >
                    VERIFY
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberDetails;
