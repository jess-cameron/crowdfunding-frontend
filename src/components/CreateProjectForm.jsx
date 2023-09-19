import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import postProject from '../api/post-project';
// import useAuth from '../hooks/use-auth.js';


function CreateProjectForm () {
    const navigate = useNavigate();
   // const {auth, setAuth} = useAuth();

    // const [projectDetails, setProjectDetails] = useState ({
    //     "title": title,
    //     "description": description,
    //     "goal": goal,
    //     "image": image,
    //     "true": is_open,
    //     "date": date_created,
    // });

    const [projectDetails, setProjectDetails] = useState ({})

    const handleChange = (event) => {
        const { id, value } = event.target;
        setProjectDetails((prevProjectDetails) => ({
            ...prevProjectDetails,
            [id]: value,
        }));
    };
    

    //we need to make sure we are authenticated to see this page - ie we should not see this form if we are not logged in
    const handleSubmit = (event) => {
        event.preventDefault();
            postProject(
                projectDetails.title,
                projectDetails.description,
                projectDetails.goal,
                projectDetails.image,
            ).then((response) => {
                window.localStorage.setItem(token, response.token);
                projectDetails({
                    token: response.token,
                });
                navigate('/');
                //lines 40 to 43 may not be needed - double up on token creation
            });
        
    };

    return (
        <form>
            <div>
                <label htmlFor='text'>Title of project:</label>
                <input
                    type='text'
                    id='title'
                    placeholder='Enter title'
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='text'>Description:</label>
                <input
                    type='text'
                    id='description'
                    placeholder='Enter a short description'
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='number'>Goal amount:</label>
                <input
                    type='number'
                    id='goal'
                    placeholder='Enter your goal amount'
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='image'>Attach image:</label>
                <input
                    type='URL'
                    id='image'
                    onChange={handleChange}
                />
            </div>
            <button type='submit' onClick={handleSubmit} >Create</button>
        </form>
    );
}
export default CreateProjectForm;