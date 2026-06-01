// PROPS = read-only properties that are shared between components
//         A parent component can send datas to child components
//         <Component key=value />


import Student from "./Student.jsx"

export default function App (){
  return(
    <>
      <Student rollNo = {10} name="Aswath" dept="IT" age={21} isStudent={false}/>
    </>
  )
}