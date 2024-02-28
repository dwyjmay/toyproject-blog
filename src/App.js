import './App.css';
import {useState} from "react";

function App() {
    const [title,setTitle] = useState(['제목1','제목2','제목3']) ;

    return (
        <div className="App">
            <div className="black-nav">
                <h4>React blog🥰</h4>
            </div>
            <div className="list">
                <h4>{title[0]}</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{title[1]}</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{title[2]}</h4>
                <p>2월 17일 발행</p>
            </div>
        </div>
    );
}

export default App;
