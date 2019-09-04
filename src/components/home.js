import React from 'react';
import '../styles/home.scss';
import New from './new';

class Home extends React.Component {

    renderNews = () => {
        const news= [];
        console.log(this.props.news);
        this.props.news.forEach((item, index) => {
            news.push(
                <New new={item} key={index} />
            );
        });
        return news;
    }


    render() {
        return (
            <div className="App">
                {this.renderNews()}
            </div>
        )
    }
}
  
  export default Home;