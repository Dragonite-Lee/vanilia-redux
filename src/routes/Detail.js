import React from "react"
import {useParams} from 'react-router-dom';
import { connect } from "react-redux";

function Detail({ toDos }) {

    const id = useParams().id;
    const toDo = toDos.find((toDo) => toDo.id ===parseInt(id))
    return (
        <>
            <h1>{toDo.text}</h1>
            <h3>created at {id}</h3>
        </>
    )
}
function mapStateToProps(state) {
    console.log(state)
    return {
        toDos: state,
    };
}



export default connect(mapStateToProps)(Detail);