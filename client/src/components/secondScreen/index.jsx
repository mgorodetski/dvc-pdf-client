import React from 'react';
import flowerLeft from '../../img/flower_left.svg';
import flowerRight from '../../img/flower_right.svg';
import KlassForm from '../klassForm';
import TeacherForm from '../teacherForm';
import style from './secondScreen.module.css';
import gramotaMin from '../../img/pdfGramota/gramota_min.png';

const TeacherSecondScreen = () => {
    const loc = window.location.toString();
    const klass = "/spasibo-klass";
    const teacher = "/spasibo-uchitel";

    return (
        <div className={`${style.secondScreen}`}>
            <div className={`${style.thankyouBlock}`}>
                <div className={`${style.ScndScrPrehead}`}>
                    <div className={`${style.hashtag}`}>
                        <img src={flowerLeft} alt="" />
                        <span className={`${style.hashtagText}`}>
                            <a  target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/explore/tags/%D0%B2%D0%B0%D1%88%D0%B0%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%D0%BD%D0%B5%D0%B7%D0%B0%D0%B2%D1%8F%D0%BD%D0%B5%D1%82/">#вашапомощьнезавянет</a>
                        </span>
                        <img src={flowerRight} alt="" />
                    </div>
                    <span className={`${style.thankyouText}`}>Спасибо за регистрацию на благотворительную акцию “Дети вместо цветов”. Благодаря вам сотни тяжелобольных детей получат помощь.</span>
                </div>
                <div className={`${style.backGrndLayer} + ${loc.includes(teacher) ? style.formContainerTeacher : ''}`}>
                    <div className={`${style.formContainer}`}>
                        {loc.includes(klass) ? <KlassForm /> : <TeacherForm />}
                    </div>
                </div>
            </div>
            <img src={gramotaMin} className={`${style.gramotaMin}`} alt=""></img>

        </div>
    )
}


export default TeacherSecondScreen
