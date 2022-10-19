import React from 'react';
import flowerLeft from '../../img/flower_left.svg';
import flowerRight from '../../img/flower_right.svg';
import KlassForm from '../klassForm/KlassForm';
import TeacherForm from '../teacherForm/TeacherForm';
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
                            #вашапомощьнезавянет
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
