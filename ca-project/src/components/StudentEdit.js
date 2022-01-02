import React from 'react';

class StudentEdit extends React.Component{
    constructor(props){
        super(props);
        let id = window.location.href.split('=')[1]
        this.state = {id
        }
    }
    render(){
        return(
            <div>This is the Student Edit component</div>
        )
    }
}

export default StudentEdit;