import Welcome from "../components/Welcome/Welcome";
import ActiveProjects from "../components/ActiveProjects/ActiveProjects";
import NewProjects from "../components/NewProjects/NewProjects";
import Chat from "../components/Chat/Chat";

const Homepage = () =>{
    return (
        <>
            <Welcome />
            <ActiveProjects />
            <NewProjects />
            <Chat />
        </>
    )
}

export default Homepage;