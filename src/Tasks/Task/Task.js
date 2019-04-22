import React, { Component } from 'react';

class Task extends Component {
    state = {
        isEditable: false
    }

    changeKeyHandler = (e) => {
        if ( e.key === 'Enter' ) {
            this.setState({
                isEditable: false
            });
        }
    }

    render() {
        return(
            <li className="list-group-item">
                <div className="row crow">
                    <div className="col-sm-6 lcol">
                    { this.state.isEditable ? 
                        <input type="text" 
                        onChange={e => this.props.updateHandler(e.target.value, this.props.id)} 
                        onKeyPress={this.changeKeyHandler}
                        placeholder="Enter Todo" 
                        value={this.props.title} />
                        : <p>{this.props.id}<span>{this.props.title}</span><span>{this.props.status}</span></p>
                    }
                    </div>
                    <div className="col-sm-6">
                    <div className="action">
                        <i className="fa fa-edit" onClick={() => this.setState({ isEditable: true })}></i>
                        <i className="fa fa-times" onClick={ () => this.props.deleteHandler(this.props.id) }></i>
                    </div>
                    </div>
                </div>
            </li>
        )
    }
}
export default Task;