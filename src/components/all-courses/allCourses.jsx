import React from 'react';
import SearchBar from '../common/search-bar/searchBar'
import './allCourses.css'
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import DashLayout from '../dash-layout/dashLayout';

export default class AllCourses extends React.Component {
    state = {
        courseList: [],
        filteredList: []
    }

    componentWillMount() {
        this.setState({
            courseList: this.courseList,
            filteredList: this.courseList
        })
    }

    courseList = [
        { name: 'course 1' },
        { name: 'course 2' },
        { name: 'course 3' },
        { name: 'course 4' },
        { name: 'course 5' },
        { name: 'course 6' },
        { name: 'course 7' },
        { name: 'course 8' },
        { name: 'course 9' },
        { name: 'course 10' }
    ];

    searchCourse = (ev) => {
        let searchValue = ev.target.value;
        this.setState({
            filteredList: this.state.courseList.filter(i => i.name.toLowerCase().includes(searchValue.toLowerCase()))
        })
    }

    // The List of all courses uploaded by user
    CourseItem = (props) => {
        return (
            <Box boxShadow={3} className="course-box mr-5">
                <img src="./thumbnail.png" />
                <div className="text-center">
                    {props.courseItem.name}
                </div>
            </Box>
        )
    }

    CourseList = (props) => {
        return (
            <>
                <div className="searchbar-course">
                    <SearchBar changeValue={(ev) => this.searchCourse(ev)} />
                </div>
                <Box display="flex"
                    flexWrap="wrap"
                    className="ml-2 w-80">
                    {props.courseList.map((item, i) =>
                        <Link to="/subjects" className="link mr-5 mb-5">
                            {<this.CourseItem courseItem={item} />}
                        </Link>
                    )}
                </Box>
                {this.state.filteredList.length === 0 &&
                    <Alert severity="info" className="w-80">No matches found</Alert>
                }
            </>
        )
    }

    render() {
        return (
            <>
                <DashLayout>
                    <this.CourseList courseList={this.state.filteredList} />
                </DashLayout>

            </>
        );
    }

}



