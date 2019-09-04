import React from 'react';
import { connect } from 'react-redux';
import Home from '../components/home'
import { fetchNews } from '../actions/news'
import Header from '../components/header';
import '../styles/home.scss';

class HomeContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: 0
        };
        this.setMyscroll = element => {
            console.log(element);
            this.myscroll = element;
        };
        this.fetchNextPage.bind(this);
    }

    fetchNextPage = () => {
        const { page } = this.state;
        const nextPage = page + 1;
        this.props.fetchNews('uruguay', nextPage);
        this.setState({page: nextPage});
    }


    componentDidMount() {
        if (this.state.page === 0) {
            this.fetchNextPage();
        }
        // Detect when scrolled to bottom.
        console.log('ref', this.myscroll);
        this.myscroll.addEventListener("scroll", () => {
            console.log('detected!');
            const detectScroll = this.myscroll.scrollTop + this.myscroll.clientHeight >= this.myscroll.scrollHeight;
            if(detectScroll) {
                this.fetchNextPage();
            } 
        });
                
    }

    render() {
        const { newsState } = this.props;
        return (
            <div >
                
                <div ref={this.setMyscroll} className="listContainer">
                    <Header /> 
                    <Home news={this.props.newsState.news} />
                </div>
                {newsState.loading && <p>TODO LOADING...</p>}
                {newsState.error && <p>TODO ERROR...</p>}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        newsState: state.newsState
    };
  };
  
  const mapDispatchToProps = dispatch => ({
    fetchNews: (searchString, page) => dispatch(fetchNews(searchString, page)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);