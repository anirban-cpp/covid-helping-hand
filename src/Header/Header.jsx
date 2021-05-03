import React, { useState } from 'react'

import './Header.css';
import Register from '../Registration/Register';
import { CustomDialog } from '../Dialog/Dialog';
import { useHistory } from 'react-router-dom';

const Header = () => {

    const [isopen, setisOpen] = useState(false);
    const [active, setactive] = useState('Home');

    const history = useHistory();

    const handleClick = () => { 
        setisOpen(!isopen);
        setactive('Home');
        history.push('/');
    }

    const optionClick = ({tab, path}) => {
        setactive(tab);
        history.push(`${path}`);
    }

    return (
        <div className='header'>
            <div className='header__logo' onClick={() => {history.push('/'); setactive('Home')}}>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/110px-SARS-CoV-2_without_background.png'
                    alt=""
                />
                <h3>COVID Helping Hand</h3>
            </div>
            <div className="header__options">
                <div className={active==='Home' ? "header__option__active" : "header__option"} onClick={() => optionClick({tab: 'Home',path: '/'})}>
                    <h4>HOME</h4>
                </div>
                <div className="header__option" onClick={handleClick}>
                    <h4>BE A DONOR</h4>
                </div>
                {
                    isopen ? (
                    <CustomDialog
                        isopen={isopen}
                        handleClose={handleClick}
                        title={`Become a Donor`}
                    ><Register/></CustomDialog>
                    ) : ( <></> )
                }
                <div className={active==='Contact' ? "header__option__active" : "header__option"} onClick={() => optionClick({tab: 'Contact',path: '/contact'})}>
                    <h4>CONTACT US</h4>
                </div>
            </div>
        </div>
    );
}

export default Header
