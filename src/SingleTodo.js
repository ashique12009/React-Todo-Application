import React, { Component } from 'react';

class SingleTodo extends Component {

    state = {
        isEditable: false
    }

    render() {
        return(
            <li className="list-group-item">
                <div className="row crow">
                    <div className="col-sm-6">
                    { this.state.isEditable ? 
                        <input type="text" placeholder="Enter Todo" value={this.props.todo} />
                        : <p>{this.props.todo}</p> }
                    </div>
                    <div className="col-sm-6">
                    <div className="action">
                        <i className="fa fa-edit" onClick={ () => this.setState({ isEditable: true })}></i>
                        <i className="fa fa-times"></i>
                    </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default SingleTodo;