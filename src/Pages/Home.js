import React, { useEffect, useState } from "react";
import { apiFormJSONGet, apiFormJSONPost, apiJSONPut } from "../Api/utility";

export default function Home() {
  sessionStorage.setItem(
    "accessToken", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiQ2lyY2xlMSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJFbGVjdHJpY2FsIENpcmNsZS0xKFcuVHJpcHVyYSkiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9naXZlbm5hbWUiOiJFbGVjdHJpY2FsIENpcmNsZS0xKFcuVHJpcHVyYSkiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJDaXJjbGUxIiwianRpIjoiODFkNTFiNjctM2RlNS00MDRhLWJlYWEtMDE5ZjY2ODhhMjE5IiwibW9iaWxlIjoiOTk5OTk5OTk5OSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFHTSIsImV4cCI6MTcyMDQzMDAwOCwiaXNzIjoiaHR0cHM6Ly9nbXRzZWNsLmRlb3NvZnQuaW47aHR0cHM6Ly9sb2NhbGhvc3Q6NzIzMjtodHRwOi8vbG9jYWxob3N0OjUyNzM7aHR0cDovL2xvY2FsaG9zdDo3MjI4IiwiYXVkIjoiaHR0cHM6Ly9nbXRzZWNsLmRlb3NvZnQuaW47aHR0cHM6Ly9sb2NhbGhvc3Q6NzIzMjtodHRwOi8vbG9jYWxob3N0OjUyNzM7aHR0cDovL2xvY2FsaG9zdDo3MjI4In0.jWHFhOpcc3T0aSs9sdpxH-JG57DUvJxoEcGhr1_K2jk"
  );

  localStorage.setItem(
    "accessToken", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiQ2lyY2xlMSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJFbGVjdHJpY2FsIENpcmNsZS0xKFcuVHJpcHVyYSkiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9naXZlbm5hbWUiOiJFbGVjdHJpY2FsIENpcmNsZS0xKFcuVHJpcHVyYSkiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJDaXJjbGUxIiwianRpIjoiODFkNTFiNjctM2RlNS00MDRhLWJlYWEtMDE5ZjY2ODhhMjE5IiwibW9iaWxlIjoiOTk5OTk5OTk5OSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFHTSIsImV4cCI6MTcyMDQzMDAwOCwiaXNzIjoiaHR0cHM6Ly9nbXRzZWNsLmRlb3NvZnQuaW47aHR0cHM6Ly9sb2NhbGhvc3Q6NzIzMjtodHRwOi8vbG9jYWxob3N0OjUyNzM7aHR0cDovL2xvY2FsaG9zdDo3MjI4IiwiYXVkIjoiaHR0cHM6Ly9nbXRzZWNsLmRlb3NvZnQuaW47aHR0cHM6Ly9sb2NhbGhvc3Q6NzIzMjtodHRwOi8vbG9jYWxob3N0OjUyNzM7aHR0cDovL2xvY2FsaG9zdDo3MjI4In0.jWHFhOpcc3T0aSs9sdpxH-JG57DUvJxoEcGhr1_K2jk"
  );

  const fetchData = async () => {
    const res = await apiFormJSONGet("GetAllUser");
    setUser(res.data);
  };

  const [users, setUser] = useState([]);

  const handleEditBtn = (data) => {
    setUserId(data.user_id);
    setUserName(data.user_name);
    setEmail(data.email);
    setMobile(data.mobile);
    setFullname(data.full_name);
    setDescription(data.description);
    setStatus(data.status);
  };



  const [UserId, setUserId] = useState(0);
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [FullName, setFullname] = useState("");
  const [Description, setDescription] = useState("");
  const [Status, setStatus] = useState("");

  const [createUser, setcreateUser] = useState({
    user_name: "",
    email: "",
    mobile: "",
    full_name: "",
    description: "",
    password_hash: "",
    entered_by: "Admin ",
    entry_date: "2024-07-06T11:43:36",
    status: "Valid",
    modified_date: null,
    modified_by: null,
    last_login: "2024-07-03T10:48:53",
  });

  //   const handleChange = (e) => {
  //     setcreateUser((prevState) => ({
  //       ...prevState,
  //       [e.target.name]: e.target.value,
  //     }));
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(createUser);
      await apiFormJSONPost("AddUser", createUser);
      alert("User Create Successfully!");
    } catch (error) {
      // console.log("Error: " + error);
      alert("Internal Server Error!");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = {
        user_name: UserName,
        email: Email,
        mobile: Mobile,
        full_name: FullName,
        description: Description,
        status: Status,
      }
      await apiJSONPut("UpdateUser/"+UserId, updatedUser);
      resetUserEditData();
      fetchData();
      alert("User updated successfully");
    } catch (error) {
      // console.log("Error: " + error);
      alert("Error while Updateing a User")
    }
  }

  const resetUserEditData = () => {

  setUserId(0);
  setUserName("");
  setEmail("");
  setMobile("");
  setFullname("");
  setDescription("");
  setStatus("");
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container bg-success-subtle  ">
        <div className="row mt-5">
          <div className="col-md-8">
            <h1>Data </h1>
            <table className="table table-responsive table-warning">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>mobile</th>
                  <th>Description</th>
                  <th colSpan={2}>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.user_id}>
                    <td>{user.full_name}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile}</td>
                    <td>{user.description}</td>
                    <td
                      className="btn btn-primary"
                      onClick={() => handleEditBtn(user)}
                    >
                      Edit
                    </td>
                    <td className="btn btn-danger">Delete</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="col-md-4 card p-2 ">
            <h1>Form</h1>

            <form
              action=""
              className="form form-responsive"
              onSubmit={UserId !== 0 ? handleUpdate : handleSubmit}
            >
              <label htmlFor="">User Name</label>
              <input
                type="text"
                name="user_name"
                className="form-control"
                value={UserName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <br />
              <label htmlFor="">Full Name</label>
              <input
                type="text"
                name="full_name"
                className="form-control"
                value={FullName}
                onChange={(e) => setFullname(e.target.value)}
              />
              <br />
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <label htmlFor="">Mobile</label>
              <input
                type="text"
                name="mobile"
                className="form-control"
                value={Mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              <br />
              <label htmlFor="">Description</label>
              <input
                type="text"
                name="description"
                className="form-control"
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
              />

              {UserId ? (
                <div>
                  <label htmlFor="">Status</label>
                  <select
                    name="status"
                    value={Status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="Valid">Valid</option>
                    <option value="Invalid">Invalid</option>
                  </select>
                </div>
              ) : (
                ""
              )}


              {UserId == 0 && <button
                type="submit"
                className="btn btn-success mt-3"
                onClick={handleSubmit}
              >
                Submit
              </button>}

              {UserId != 0 && <button
                type="submit"
                className="btn btn-success mt-3"
                onClick={handleUpdate}
              >
                Update
              </button>}

            </form>
          </div>
        </div>
      </div>
    </>
  );
}
