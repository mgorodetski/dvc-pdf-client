import React from "react";
import bottom from "./assets/bottom.png";


const styles = {
    container: {
        fontFamily: "PT Sans",
        maxHeight: "382px",
        opacity: 1,
        backgroundColor: "white",
    },

    pdfGramotaPrehead: {
        fontSize: "12px",
        color: "#231F20",
    },

    pdfGramotaHead: {
        fontFamily: "Pribambas",
        fontSize: "30px",
        color: "#26A9E0",
    },

    pdfGramotaKlazz: {
        fontFamily: "PT Sans",
        fontWeight: 700,
        fontSize: "19px",
        color: "#231F20",
    },

    pdfGramotaSubhead: {
        fontFamily: "PT Sans",
        fontWeight: 700,
        fontSize: "11px",
        color: "#231F20",
        lineHeight: "130%"
    },

    pdfGramotaContent: {
        fontFamily: "PT Sans",
        fontSize: "10px",
        color: "#231F20",
        lineHeight: "130%"
    },

    pomogaemFrame: {
        position: "relative",
        left: "346px",
        top: "-76px",
        width: "110px",
    },

    pomogaemBack: {
        width: "110px",
    },

    pdfGramotaPomogaem: {
        fontFamily: "Pribambas",
        fontSize: "12px",
        color: "#F9FDFF",
        transform: "rotate(-9.07deg)",
        maxWidth: "fit-content",
        position: "absolute",
        top: "12px",
        left: "0",
        right: "0",
        margin: "auto"
    },

    bg: {
        width: "540px",
    },

    bottom: {
        width: "480px",
        bottom: "0",
        marginLeft: "16px",
        marginTop: "-8px"
    },

    content: {
        marginTop: "-250px",
        width: "470px",
        marginLeft: "16px"
    }
};

const KlassPdfPreview = (props) => {
    const ageWord = ageToStr(props.years);
    

    function renderWithTimeOut(value) {
        const timer = setTimeout(() => {
            return value;
        }, 1000);
        clearTimeout(timer);
    }

    function ageToStr(age) {
        let txt = "";
        let count = age % 100;
        if (count >= 5 && count <= 20) {
            txt = "лет";
        } else {
            count = count % 10;
            if (count === 1) {
                txt = "год";
            } else if (count >= 2 && count <= 4) {
                txt = "года";
            } else {
                txt = "лет";
            }
        }
        return txt;
    }

    return (
        <div style={styles.container} >
            <img
                src="https://i.postimg.cc/90K6GKNb/headerblue.png"
                style={styles.bg}
                alt=""
            />

            <div style={styles.content}>
                <div style={styles.pomogaemFrame}>
                    <img src="https://i.postimg.cc/kX8JTvFG/pomogaem-Frame.png" style={styles.pomogaemBack} alt="" />
                    <div style={styles.pdfGramotaPomogaem}>
                        {props.years > 0
                            ? `Помогаем ${props.years} ${ageWord}!`
                            : "1 сентября"}
                    </div>
                </div>

                <div style={styles.pdfGramotaText}>
                    <div style={styles.pdfGramotaPrehead}>
                        Участникам благотворительной акции
                    </div>
                    <div style={styles.pdfGramotaHead}>"ДЕТИ ВМЕСТО ЦВЕТОВ - 2023"</div>
                    <div style={styles.pdfGramotaKlazz}>
                        {props.klass} класс, {props.school} школа,  г. {props.city}
                    </div>
                    <div style={styles.pdfGramotaSubhead}>
                        Спасибо, что вместе с Фондами «Вера» и «Дом с маяком» вы помогаете
                        неизлечимо больным детям жить, развиваться, мечтать и быть
                        счастливыми — насколько возможно.
                    </div>
                    <div style={styles.pdfGramotaContent}>
                        В 2022 году мы поддерживаем более 1060 детей. Они из разных уголков
                        России и с разными диагнозами, но никто не останется с болезнью один
                        на один. Благодаря вам у них появятся манёвренные электроколяски и
                        такие нужные медицинские расходники. Кто-то впервые выйдет из дома
                        на улицу, а кто-то наконец переедет из больницы домой или сможет
                        учиться сидя, а не лёжа.
                        <br />Спасибо вам всегда,
                    </div>

                </div>

            </div>
            <img src={bottom} style={styles.bottom} alt="" />

        </div>
    );
};

export default KlassPdfPreview;
