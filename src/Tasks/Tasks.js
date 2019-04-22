import React, { Component } from 'react';
import Task from './Task/Task';

class Tasks extends Component {
    render() {
        return(
            <div className="mt-10">
                { this.props.tasks.map(task => {
                    return(
                        <Task key={task.id} 
                                id={task.id} 
                                title={task.title} 
                                state={task.status}
                                deleteHandler={this.props.deleteHandler} />
                    )
                }) }
            </div>
        )
    }
}
export default Tasks;