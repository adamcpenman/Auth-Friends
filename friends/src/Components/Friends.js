import React, { useState, useEffect } from "react";
import { api } from "../utils/api";

import FriendsCard from "./FriendsCard";
import AddFriends from "./AddFriends";

function Friends(){
    // const [ loading ] = useState(false)
    const [data, setData] = useState([]);

useEffect(() => {
    api()
        .get("/api/friends")
        .then(res => setData(res.data))
        .catch(err => console.log(err))
});

//  if (loading) {
//     return <div className="spinner"><h2>Loading Data...</h2></div>;
//   }
    return (
        <>
         <h1>Friends</h1>
        <div className="friendsContainer">
           
            {data.map(friend => (
                <div key={friend.id}>
                    <FriendsCard friend={friend} />
                </div>
            ))}
            </div>
            <div className="formContainer">
            <AddFriends />
            </div>
        
        </>
    )
}

export default Friends;