/* eslint-disable */ 
import './App.css';
import {useState} from "react";

function App() {
    const [title,setTitle] = useState(['제목1','제목2','제목3']) ;
    const [like,setLike] = useState(0);

    /* onClick = {} , 중괄호 안에는 함수를 집어넣어야 함*/
    /* onClick = {함수이름}
       onClick = ( function(){...})
       onClick = (()=>{...})
    */

    /* state 변경하는 법 */
    function myfunc(){
        setLike(like+1);
    }


    /* 숙제 : 첫번재 게시물의 제목을 바꿔보기 */
    function changeTitle(){
        const arr = [...title]
        arr[0] = "여자 코트 추천"
        setTitle(arr)
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
        </div>
    );
}

export default App;
