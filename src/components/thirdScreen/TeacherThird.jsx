import React from 'react';
import deti from '../../img/thirdscreen/deti.png'
import style from "./thirdScreen.module.css";


const TeacherThird = () => {
  return (
    <>
       <div className={`${style.thirdScreen}  ${style.thirdScreenTeacher}`}>
                    <div className={`${style.disc}`}>
                        <p className={style.firstTitle}>Что дальше?</p>
                        <a href="https://dvc.fondvera.ru/perevod" className={`${style.btnReversed}`} target="_blank" rel="noopener noreferrer">сделать перевод</a>
                        <p className={style.secondSobrat}>Осталось собрать деньги и сделать благотворительный перевод</p>
                        <p className={style.secondTitle}>А ещё расскажите об акции «Дети вместо цветов» в своих соцсетях. Чем больше людей присоединится — тем больше средств мы сможем собрать в помощь неизлечимо больным детям.</p>
                        <p className={style.thirdTitle}>Хештеги акции: #вашапомощьнезавянет #детивместоцветов #фондвера #домсмаяком</p>
                        <p className={style.bgMin}></p>
                    </div>
                    <img src={deti} className={style.detiImg} alt="deti"/>

                </div>
    </>
  )
}

export default TeacherThird