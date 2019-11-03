import React, { useState, useEffect } from "react";
import { api } from "../utils/api";

import FriendsCard from "./FriendsCard";
import AddFriends from "./AddFriends";

function Friends() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(false)
        api()
            .get("/api/friends")
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    });

    return (
        <>
        
        {isLoading ? (
          <div className="spinner"><h2>Loading Data...</h2></div>
        ) : (
            null
          )}
            <h1 className="friendsHeader">Friends</h1>
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