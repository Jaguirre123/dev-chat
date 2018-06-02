import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import './TopicsPage.css'
import NavBar from '../../components/NavBar/NavBar';
import TopicList from '../../components/TopicList/TopicList';
import Pagination from '../../components/Pagination/Pagination';
import Footer from '../../components/Footer/Footer';

class TopicsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: [],
            filteredTopics: [],
            initialPage: 1, 
            pageSize: 12, 
            pageOfTopics: []
        };
    } 

    onChangePage = (pageOfTopics) => {
        this.setState({ pageOfTopics: pageOfTopics });
    }

    getAllTopics = () => {
        fetch('/api/topics')
        .then(res => res.json()) 
        .then(topics => {
            this.setState({topics, filteredTopics: topics});
        });
    }

    filterList = (event) => {
        var updatedList = event.target.value ? 
            this.state.topics.filter(t => t.title.toLowerCase().includes(event.target.value.toLowerCase()))
        :
            this.state.topics;
        this.setState({filteredTopics: updatedList});
    }

    componentDidMount() {
        this.getAllTopics();
    }

    render() {
        return (
            <div>
                <NavBar user={this.props.user} 
                     handleLogout={this.props.handleLogout}/>
                <fieldset className="form-group search">
                    <input type="text" className="form-control form-control-lg" placeholder="Search..." onChange={this.filterList}/>
                </fieldset>
                <TopicList pageOfTopics={this.state.pageOfTopics}/>
                <Pagination topics={this.state.filteredTopics} 
                             onChangePage={this.onChangePage}
                             pageSize={this.state.pageSize}
                             initialPage={this.state.initialPage} />
                <Footer />          
            </div>
         )
    }
}

export default TopicsPage;