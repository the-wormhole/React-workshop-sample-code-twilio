import {useEffect, useState,useRef} from 'react'

// function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     console.log("increment")
//     setCount(count + 1);
//   };

//   useEffect(()=>{
//     alert(`New Count value is ${count}`);
//   },[count])

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );


// }

function Counter() {     

    const textTitle = useRef();
    const hexColor = useRef();
    
    const submit = (e) =>{
      e.preventDefault();
      console.log(textTitle);
      alert(`${textTitle.current.value},${hexColor.current.value}`)
      textTitle.current.value = "";
      hexColor.current.value = "#000000";
    }
  
    return (
      <form onSubmit={submit}>
  
        <input 
        type="text" 
        placeholder="Select color..."
        ref={textTitle}
        />
        <input type="color" ref={hexColor}/>
        <input type="submit" placeholder='Add'/>
      </form>
    );
  }
  

export default Counter;