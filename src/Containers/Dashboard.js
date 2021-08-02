import React from 'react';
import Nav from '../Components/Nav';
import {
  FileIcon,
  DiffAddedIcon,
  XCircleFillIcon,
  GearIcon,
} from '@primer/octicons-react';

const Dashboard = () => {
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
                    User <b>Management</b>
                  </h2>
                </div>
                <div className="col-xs-7">
                  <a href="/admin-register" className="btn btn-primary">
                    <DiffAddedIcon size={18} className="material-icons" />{' '}
                    <span>Add New User</span>
                  </a>
                  <a href="#" className="btn btn-primary">
                    <FileIcon size={16} className="material-icons" />{' '}
                    <span>Export to Excel</span>
                  </a>
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
                <tr>
                  <td>1</td>
                  <td>
                    <a href="#">
                      <img
                        src="https://i.pinimg.com/236x/82/ab/35/82ab3533ee71daf256f23c1ccf20ad6f--avatar-maker.jpg"
                        className="avatar"
                        alt="Avatar"
                      />
                      Michael Holz
                    </a>
                  </td>
                  <td>04/10/2013</td>
                  <td>Admin</td>
                  <td>
                    <span className="status text-success">&bull;</span> Active
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
                <tr>
                  <td>2</td>
                  <td>
                    <a href="#">
                      <img
                        src="https://i.pinimg.com/236x/82/ab/35/82ab3533ee71daf256f23c1ccf20ad6f--avatar-maker.jpg"
                        className="avatar"
                        alt="Avatar"
                      />{' '}
                      Paula Wilson
                    </a>
                  </td>
                  <td>05/08/2014</td>
                  <td>Publisher</td>
                  <td>
                    <span className="status text-success">&bull;</span> Active
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
                <tr>
                  <td>3</td>
                  <td>
                    <a href="#">
                      <img
                        src="https://i.pinimg.com/236x/82/ab/35/82ab3533ee71daf256f23c1ccf20ad6f--avatar-maker.jpg"
                        className="avatar"
                        alt="Avatar"
                      />{' '}
                      Antonio Moreno
                    </a>
                  </td>
                  <td>11/05/2015</td>
                  <td>Publisher</td>
                  <td>
                    <span className="status text-danger">&bull;</span> Suspended
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
                <tr>
                  <td>4</td>
                  <td>
                    <a href="#">
                      <img
                        src="https://i.pinimg.com/236x/82/ab/35/82ab3533ee71daf256f23c1ccf20ad6f--avatar-maker.jpg"
                        className="avatar"
                        alt="Avatar"
                      />{' '}
                      Mary Saveley
                    </a>
                  </td>
                  <td>06/09/2016</td>
                  <td>Reviewer</td>
                  <td>
                    <span className="status text-success">&bull;</span> Active
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
                <tr>
                  <td>5</td>
                  <td>
                    <a href="#">
                      <img
                        src="https://i.pinimg.com/236x/82/ab/35/82ab3533ee71daf256f23c1ccf20ad6f--avatar-maker.jpg"
                        className="avatar"
                        alt="Avatar"
                      />{' '}
                      Martin Sommer
                    </a>
                  </td>
                  <td>12/08/2017</td>
                  <td>Moderator</td>
                  <td>
                    <span className="status text-warning">&bull;</span> Inactive
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
              </tbody>
            </table>
            <div className="clearfix">
              <div className="hint-text">
                Showing <b>5</b> out of <b>25</b> entries
              </div>
              <ul className="pagination">
                <li className="page-item disabled">
                  <a href="#">Previous</a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    2
                  </a>
                </li>
                <li className="page-item active">
                  <a href="#" className="page-link">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
