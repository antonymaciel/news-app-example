import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import logo from './logo.svg';
import './Home.css';
import { fetchNews } from '../../actions/news'

class Home extends React.Component {

    componentDidMount(){
        this.props.fetchNews('uruguay');
        console.log(this.props);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                        </ul>
                    </nav>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                    Edit <code>src/Home.js</code> and save to reload.
                    </p>
                    <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Learn React
                    </a>
                </header>
            </div>
        )
    }
}


const mapStateToProps = state => {
    console.log(state);
    return {
        news: state.news
    };
  };
  
  const mapDispatchToProps = dispatch => ({
    fetchNews: searchString => dispatch(fetchNews(searchString)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);