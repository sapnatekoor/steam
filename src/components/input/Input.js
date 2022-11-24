import {React, useState,useEffect, useRef} from 'react';
import "./Input.scss"
import RightPannel from './rightPannel/RightPannel';

const Input = () => {

   const [question, setQuestion] = useState("");
   const [showTextField, setShowTextField] = useState(false);
   const [showSideBar, setShowSideBar] = useState(false);

   const wrapperRef = useRef(null);
 useOutsideAlerter (wrapperRef);
   const onChangeHandler = (event)=>{
    setQuestion(event.target.value);

   }

//    const submitHandler = (event)=>{
//     console.log(question);

//     var res = question.replace(/\D/g,'');
// console.log((res)); 
// console.log(typeof(res));
// var digits = (""+res).split("");
// console.log(digits);
// const [a,b] = digits;
// console.log(parseInt(a))


//     // event.preventDefault();
//    }

   const showTextFieldHandler = () =>{
    setShowTextField(true)
   }

   const sideBarHandler = () =>{
    setShowSideBar(!showSideBar)
   }
   function useOutsideAlerter(ref) {
    useEffect(() => {

      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
        const check = ref.current.value;
                console.log(check)

        var res = check.replace(/\D/g,'');

        console.log((res)); 
        console.log(typeof(res));
        var digits = (""+res).split("");
        console.log(digits);
        const [a,b] = digits;
        console.log(parseInt(a))
        // submitHandler()
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

    return <div className='main-container'>

        <h1>Questions 5:</h1>
        <p>Create a question</p>

        <div className='grid-container' onClick={showTextFieldHandler}>
{showTextField && 
<>
<textarea ref={wrapperRef} type="text" id="textArea" value={question} onChange={onChangeHandler}/>
{/* <input type="submit" value="submit"/> */}
</>
}
       
        </div>

        <div className='button-container'>
           <div className='button-container-primary'>
<button onClick={sideBarHandler}>Randomize</button>
{showSideBar && <RightPannel showSideBar={showSideBar}/>
}
           </div>
        </div>



    </div>;
}



export default Input;