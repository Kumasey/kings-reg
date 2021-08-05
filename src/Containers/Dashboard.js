/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useContext } from 'react';
import Nav from '../Components/Nav';
import {
  FileIcon,
  BellFillIcon,
  XCircleFillIcon,
  PencilIcon,
  PersonAddIcon,
} from '@primer/octicons-react';
import { Pagination } from '../Components/Pagination';
import axios from 'axios';
import { backendUrlPrefix, formatDate } from '../utils/constants';

import config from '../utils/tokenConfig';
import { AuthContext } from '../utils/context';
import RegForm from './RegForm';

const Dashboard = () => {
  const { state } = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5);
  const [count, setCount] = useState(null);
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const url = `${backendUrlPrefix}/users?limit=${pageSize}&page=${currentPage}`;
        const {
          data: {
            data: { users, count },
          },
        } = await axios.get(url, config(state.token));
        setCount(count);
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, [currentPage, pageSize, state.token]);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const onSubmitSuccess = (data) => {
    setShowModal(false);
    setCurrentPage(1);
    console.log(data);
    setUsers([data.user, ...users]);
  };
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="container">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-xs-5">
                  <h2>
                    Membership <b>Management</b>
                  </h2>
                </div>
                <div className="alert-icon">
                  <BellFillIcon size={24} />
                </div>
                <div className="col-xs-7">
                  <span className="btn btn-primary" onClick={openModal}>
                    <DiffAddedIcon size={18} className="material-icons" />{' '}
                    <span>Add New Member</span>
                  </span>
                  <a
                    href={`${backendUrlPrefix}/users/csv`}
                    className="btn btn-primary"
                  >
                    <FileIcon size={16} className="material-icons" />{' '}
                    <span>Export User</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="new-modal" id={showModal ? 'show' : 'hide'}>
              <div className="new-modal-content">
                <div className="new-modal-container">
                  <div className="modal-header flex">
                    <h6 className="modal-title">Add New Member</h6>
                    <button className="btn btn-danger" onClick={closeModal}>
                      X
                    </button>
                  </div>

                  <RegForm onSuccess={onSubmitSuccess} />
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Date Created</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 &&
                  users.map((user, index) => (
                    <tr key={user._id}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          src={user.imageUrl}
                          className="avatar"
                          alt="Avatar"
                        />
                        {user.firstName} {user.lastName}
                      </td>
                      <td>{formatDate(user.createdAt)}</td>
                      <td>
                        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                      </td>
                      <td>
                        {user.status === 'active' ? (
                          <>
                            <span className="status text-success">&bull;</span>{' '}
                            {user.status.charAt(0).toUpperCase() +
                              user.status.slice(1)}
                          </>
                        ) : (
                          <>
                            <span className="status text-warning">&bull;</span>{' '}
                            {user.status.charAt(0).toUpperCase() +
                              user.status.slice(1)}
                          </>
                        )}
                      </td>
                      <td>
                        <a
                          href="#"
                          className="settings mr-3"
                          title="Settings"
                          data-toggle="tooltip"
                        >
                          <GearIcon size={18} />
                        </a>
                        <a
                          href="#"
                          className="delete"
                          title="Delete"
                          data-toggle="tooltip"
                        >
                          <XCircleFillIcon size={18} />
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="clearfix">
              <div className="hint-text">
                Showing <b>{pageSize}</b> out of <b>{count}</b> entries
              </div>

              <Pagination
                postsPerPage={pageSize}
                totalPosts={count}
                paginate={paginate}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
