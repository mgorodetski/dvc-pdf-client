import React from 'react';
import style from './btnLinkHead.module.css';
import btnText from './img/btnText.svg';


const BtnLinkHead = () => {

    return (
        <div className={`${style.btnLinkContainer}`}>
            <div className={`${style.child} ${style.btnCountour}`} alt=''>
                <img src={btnText} className={`${style.btnText}`} alt='' />
            </div>
            <div className={`${style.child} ${style.btnNimb}`}></div>
        </div>
    )
}

export default BtnLinkHead