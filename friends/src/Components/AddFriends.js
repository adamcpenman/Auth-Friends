import React, {useState} from "react";
import { api } from "../utils/api";

function AddFriends() {
    const [newFriend, setNewFriend] = useState ({
        name: "",
        age: "",
        email: ""
    });

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
    api()
        .post("/api/friends", newFriend)
            .then(res => setNewFriend({...newFriend, 
                name: "",
                age: "",
                email: ""
        }))
            .catch(err => console.log(err));
    }

    
    return (
        <div className="formCard">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newFriend.name}
                    onChange={handleChange}
                />
                 <input 
                    type="text"
                    name="age"
                    placeholder="Age"
                    value={newFriend.age}
                    onChange={handleChange}
                />
                 <input 
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={newFriend.email}
                    onChange={handleChange}
                />
                <button type="submit">Add Friend</button>
            </form>

        </div>
    )
}

export default AddFriends;