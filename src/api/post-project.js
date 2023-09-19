async function postProject(title, description, goal, image) {
    // is this getting the right date?
    let date = new Date().toJSON();

    const url = `${import.meta.env.VITE_API_URL}/projects/`;
    const response = await fetch(url, {
        method: "POST", // We need to tell the server that we are sending JSON data so we set the COntent Type header to application/json
        headers: {
            "Content-Type": "application/json",
            'Authorization': 'Token  ' + localStorage.getItem('token'),
        },
        body: JSON.stringify({
            "title": title,
            "description": description,
            "goal": goal,
            "image": image,

            //is_open - user does not control this unless they have permissions
            "is_open": true,
            //date does not get passed in from the frontend - user does not control this - we define it here
            "date_created": date,
        }),
    });


    if (!response.ok) { // error handling
        const fallbackError = `Error trying to post project`;
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }
    return await response.json();
}
export default postProject;
