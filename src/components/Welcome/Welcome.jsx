import { Button } from "@mui/material";
import './Welcome.scss'

const Welcome = () => {
  return (
    <section className='container'>
      <h1 className='container__title'>Welcome back, Kelvin</h1>
      <Button variant="contained" className='container__button'>Update your profile</Button>
    </section>
  );
};

export default Welcome