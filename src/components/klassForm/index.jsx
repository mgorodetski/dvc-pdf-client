import React, { useState } from 'react'
import style from '../secondScreen/secondScreen.module.css';
import formStyle from './klassForm.module.css';
import axios from 'axios';

const KlassForm = () => {
    const [city, setCity] = useState('');
    const [klass, setKlass] = useState('');
    const [school, setSchool] = useState('');
    const [years, setYears] = useState(0);

    const handleChangeCity = event => setCity(event.target.value);
    const handleChangeKlass = event => setKlass(event.target.value);
    const handleChangeSchool = event => setSchool(event.target.value);
    const handleChangeYears = event => setYears(event.target.value);

    const pdfHandler = () => {
        // const devUrl = 'http://localhost:3000/create-klass-pdf';
        const devUrl = 'https://incredible-pavlova-0dc5fd.netlify.app/create-klass-pdf';
        // const devUrl = +process.env.REACT_APP_DEV ? 'http://localhost:8080/create-klass-pdf' : 'https://incredible-pavlova-0dc5fd.netlify.app/create-klass-pdf';
        axios.post(devUrl, { city, klass, school, years },
            {
                responseType: 'arraybuffer',
                headers: {
                    'Accept': 'application/pdf'
                }
            })
            .then((response) => {
                const blob = new Blob([response.data], { type: 'application/pdf' })
                const link = document.createElement('a')
                link.href = window.URL.createObjectURL(blob)
                link.download = `SpasiboKlass_DVC2022.pdf`
                link.click();
                setCity('');
                setYears(0);
                setSchool('');
                setKlass('');
            })
            .catch();
    }

    return (
        <div className={`${formStyle.thankYouForm}`}>
            <div className={`${formStyle.gramotaTemplate}`} />
            <div className={`${formStyle.thankKlass}`}>
                <h3 className={`${formStyle.thankTitle}`}>В БЛАГОДАРНОСТЬ КЛАССУ</h3>
                <p className={`${formStyle.fieldsText}`}>
                    Пожалуйста, заполните эти поля, чтобы скачать грамоту для вашего класса. В первом поле укажите сколько лет вы уже участвуете в акции.
                </p>
                <form className={`${formStyle.formKlass}`} method="post">
                    <div className={`${formStyle.formGroup}`}>
                        <label htmlFor="years" style={{ textAlign: 'left' }}>Участвуем в акции:</label>
                        <input
                            name="years"
                            type="number"
                            id="years"
                            min="0"
                            max="9"
                            onChange={handleChangeYears}
                            className={`${formStyle.formControl}`}
                            value={years}
                        ></input>
                    </div>

                    <div className={`${formStyle.formGroup}`}>
                        <label style={{ textAlign: 'left' }}>Школа: </label>
                        <input maxLength="25" onChange={handleChangeSchool} value={school} name="school" type="text" placeholder="Школа" className={`${formStyle.formControl}`} />
                    </div>
                    <div className={`${formStyle.formGroup}`}>
                        <label style={{ textAlign: 'left' }}>Класс: </label>
                        <input onChange={handleChangeKlass} name="klass" maxLength="5" value={klass} type="text" placeholder="Класс" className={`${formStyle.formControl}`} />
                    </div>
                    <div className={`${formStyle.formGroup}`}>
                        <label style={{ textAlign: 'left' }}>Город: </label>
                        <input onChange={handleChangeCity} value={city} maxLength="25" name="city" type="text" placeholder="Город" className={`${formStyle.formControl}`} />
                    </div>

                    <button type="button" onClick={pdfHandler} className={`${style.btnPrimary}`}><span>↓</span><span>сохранить в pdf</span></button>

                </form>

            </div>
        </div>


    )
}

export default KlassForm
