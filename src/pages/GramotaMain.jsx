import React from 'react'
import FirstScreen from '../components/firstScreen'
import SecondScreen from '../components/secondScreen'
import ThirdScreen from '../components/thirdScreen';

import '../index.css'
import Footer from '../components/footer';


const GramotaMain = () => {
    return (
        <div className='container'>
            <FirstScreen />
            <SecondScreen />
            <ThirdScreen />
            <Footer />
        </div>
    )
}
export default GramotaMain
