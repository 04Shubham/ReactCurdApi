import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { makeRequest } from '../Axios';
// import {makeApiRequestWithJSON} from '../Api/utility'

export default function User() {

    const [users, setUsers] = useState([]);

    const fatchdata = async () => {
        const res = await makeRequest.get("GetAllUser");
        // console.log(res.data);
        setUsers(res.data);
    }
    useEffect(() => {
        fatchdata();
    }, []);

    // fetch("https://tseclapi.deosoft.in/api/GetAllUser")
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    return (
        <div>USer
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Create Bye</th>
                        th
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr key={user.user_id}>
                                <td>{user.full_name}</td>
                                <td>{user.email}</td>
                                <td>{user.entered_by}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    )
}
