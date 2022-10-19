import React from 'react'
import FirstScreen from './firstScreen/FirstScreen';
import SecondScreen from './secondScreen/SecondScreen';
import ThirdScreen from './thirdScreen/ThirdScreen';
import '../App.css'
import Footer from './footer/Footer';

const TeacherThankMain = () => {
    return (
        <div className='container'>
            <FirstScreen />
            <SecondScreen />
            <ThirdScreen />
            <Footer />

        </div>
    )
}

export default TeacherThankMain
