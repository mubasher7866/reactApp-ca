//component to view all dogs

import React from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

class Students extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            students : [],
            isLoaded: false
        }
     
    }

    componentDidMount(){
        axios.get('https://localhost:3001/student')
        .then(function (response) {
            // handle success
            console.log(response.data)
            this.setState({students: response.data,
            isLoaded : true })
          })
          .catch(function (error) {
            // handle error
           // console.log(error);
          })

    }

    render(){
        if(!this.state.isLoaded){
            return(
                <div>
                    Loading...
                </div>
            )
        } else {
        return(
            <div>
                <p>
                    This is the Students component. 
                    This component should contain a list of dogs using a table tag or
                    perhaps components.
                </p>
                <h4>Here is an example of each</h4>
                <h5>#1 Table</h5>
                <table>
                    <tr>
                        
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Email</th>
                    </tr>
                    {/* this part can and should be generated using a for loop */}
                    <tr>
                        <td>Mark</td>
                        <td>21</td>
                        <td>BSc in computing</td>
                        <td>mark123@gmail.com</td>
                        
                        {/* link to view a single dog details by ID  */}
                        <td><Link to='/viewstudent?id=12345'>View</Link></td>
                        {/* link to view and edit the dog details by ID */}
                        <td><Link to='/editstudent?id=12345'>Edit</Link></td>
                        <td>
                            <button>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Mark</td>
                        <td>21</td>
                        <td>BSc in computing</td>
                        <td>mark123@gmail.com</td>
                        
                         {/* link to view a single dog details by ID  */}
                         <td><Link to='/viewstudent/'>View</Link></td>
                        {/* link to view and edit the dog details by ID */}
                        <td><Link to='/editStudent/'>Edit</Link></td>
                        <td>
                            <button>Delete</button>
                        </td>
                    </tr>
                    <tr>
                    <td>Mark</td>
                        <td>21</td>
                        <td>BSc in computing</td>
                        <td>mark123@gmail.com</td>
                        
                        {/* link to view a single dog details by ID  */}
                        <td><Link to='/viewstudent?id=12345'>View</Link></td>
                        {/* link to view and edit the dog details by ID */}
                        <td><Link to='/editstudent?id=12345'>Edit</Link></td>
                        <td>
                            <button>Delete</button>
                        </td>
                    </tr>
                </table>
                {/* insert html code here */}
                <h5>#2  Components</h5>
                {/* insert JSX code here */}
            </div>
        )
    }
    }
}
    

export default Students;