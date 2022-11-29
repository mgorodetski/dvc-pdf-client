import React from 'react';
import style from './footer.module.css';


const Footer = () => {
    return (
        <footer className={`${style.footer}`}>
            <div className={`${style.footerContainer}`}>
                <div className={`${style.footerCopyRight}`}>© 2022 Фонд помощи хосписам «Вера»</div>
                <div className={`${style.footerLink}`}>
                    <a href="https://dvc.fondvera.ru">dvc.fondvera.ru</a>
                </div>
                <div className={`${style.footerEmail}`}>
                    Если у вас остались вопросы,
                    <a href="mailto:dvc@fondvera.ru?subject=Вопрос по акции Дети Вместо Цветов">пишите нам </a>
                    <br></br> dvc@fondvera.ru
                </div>
            </div>
        </footer>
    )
}

export default Footer