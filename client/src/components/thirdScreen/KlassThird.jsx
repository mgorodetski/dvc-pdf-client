import React from 'react';
import style from "./thirdScreen.module.css";
import deti from '../../img/thirdscreen/deti.png'


const KlassThird = () => {
    return (
        <>
            <div className={`${style.thirdScreen}`}>
                <div className={`${style.disc}`}>
                    <p className={style.firstTitle}>Что можно сделать еще</p>
                    <p className={style.secondTitle}>Расскажите об акции «Дети вместо цветов» в своих соцсетях. Чем больше людей присоединится — тем больше средств мы сможем собрать в помощь неизлечимо больным детям.</p>
                    <p className={style.thirdTitle}>Хештеги акции: #вашапомощьнезавянет #детивместоцветов #фондвера #домсмаяком</p>
                    <div className={style.bgMin}></div>
                </div>
                <img src={deti} className={style.detiImg} alt=""/>

            </div>
        </>
    )
}

export default KlassThird