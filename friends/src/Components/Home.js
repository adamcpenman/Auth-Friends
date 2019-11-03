import React from "react";
import Friends from "../Images/Friends.png"

function Home(){
    return (
        <div>
            <h1>Welcome to your</h1>
            <img className="friendsLogo" src={Friends} alt="friends" />
        </div>
    )
}

export default Home;