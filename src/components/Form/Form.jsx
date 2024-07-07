import React from "react";
import './Form.scss'
import { Button } from "@mui/material";

function Form() {
  return (
    <main className='form'>
      <h1 className='form__title'>Start a New Project</h1>
      <form className='form__container'>
        <label className='form__label'>Project type</label>
        <input className='form__input' type='text' placeholder="What's the purpose of this project?"></input>
        <label className='form__label'>Project description</label>
        <input className='form__input form__input-desc' type='text' placeholder="What are you looking to accomplish?"></input>
        <label className='form__label'>Estimated budget</label>
        <input className='form__input' type='text' placeholder="$50,000"></input>
        <label className='form__label'>Preferred start date</label>
        <input className='form__input' type='text' placeholder="Select date"></input>
        <Button>Submit</Button>
      </form>
    </main>
  );
}

export default Form;
