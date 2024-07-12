import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './ProjectAuctions.scss';

function ProjectAuctions() {
    const [projects, setProjects] = useState([]);

    const getProjects = async () => {
        try {
            const response = await axios.get('https://icontract-backend.onrender.com/projects');
            setProjects(response.data);
        } catch (error) {
            console.error('Error fetching contractors:', error);
        }
    };

    useEffect(() => {
        getProjects();
    }, []);

    console.log(projects)
    return (
        <main className='projectauction-container'>
            <section className='projectauction-container__top'>
                <h1 className='projectauction-container__top-title'>Find Projects</h1>
                <p className='projectauction-container__top-text'>Make sure you have an updated profile, so homeowners can understand your qualifications.</p>
                <input className='projectauction-container__top-input' placeholder='Search by project name or keyword'></input>
            </section>
            <section className='projectauction-container__bot'>
                <article className='projectauction-container__bot-list'>
                    {projects.map(project => (
                        <section className='projectauction-container__bot-item'>
                            <article className='projectauction-container__bot-left'>
                                <h2 className='projectauction-container__bot-title'>{project.projectType}</h2>
                                <p className='projectauction-container__bot-text'>{project.projectDescription}</p>
                                <button className='projectauction-container__bot-button'>View and place bid</button>
                            </article>
                            <article className='projectauction-container__bot-right'>
                                <img className='projectauction-container__bot-img' src={project.image} />
                            </article>
                        </section>
                    ))}
                </article>
            </section>
        </main>
    )
}

export default ProjectAuctions