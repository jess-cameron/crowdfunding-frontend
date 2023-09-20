async function postUsers(username, password) {

    const url = `${import.meta.env.VITE_API_URL}/users/`;
    const response = await fetch(url, {
        method: "POST", // We need to tell the server that we are sending JSON data so we set the COntent Type header to application/json
        headers: {
            "Content-Type": "application/json",

            //todo - when we create a new user, we wont be logged in
            //'Authorization': 'Token  ' + localStorage.getItem('token'),
        },
        body: JSON.stringify({
            "username": username,
            "password": password,
    
        }),
    });


    if (!response.ok) { // error handling
        const fallbackError = `Error trying to create new user`;
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }
    return await response.json();
}
export default postUsers;