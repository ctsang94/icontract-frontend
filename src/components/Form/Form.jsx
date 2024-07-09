import React from "react";
import './Form.scss'
import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function Form() {
  const [projectType, setProjectType] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectEstimatedBudget, setProjectEstimatedBudget] = useState('');
  const [projectStartDate, setProjectStartDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/projects', {
        "projectType": projectType,
        "projectDescription": projectDescription,
        "estimatedBudget": projectEstimatedBudget,
        "preferredStartDate": projectStartDate
      })
      console.log(response)
      if (response.status === 201) {
        alert('Project added successfully!');
        setProjectType('');
        setProjectDescription('');
        setProjectEstimatedBudget('');
        setProjectStartDate('');
      } else {
        alert('Failed to add project');
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occured while adding the project');
    }
  }

  return (
    <main className='form'>
      <h1 className='form__title'>Start a New Project</h1>
      <form className='form__container' onSubmit={handleSubmit}>
        <label className='form__label'>Project type</label>
        <input className='form__input'
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)} type='text' placeholder="What's the purpose of this project?"></input>
        <label className='form__label'>Project description</label>
        <textarea className='form__input form__input-desc'
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)} type='text' placeholder="What are you looking to accomplish?" />
        <label className='form__label'>Estimated budget</label>
        <input className='form__input'
          type="number"
          value={projectEstimatedBudget}
          onChange={(e) => setProjectEstimatedBudget(e.target.value)} placeholder="$50,000"></input>
        <label className='form__label'>Preferred start date</label>
        <input className='form__input' type='text'
          value={projectStartDate}
          onChange={(e) => setProjectStartDate(e.target.value)} placeholder="Select date"></input>
        <Button type='submit'>Add Project</Button>
      </form>
    </main>
  );
}

export default Form;
