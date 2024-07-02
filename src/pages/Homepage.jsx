import Welcome from "../components/Welcome/Welcome";
import ActiveProjects from "../components/ActiveProjects/ActiveProjects";
import NewProjects from "../components/NewProjects/NewProjects";

const Homepage = () =>{
    return (
        <>
            <Welcome />
            <ActiveProjects />
            <NewProjects />
        </>
    )
}

export default Homepage;