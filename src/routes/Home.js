import React,{useState} from "react";
import {connect} from "react-redux";
import {actionCreators} from "../store"
import ToDo from "../component/ToDo";

function Home({toDos,addToDo})
{    

    const [text,setText] = useState("");    
    function onChange(e) {setText(e.target.value);}    
    function onSubmit(e) {
        e.preventDefault();
        addToDo(text);
        setText("");       
    }
    
    return (
    <>
    <h1>To Do</h1>
    <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}></input>
        <button>Add</button>
    </form>
    <ul>
        {
            toDos.map(toDo=>
            (
                <ToDo{...toDo} key={toDo.id}/>
            ))
        }
    </ul>
    </>);

}

function mapStateToProps(state) {return {toDos:state};}
function mapDisPatchToProps(dispatch){
    return {
        addToDo: text=>dispatch(actionCreators.addTodo(text))
    };
}
export default connect(mapStateToProps,mapDisPatchToProps)(Home);

