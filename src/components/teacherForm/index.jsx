import formStyle from '../teacherForm/teacherThankForm.module.css';
import React, { useState } from 'react';
import axios from 'axios';

const TeacherForm = () => {
    const [name, setName] = useState('');
    const handleChangeName = event => setName(event.target.value);
    const devUrl = +process.env.REACT_APP_DEV ? 'http://localhost:8080/create-teacher-pdf' : 'https://incredible-pavlova-0dc5fd.netlify.app/create-teacher-pdf';
    const pdfHandler = () => {
        axios.post(devUrl, { name },
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
                link.download = `SpasiboUchitel_DVC2022.pdf`
                link.click();
            })
        setName('');
    }

    return (
        <>

            <div className={`${formStyle.teacherGramotaTemplate}`} />
            <div className={`${formStyle.thankTeacher}`}>
                <h3 className={`${formStyle.teacherThankTitle}`}>в благодарность учителю</h3>
                <p className={`${formStyle.fieldsText}`}>
                    Пожалуйста, заполните эти поля, чтобы скачать именную благодарность для вашего учителя.
                </p>
                <div className={`${formStyle.teacherForm}`}>
                    <fieldset>

                        <div className={`${formStyle.teacherFormGroup}`}>
                            <label style={{ textAlign: 'left' }}>Имя и отчество: </label>
                            <input className="" type="text" value={name} placeholder="Введите имя и отчество" onChange={handleChangeName} />
                        </div>

                    </fieldset>
                    <div className="d-flex justify-content-center p-3">
                        <button className={`${formStyle.btnPrimary}`} onClick={pdfHandler}> <span>↓</span><span>сохранить в pdf</span></button>
                    </div>
                </div>
                <div className={`${formStyle.teacherImg}`} />
            </div>
        </>
    )
}

export default TeacherForm
