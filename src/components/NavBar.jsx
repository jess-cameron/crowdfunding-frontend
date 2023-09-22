import { Link, Outlet } from "react-router-dom";

function NavBar() {
    const handleLogout = () => {
        window.localStorage.removeItem("token")
        setAuth({ token: null })
    };
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/" onClick={handleLogout}>Log Out</Link>
                <Link to="login">Log	In</Link>
                <Link to="create-project">Create Project</Link>
                <Link to="create-user">Create User</Link>
                <Link to="/pledge">Make a Pledge</Link>            
            </nav>
            <Outlet />
        </div>
        );
    }

export default NavBar;