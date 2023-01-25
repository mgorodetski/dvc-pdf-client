import React from 'react'
import Header from '../header';
import style from './firstScreen.module.css';
import boyGirlM from '../../img/boyGirlM.png';
import BtnLinkHead from '../btnLinkHead';

const FirstScreen = () => {

  return (
    <>
      <div className={`${style.headerContainerM}`}></div>

      <div className={`${style.firstScreen}`}>
        <Header />

        <a href="http://dvc.fondvera.ru" target="_blank" rel="noopener noreferrer">
          <div className={`${style.heroes}`}>
            <div className={`${style.girl}`}></div>
            <BtnLinkHead />
            <div className={`${style.boy}`}></div>
          </div>
          <img src={boyGirlM} alt="" className={`${style.boyGirlM}`}></img>
        </a>

        <h1 className={`${style.bannerTitle}`}>
          Благотворительная акция к 1 сентября
        </h1>
      </div>
    </>

  );
}

export default FirstScreen
