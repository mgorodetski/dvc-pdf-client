import React from 'react';
import KlassThird from './KlassThird';
import TeacherThird from './TeacherThird';

const ThirdScreen = () => {
    const loc = window.location.toString();

    return (
        <>
                    {loc.includes('/spasibo-klass') ? <KlassThird/> : <TeacherThird/>}
        </>
    )
}

export default ThirdScreen
