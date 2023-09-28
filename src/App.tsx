import "./App.css";

import React, { Component } from "react";
import { users } from "./database";

function handleDelete(index: number): void {
  console.log(users);
  users.splice(index, 1);
}
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-uppercase mb-0">MANAGER USER</h5>
              </div>
              <div className="table-responsive">
                <table className="table no-wrap user-table mb-0">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium pl-4"
                      />

                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Name
                      </th>

                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Age
                      </th>

                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Dateofbirth
                      </th>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Manage
                      </th>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index: number) => (
                      <tr key={index}>
                        <td className="pl-4">{index + 1}</td>
                        <td>
                          <h6 className="font-medium mb-0">{user.name}</h6>
                        </td>
                        <td>
                          <span className="text-muted">Visual Designer</span>
                          <br />
                          <span className="text-muted">{user.work}</span>
                        </td>
                        <td>
                          <span className="text-muted">{user.email}</span>
                          <br />
                        </td>
                        <td>
                          <span className="text-muted">{user.DoB}</span>
                          <br />
                        </td>
                        <td>
                          <select
                            className="form-control category-select"
                            id="exampleFormControlSelect1"
                          >
                            <option>Modulator</option>
                            <option>Admin</option>
                            <option>User</option>
                            <option>Subscriber</option>
                          </select>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                            onClick={() => handleDelete(index)}
                          >
                            <i className="fa fa-trash" />{" "}
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                          >
                            <i className="fa fa-edit" />{" "}
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
    );
  }
}
