import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateUserForm() {
return (
    <form method="post">
        <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" placeholder="Enter new username" />
        </div>
        <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="Password" />
        </div>
        <button type="submit">Submit
        </button>
    </form>
        );

}

export default CreateUserForm;