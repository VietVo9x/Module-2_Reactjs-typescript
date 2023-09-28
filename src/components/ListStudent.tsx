import React, { Component } from "react";

import { students } from "../data/database";

export default class ListStudent extends Component {
  render() {
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index: number) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{student.code}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.gender ? "male" : "female"}</td>
                    <td>
                      <div className="template-demo">
                        <button
                          type="button"
                          className="btn btn-danger btn-icon-text"
                        >
                          Xem
                        </button>
                        <button
                          type="button"
                          className="btn btn-warning btn-icon-text"
                        >
                          Sửa
                        </button>
                        <button
                          type="button"
                          className="btn btn-success btn-icon-text"
                        >
                          Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
