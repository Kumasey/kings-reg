import React from 'react';

const MemberDetails = (props) => {
  const deletConfirm = () => {
    alert('are you sure you want to delete member forever?');
  };
  const confirmMember = () => {
    alert('are you sure you want to confirm this entry?');
  };
    cdate = new Date(cts).toLocaleDateString();
  var mts = props.user?.createdAt,
    mDate = new Date(mts).toLocaleDateString();
  var bts = props.user?.createdAt,
    bDate = new Date(bts).toLocaleDateString();
  return (
    <>
      <div className="member-detail">
        <h4>
          {props.user?.firstName} {props.user?.lastName}
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
                src={props.user?.imageUrl}
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
                      <td className="text-primary">{props.user?._id}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-user?  text-primary"></span>
                          Title:
                        </strong>
                      </td>
                      <td className="text-primary">{props.user?.title}</td>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-cloud text-primary"></span>
                          Gender:
                        </strong>
                      </td>
                      <td className="text-primary">{props.user?.gender}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-user?  text-primary"></span>
                          Firstname:
                        </strong>
                      </td>
                      <td className="text-primary">{props.user?.firstName}</td>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-cloud text-primary"></span>
                          Lastname:
                        </strong>
                      </td>
                      <td className="text-primary">{props.user?.lastName}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-bookmark text-primary"></span>
                          Username:
                        </strong>
                      </td>
                      <td className="text-primary">{props.user?.username}</td>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-eye-open text-primary"></span>
                          Role:
                        </strong>
                      </td>
                      <td className="text-primary">{props.user?.role}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-envelope text-primary"></span>
                          Email:
                        </strong>
                      </td>
                      <td className="text-primary">{props.user?.email}</td>
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
                      <td className="text-primary">{props.user?.address}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-envelope text-primary"></span>
                          State:
                        </strong>
                      </td>
                      <td className="text-primary">{props.user?.state}</td>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-envelope text-primary"></span>
                          City:
                        </strong>
                      </td>
                      <td className="text-primary">{props.user?.city}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-envelope text-primary"></span>
                          Phone:
                        </strong>
                      </td>
                      <td className="text-primary">{props.user?.phone}</td>
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
