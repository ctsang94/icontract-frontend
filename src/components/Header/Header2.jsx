import './Header2.scss'
import Button from '@mui/material/Button';

const Header2 = () => {
    return (

        <div className="header">
            <div className="header__left">
                <div className="header__icon">
                    <div className="header__icon-background"></div>
                    <div className="header__icon-foreground"></div>
                </div>
                <div className="header__title">Homemade</div>
            </div>
            <div className="header__right">
                <div className="header__links">
                    <div className="header__link">My Projects</div>
                    <div className="header__link">Find Pros</div>
                    <div className="header__link">Pricing</div>
                    <div className="header__link">Help</div>
                </div>
                <Button variant="contained" className="header__button">
                    <div className="header__button-text">Post a project</div>
                </Button>
                <img className="header__profile-pic" src="https://via.placeholder.com/40x40" />
            </div>
        </div>
        )
}

export default Header2