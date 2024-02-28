/* eslint-disable */ 
import './App.css';
import {useState} from "react";

function App() {
    const [title,setTitle] = useState(['제목1','제목2','제목3']) ;
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

        /* state 변경함수의 특징 */
        /* 갈아치우는 기준    ::  기존 state값과 신규 state 값이 같으면 변경해주지 않음 */
        /* array/object 특징 */

        // let arr = [1,2,3];
        // 1,2,3이라는 값을 가리키는 화살표에  arr라는 이름을 붙이는 것.
        // 1,2,3의 위치를 가리키는 주소값을 arr에 저장하는 것.
        // 1,2.3은 RAM이라는 미지의 공간에 저장되어 있음

        /*title[0] = '여자 코트 추천';
        setTitle(title);*/
        //↑ 이게 작동하지 않는 이유는  주소값이 변한 것이 아니기 때문에 state가 변경되었다고 보지 않기 때문.  (reference data type)


        //[...] :: spread operator (괄호가 벗겨진다)
        // ...[1,2,3]      =>   1,2,3
        //주로 array나 object 자료형을 복사할 때 많이 사용.
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
