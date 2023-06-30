import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const listImg = ["logo_dvfu.png", "logo_imct.png"]
/*Передаем в качестве пропса список с рисунками*/
function Head(props) {

    const logoImages =listImg.map((img, index) =>
        <img key={index} src={img} />
    );
    return(
        <div className="head">
            {logoImages}
        </div>
    )
}

function Tagline() {
    return(
        <h1>
            Хватит уже игр, <br/> пора <br/> разрабатывать и зарабатывать
        </h1>
    )
}

function onClick(props){
    window.location.href = "#chapter-1";
}
function Button(props) {

    return (
        <input className="button" type="button" value={props.val} onClick={onClick}/>
    )
}



function Professions (props) {
    const listProf = props.list.map((item, index) =>
        <ProfItem key={index} prof={item.prof} discr={item.discr} />
    );
    return (
        <div className="prof" id={props.page}>
            <h2>{props.title} </h2>
            <ul>
                {listProf}
            </ul>
        </div>
    )
}

function ProfItem(props) {

    const [isOpen, setOpenClose] = React.useState(false);
    const press = () => {
        setOpenClose(!isOpen);
    }
    return (
        <li onClick={press}>
            <span className="left">{props.prof}</span>
            <span className="right">{isOpen ? "×" : "+"}</span>
            {isOpen &&
                <p> {props.discr}</p>
            }
        </li>
    )
}


function Content() {
    const [numOfPage, updNumOfPage] = React.useState(0);
    function handleButtonClick(newNum) {
        updNumOfPage(newNum);
    }
        return (
            <>
                <Head listImg={listImg}/>
                <Tagline/>
                <Button val={"Хочу учиться!"} href={"#chapter_2"}/>
                <Professions title="Обучаем на:" list={listProf} page={'chapter-1'}/>
                <Professions title="На RUSSKY DIGITAL доступны направления:" list={listProfRD} page={'chapter_2'} />
            </>
        )
}
root.render(<Content />)


const listProf= [
    {prof: "Web-разработчиков",
        discr: `Создают сложные и очень сложные сайты. Продумывают, чтобы
пользователям было быстро и удобно.`},
    {prof: "Гейм-девелоперов",
        discr: `Создают видеоигры. Погружают всех нас в новые миры.`},
    {prof: "AI/ML-cпециалистов",
        discr: `Используют в деле искусственный интеллект и машинное
обучение. Фактами и прогнозами делает бизнесу хорошо.`},
    {prof: "Аналитиков данных",
        discr: `С помощью чисел решают, куда двигаться компаниям. Помогают
бизнесу получать еще больше денег.`},
    {prof: "Мобильных разработчиков",
        discr: `Создают мобильные приложения, которые найдут тебя везде.
Умещают на маленьких экранах максимальный функционал.`}
]

const listProfRD = [
    {prof : "Программная инженерия",
        discr: "Отучившись на этой программе, ты будешь:\n" +
            "- знать алгоритмические языки и базовые структуры данных, владеть соответствующими им шаблонами проектирования;\n" +
            "- владеть различными технологиями программирования;\n" +
            "- уметь изменять внутреннюю структуру программы;\n" +
            "- уметь разрабатывать и анализировать метрики качества программ"},
    {prof : "Искусственный интеллект и анализ данных",
        discr: "Новая образовательная программа запускается с 2023 года совместно\n" +
            "с факультетом вычислительной математики и кибернетики МГУ имени\n" +
            "М. В. Ломоносова."},
    {prof : "Аналитика цифрового следа",
        discr: "Программа ориентирована на подготовку специалистов к новому, перспективному направлению профессиональной деятельности — моделированию, сбору и анализу данных цифрового следа."},


]


reportWebVitals();
