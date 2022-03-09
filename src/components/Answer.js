import axios from "axios";
import React, { useEffect } from "react";

const Answer = () => {
  const [answer, setAnswer] = React.useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/results")
      .then((res) => {
        setAnswer(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
                      {answer.map((item, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.score}</td>
                          <td>
                            <button
                              className="btn btn-primary"
                              onClick={() => {
                                axios
                                  .delete(
                                    `http://localhost:3001/results/${item._id}`
                                  )
                                  .then((res) => {
                                    console.log(res);
                                    window.location.reload();
                                  });
                              }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
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
