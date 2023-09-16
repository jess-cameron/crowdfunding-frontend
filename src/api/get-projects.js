async function getProjects() {
    const url =`${import.meta.env.VITE_API_URL}/projects`;

    const response =awaitfetch(url,{method:"GET"});

    if (!response.ok) {
        const fallbackError ="Error fetching projects";
        const data =awaitresponse.json().catch(() => {
            thrownewError(fallbackError);
        });

        const errorMessage = data?.detail?? fallbackError;
        thrownewError(errorMessage);
    }

    return await response.json();
}

export default getProjects;