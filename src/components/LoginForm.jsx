import { useState } from "react";
import postLogin from "../api/post-login.js";
import { useNavigate } from "react-router-dom";

function LoginForm() {
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
        console.log("LOGIN HANDLESUBMIT")
        if (credentials.username && credentials.password) {
            postLogin(credentials.username, credentials.password).then((response) => {
                console.log("RESPONSE :", response)
                window.localStorage.setItem("token", response.token);
                navigate("/");
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
                Login
            </button>
            {/* <div>
                <a href="/create-user">Create New User</a>
            </div> */}
        </form>
    );
}

export default LoginForm;
