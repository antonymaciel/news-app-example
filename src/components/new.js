import React from 'react';
import '../styles/new.scss';

class New extends React.Component {
    render() {
        return (
            <div className="newContainer">
                New : {this.props.new.title}
                <img className="image" src={this.props.new.urlToImage} alt="image"/>
            </div>
        )
    }
}
  
  export default New;