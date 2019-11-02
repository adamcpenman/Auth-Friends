import React, { useState, useEffect } from "react";
import { api } from "../utils/api";

import FriendsCard from "./FriendsCard";

function Friends(){
    const [data, setData] = useState();

useEffect(() => {
    api()
        .get("/api/friends")
        .then(res => setData(res.data))
        .catch(err => console.log(err))
});
    return (
        <div>
            <h1>Friends</h1>
            {data.map(friend => (
                <div key={friend.id}>
                    <FriendsCard friend={friend} />
                </div>
            ))}
        </div>
    )
}

export default Friends;