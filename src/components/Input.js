import {React, useState} from 'react';


const Input = () => {

   const [question, setQuestion] = useState("");
   const onChangeHandler = (event)=>{
    setQuestion(event.target.value);

   }

   const submitHandler = (event)=>{
    console.log(question);

    var res = question.replace(/\D/g,'');
console.log((res)); 
console.log(typeof(res));
var digits = (""+res).split("");
console.log(digits);
const [a,b] = digits;
console.log(typeof(a))


    event.preventDefault();
   }


    return <div>
<form onSubmit={submitHandler}>
<input type="text" value={question} onChange={onChangeHandler}/>
<input type="submit" value="submit"/>
</form>


    </div>;
}



export default Input;