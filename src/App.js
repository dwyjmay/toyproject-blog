/* eslint-disable */ 
import './App.css';
import {useState} from "react";

function App() {
    const [title,setTitle] = useState(['youth','행복을 빌어줘','21세기의 어떤 날']) ;
    const [like,setLike] = useState(0);

    function myfunc(){
        setLike(like+1);
    }

    /* 숙제 : 첫번재 게시물의 제목을 바꿔보기 */
    /* array나 object 등을 다룰 때, 원본은 보존하는 게 좋다..! */
    function changeTitle(){
        const arr = [...title]
        arr[0] = "여자 코트 추천" //원본이 아니라 copy본을
        setTitle(arr);
    }

    function sortList(){
        const arr = [...title];
        const sortedArr = arr.sort();
        setTitle(sortedArr)
    }

    return (
        <div className="App">
            <div className="black-nav">
                <h4>React blog🥰</h4>
            </div>
            <div className="list">
                <h4>{title[0]} <span onClick={myfunc}>👍🏻</span> {like}</h4>
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
            <button onClick={changeTitle}>변경</button>
            <button onClick={sortList}>정렬</button>
        </div>
    );
}

export default App;
