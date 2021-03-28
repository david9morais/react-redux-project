import React, { Component } from 'react'

class User extends Component {
    render() {
        return (
            <div>                
                <div>
                    Name: {this.props.name}
                </div>
                <div>
                    Email: {this.props.email}
                </div>
                <div>
                    Photo: <img src={this.props.photo} />
                </div>
            </div>
        )
    }
}

export default User