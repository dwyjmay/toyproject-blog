/* eslint-disable */ 
import './App.css';
import {useState} from "react";


/*
1. function Name(){return ()}만들기  함수이름은 대문자로 시작.
2. return()에 html 담기
3. <함수명></함수명>'

컴포넌트 만들기 좋은 상황
반복적 html 축약 시
큰 페이지
자주 변경되는 UI

단점
state  가져다 쓸 때 문제가 생긴다
function  App() 안에서만 정의되어 있기 때문..

컴포넌트 만드는 문법 1
function Name(){
return ()
}
컴포넌트 만드는 문법 2
const Modal =  ()=>{
  return()
}
*/

/* 동적인 UI만드는 STEP*/
/*
STEP1. html css 로 미리 디자인 완성
STEP2. UI의 현재 상태를 state로 저장
STEP3. state에 따라 UI가 어떻게 보일지 작성
*/

function Modal(){
    return(
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>내용</p>
        </div>
    )
}

function App() {
    const [title,setTitle] = useState(['youth','행복을 빌어줘','21세기의 어떤 날']) ;
    const [like,setLike] = useState(0);

    const [modal,setModal] = useState(false); //STEP2

    function myfunc(){
        setLike(like+1);
    }

    function changeTitle(){
        const arr = [...title]
        arr[0] = "여자 코트 추천" //원본이 아니라 copy본을
        setTitle(arr);
    }

    function sortList(){
        /*const arr = [...title];
        arr.sort();
        setTitle(arr)*/
        const arr = [...(title.sort())];
        setTitle(arr)
    }

    const handleModal = ()=>{
        setModal(!modal)
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
                <h4 onClick={handleModal}>{title[2]}</h4>
                <p>2월 17일 발행</p>
            </div>
            <button onClick={changeTitle}>변경</button>
            <button onClick={sortList}>정렬</button>

            {/*STEP3*/}
            {
                modal ? <Modal/> : null
            }
        </div>
    );
}

export default App;
