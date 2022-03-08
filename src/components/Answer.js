import React from "react";

const Answer = () => {
  return (
    <div className="m-4">
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">
                  <i className="fa fa-user"></i>
                  Mark List
                </h4>
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Score</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto@gmail.com</td>
                        <td>10</td>
                        <td>
                          <a href="#" className="btn btn-sm btn-primary">
                            <i className="fa fa-pencil">edit</i>
                          </a>
                          <a href="#" className="btn btn-sm btn-danger">
                            <i className="fa fa-trash">delete</i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answer;
