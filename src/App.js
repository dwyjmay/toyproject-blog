/* eslint-disable */ 
import './App.css';
import {useState} from "react";

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
    const [like,setLike] = useState([0,0,0]);

    const [modal,setModal] = useState(false);

    /* map */
    // array의 자료 개수만큼  함수안의 코드를 실행해준다.
    // 함수의 첫 번째 파라미터는 array안에 있던 자료 각각.
    // return을 하면 배열을 담아줌. ( array개수만큼)

    //함수의 두 번째 파라미터는  반복문이 돌 때마다 0부터 1씩 증가하는 정수

    // 반복문으로 html을 생성하면 각각에 key={고유숫자} 추가해주어야한다.
/*

    [1,2,3].map(function(a){
        console.log(a);
        return '12321'
    })
*/

    function myfunc(){
        setLike(like+1);
    }

    function changeTitle(){
        const arr = [...title]
        arr[0] = "여자 코트 추천"
        setTitle(arr);
    }

    function sortList(){
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

            {/* 중괄호 안에서는 if 나 for 이런거 쓸수 없음  if는 삼항연산자로, for 는 map으로 대체해보자 */}
            {
               /* [1,2,3].map(function(index){
                    return( <div>안녕</div>

                    )
                })*/

                /*<div>안녕</div><div>안녕</div><div>안녕</div> 세개가 남는것*/
            }

            {
                title.map(function(val,i){
                    return(
                        <div className="list" key={i}>
                            <h4 onClick={handleModal}>{val} <span onClick={myfunc}>👍🏻</span> {like[i]}</h4>
                            {/* {val} 대신에   map의 콜백함수의 두번재파라미터를 활용해서 {title[i]}  로 작성해도 됨*/}
                            <p>2월 17일 발행</p>
                        </div>
                    )
                })

            }

        {/*    <div className="list">
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
            </div>*/}
            <button onClick={changeTitle}>변경</button>
            <button onClick={sortList}>정렬</button>

            {
                modal ? <Modal/> : null
            }
        </div>
    );
}

export default App;
