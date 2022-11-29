import React from 'react'
import FirstScreen from './firstScreen';
import SecondScreen from './secondScreen';
import ThirdScreen from './thirdScreen';
import '../App.css'
import Footer from './footer';

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
