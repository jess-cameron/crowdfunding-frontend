import { useState } from "react";
import postUsers from "../api/post-users.js";
import { useNavigate } from "react-router-dom";

function CreateUserForm() {


    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("HANDLE SUBMIT")
        if (credentials.username && credentials.password) {
            postUsers(credentials.username, credentials.password).then((response) => {
                //we need to make sure we dont have any spaces in the username!
                //console.log("response", response)

                //if we want to automatically log the user in when they create a new acct, you will need to hit the /api-token-auth endpoint with the new users credentials to log them in automatically

                //when we create a user, do we get a token from our API response to be able to store it in localstorage? or does user have to login after creating an account?
                window.localStorage.setItem("token", response.token);


                //tell user acct was created, then they need to login
                navigate("/login");
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    placeholder="Enter username"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
            </div>
            <button type="submit">
                Create New User
            </button>
        </form>
    );
}

export default CreateUserForm;








