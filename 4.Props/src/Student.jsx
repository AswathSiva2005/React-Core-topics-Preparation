export default function Student (props,age=21){
    return(
        <>
            <h1>Name : {props.name}</h1>
            <h3>Age : {props.age}</h3>
            <h5>Dept : {props.dept}</h5>

            <p>Student : {props.isStudent ? "Yes" : "No" }</p>
        </>
    )
}