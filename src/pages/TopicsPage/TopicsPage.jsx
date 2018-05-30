import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './TopicsPage.css'
import NavBar from '../../components/NavBar/NavBar';
import TopicList from '../../components/TopicList/TopicList';
import Pagination from '../../components/Pagination/Pagination';
// import Footer from '../../components/Footer/Footer';

class TopicsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: [],
            pageOfTopics: []
        };
        this.onChangePage = this.onChangePage.bind(this);
    } 

    onChangePage(pageOfTopics) {
        // update state with new page of items
        this.setState({ pageOfTopics: pageOfTopics });
    }

    getAllTopics = () => {
        fetch('/api/topics')
        .then(res => res.json()) 
        .then(topics => {
            this.setState({topics});
        })
    }

    componentDidMount() {
        this.getAllTopics();
    }

    render() {
        return (
            <div>
                 <NavBar user={this.props.user} 
                     handleLogout={this.props.handleLogout}
                 />
                 <TopicList topics={this.state.topics}/>
                 {/* <Footer /> */}

                 <Pagination items={this.state.topics} onChangePage={this.onChangePage} />
            </div>
         )
    }
}

export default TopicsPage;