import React from 'react';
import '../styles/new.scss';

class New extends React.Component {
    render() {
        return (
            <div className="newContainer">
                <img className="image" src={this.props.new.urlToImage} alt="image"/>
                {this.props.new.title}
            </div>
        )
    }
}
  
  export default New;