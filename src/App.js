/* eslint-disable */
import './App.css';
import {useState} from "react";
import React from 'react';

function Modal(props){
    /* props 전송하기 2단계*/
    return(
        <div className="modal">
            <h4>{props.titles[props.title]}</h4>
            <p>날짜</p>
            <p>내용</p>
            <button onClick={props.handleTitle}>제목 수정</button>
        </div>
    )
}


/* class를 이용한 react 문법 */
class Modal2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = { //state 생성
            name : 'kim',
            age : 20
        }
    }
    render(){
        return(
            <div>안녕&nbsp;{this.state.name}!
                {/*{this.props}  부모로 부터 받은 props*/}
                <button onClick={()=>{
                    this.setState({name : 'Seo'});
                    // 기존 state를 갈아치워주는 건 아니고! 차이점(변경사항)만 분석해서 수정해줌
                }}>이름 변경</button>

            </div>
        )
    }
}

function App() {
    const [titles,setTitles] = useState(['youth','행복을 빌어줘','21세기의 어떤 날']) ;
    const [like,setLike] = useState([0,0,0]);

    const [modal,setModal] = useState(false);

    const [title,setTitle] = useState(0);

    const [input, setInput] = useState('');

    const [launchDate , setLaunchDate]=useState([{month : 3,date:4},{month : 2,date:16},{month : 1,date:13}]);

    /* props 전송하기 (부모컴포넌트 -> 자식컴포넌트) */
    /*
    props 라는 문법으로 부모 컴포넌트가 갖고있는 state를 자식 컴포넌트에게 넘겨 줄 수 있다.
    (자식 -> 부모, 형제간은 불가능)

    props 전송하기 단계
    1. <자식 컴포넌트 작명 = {state이름}/>         ( 물론 state말고 "문자열", 함수 [by함수명] 등 다양하게  전송 가능)
    2. 자식 컴포너트 function 부분에  파라미터로  (일반적으로)props , 사용은 props.작명
    */
    function handleLike(index){
        const likecopy = [...like];
        likecopy[index] +=1;
        setLike(likecopy)
    }

    function changeTitles(){
        const arr = [...titles]
        arr[0] = "misfit"
        setTitles(arr);
    }

    function sortList(){
        const arr = [...(titles.sort())];
        setTitles(arr)
    }

    const handleModal = (index)=>{
        if(!modal){
            setModal(!modal)
        }

        setTitle(index)
    }

    return (
        <div className="App">
            <div className="black-nav">
                <h4>React blog🥰</h4>
            </div>

            <Modal2/>

            {
                titles.map(function(val,i){
                    return(
                        <div className="list" key={i}>
                            <h4 onClick={()=>{handleModal(i)}}>{val} <span onClick={(e)=>{e.stopPropagation();handleLike(i);}}>👍🏻</span> {like[i]}</h4>
                            {/* {val} 대신에   map의 콜백함수의 두번재파라미터를 활용해서 {titles[i]}  로 작성해도 됨*/}
                            <p>{JSON.stringify(launchDate[i].month)}월 {JSON.stringify(launchDate[i].date)}일 발행</p>
                            <button onClick={()=>{
                                //const titlesUpdate = [...titles].splice(i,1);
                                //↑ 이렇게 쓰면  titlesUpdate에 splice 범위에 들어가는 애들이 남는다.
                                const titlesUpdate = [...titles];
                                titlesUpdate.splice(i,1);
                                setTitles(titlesUpdate);

                                const likeUpdate =[...like];
                                likeUpdate.splice(i,1);
                                setLike(likeUpdate);

                                const dateListUpdate = [...launchDate];
                                dateListUpdate.splice(i,1);
                                setLaunchDate(dateListUpdate);


                               /* const titlesUpdate = titles.filter((element,index)=>{
                                    return index !== i;
                                })
                                const likeUpdate = like.filter((element,index)=>{
                                    return index !==i;
                                })
                                setTitles(titlesUpdate)
                                setLike(likeUpdate);*/

                            }}>삭제</button>
                        </div>
                    )
                })

            }

            <div>
                <input type="text" onChange={(e) => {setInput(e.target.value);console.log(input)}}/>
                <button onClick={()=>{
                    if(input!==''){
                        const titlesUpdate =  [input,...titles]
                        const likeUpdate = [0,...like]
                        setTitles(titlesUpdate);
                        setLike(likeUpdate)

                        const date = new Date();
                        const currentDate = [{month : date.getMonth()+1, date : date.getDate()},...launchDate];
                        setLaunchDate(currentDate);


                    }else{
                        alert('내용을 입력해주세요.')
                    }
                }}>등록</button>
            </div>
            {/*
                👉🏻 e.stopPropagation(); 이벤트 버블링 방지
                👉🏻 state변경 함수는 처리하는데 시간이 좀 걸려서,   처음 setInput()이 완료되기 전에 console이 출력되어 빈칸이 나옴

            */}
            <button onClick={changeTitles}>변경</button>
            <button onClick={sortList}>정렬</button>

            {
                /* props 전송하기 1단계.*/
                modal ? <Modal titles={titles} handleTitle={changeTitles} title={title}/> : null
            }
        </div>
    );
}

export default App;
