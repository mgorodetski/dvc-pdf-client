import React from 'react';


const Home = () => {

  return (
    <div style={
      {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '50px',
        fontSize: "65px",
        alignItems: 'center',
        height: "600px",
        width: "100%",
        backgroundColor: "var(--blue-2)",
        fontStyle: "italic",
      }}>
      {/* <a href="https://heroic-otter-9164ca.netlify.app/spasibo-uchitel">Spasibo Uchitel</a>
      <a href="https://heroic-otter-9164ca.netlify.app/spasibo-klass">Spasibo Klass</a> */}

      <a href="http://localhost:3000/spasibo-uchitel" style={{color: "tomato"}}>Спасибо учитель</a>
      <a href="http://localhost:3000/spasibo-klass" style={{color: "white"}}>Спасибо класс</a>

      {/* <BtnLinkHead /> */}
    </div>
  );
}

export default Home;
