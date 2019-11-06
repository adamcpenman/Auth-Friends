import React from "react";

const FriendsCard = ({ friend }) => {
    return (
        <div className="friendsCard">
            <h2>Name: {friend.name}</h2>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
        </div>
    )
}

export default FriendsCard;