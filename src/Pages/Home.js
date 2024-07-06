import React, { useEffect, useState } from "react";
import { apiFormJSONGet, apiFormJSONPost } from "../Api/utility";

export default function Home() {
    sessionStorage.setItem("accessToken", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiaW5mb0BkZW9zb2Z0Lm5ldCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJhbWlzaGEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9naXZlbm5hbWUiOiJhbWlzaGEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJpbmZvQGRlb3NvZnQubmV0IiwianRpIjoiMzUxZDUyODAtMjJiOS00MWU0LWEyNDktZTFhMDY5ZTUzM2Q0IiwibW9iaWxlIjoiOTg3NjU0MzIxMiIsImV4cCI6MTcyMDI3NDcwMSwiaXNzIjoiaHR0cHM6Ly9nbXRzZWNsLmRlb3NvZnQuaW47aHR0cHM6Ly9sb2NhbGhvc3Q6NzIzMjtodHRwOi8vbG9jYWxob3N0OjUyNzM7aHR0cDovL2xvY2FsaG9zdDo3MjI4IiwiYXVkIjoiaHR0cHM6Ly9nbXRzZWNsLmRlb3NvZnQuaW47aHR0cHM6Ly9sb2NhbGhvc3Q6NzIzMjtodHRwOi8vbG9jYWxob3N0OjUyNzM7aHR0cDovL2xvY2FsaG9zdDo3MjI4In0.b_DkuUj1UeiRKujejZMSkm0eFL_pi7Btdv17C3pRnfo")


    localStorage.setItem("accessToken", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiaW5mb0BkZW9zb2Z0Lm5ldCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJhbWlzaGEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9naXZlbm5hbWUiOiJhbWlzaGEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJpbmZvQGRlb3NvZnQubmV0IiwianRpIjoiMzUxZDUyODAtMjJiOS00MWU0LWEyNDktZTFhMDY5ZTUzM2Q0IiwibW9iaWxlIjoiOTg3NjU0MzIxMiIsImV4cCI6MTcyMDI3NDcwMSwiaXNzIjoiaHR0cHM6Ly9nbXRzZWNsLmRlb3NvZnQuaW47aHR0cHM6Ly9sb2NhbGhvc3Q6NzIzMjtodHRwOi8vbG9jYWxob3N0OjUyNzM7aHR0cDovL2xvY2FsaG9zdDo3MjI4IiwiYXVkIjoiaHR0cHM6Ly9nbXRzZWNsLmRlb3NvZnQuaW47aHR0cHM6Ly9sb2NhbGhvc3Q6NzIzMjtodHRwOi8vbG9jYWxob3N0OjUyNzM7aHR0cDovL2xvY2FsaG9zdDo3MjI4In0.b_DkuUj1UeiRKujejZMSkm0eFL_pi7Btdv17C3pRnfo")


    const [users, setUser] = useState([]);
    const [userEdit, setuserEdit] = useState([]);

    const fetchData = async () => {
        const res = await apiFormJSONGet("GetAllUser");
        // console.log(res.data);
        setUser(res.data);
    };

    const fetchEditData = async (user_id) => {
        const edit = await apiFormJSONGet("GetUserById?ID="+user_id);
        setuserEdit(edit.data);
        // console.log(edit.data);
    }
    
    const handleEditBtn = (user_id) => {
        fetchEditData(user_id)
    }

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
        last_login: "2024-07-03T10:48:53"
    })

    const handleChange = (e) => {
        setcreateUser(prevState => (
            { ...prevState, [e.target.name]: e.target.value }
        ));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(createUser);
            await apiFormJSONPost("AddUser", createUser)
        } catch (error) {
            console.log("Error: " + error)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="container ">
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
                                        {/* <td>{user.entered_by}</td> */}
                                        <td className="btn btn-primary" onClick={() => handleEditBtn(user.user_id)} >Edit</td>
                                        <td className="btn btn-danger">Delete</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="col-md-4 card p-2 ">
                        <h1>Form</h1>

                        <form action="" className="form form-responsive" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="user_id"
                                className="form-control"
                                placeholder="User Id"
                                onChange={handleChange}
                                disabled
                            />
                            <br />
                            <label htmlFor="">User Name</label>
                            <input
                                type="text"
                                name="user_name"
                                className="form-control"
                                onChange={handleChange}
                            />
                            <br />
                            <label htmlFor="">Full Name</label>
                            <input
                                type="text"
                                name="full_name"
                                className="form-control"
                                onChange={handleChange}
                            />
                            <br />
                            <label htmlFor="">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                onChange={handleChange}
                            />
                            <br />
                            <label htmlFor="">Mobile</label>
                            <input
                                type="text"
                                name="mobile"
                                className="form-control"
                                onChange={handleChange}
                            />
                            <br />
                            <label htmlFor="">Description</label>
                            <input
                                type="text"
                                name="description"
                                className="form-control"
                                onChange={handleChange}
                            />
                            <button type="submit" className="btn btn-success mt-3" onClick={handleSubmit}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
