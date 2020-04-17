import React, { Component } from 'react';
import DashLayout from '../dash-layout/dashLayout';
import './educator.css';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import SearchBar from '../common/search-bar/searchBar';
import Alert from '@material-ui/lab/Alert';


class Educator extends Component {
    state = {
        educatorList: [],
        filteredList: [],
        channeImagesUrl: []
    }

    componentWillMount() {

        this.setState({
            educatorList: this.educatorList,
            filteredList: this.educatorList
        })
        this.createChannelImages();
    }

    createChannelImages = () => {
        let channeImagesUrl = [];
        for (let i = 1; i < 10; i++) {
            channeImagesUrl.push('./channel/image_' + i + '.png');
        }
        this.setState({
            channeImagesUrl: channeImagesUrl
        })
    }

    searchEducator = (ev) => {
        let searchValue = ev.target.value;

        this.setState({
            filteredList: this.state.educatorList.filter(i => i.name.toLowerCase().includes(searchValue.toLowerCase()))
        })
    }


    educatorList = [
        { name: 'educator 1' },
        { name: 'educator 2' },
        { name: 'educator 3' },
        { name: 'educator 4' },
        { name: 'educator 5' },
        { name: 'educator 6' },
        { name: 'educator 7' },
        { name: 'educator 8' },
        { name: 'educator 9' }
    ];

    EducatorItem = (props) => {
        return (
            <>
                <Box boxShadow={3} p={1} className="educator-box mr-5">
                    <div className="educator-logo">
                        <img src={"./channel/image_" + props.index + ".png"} className="logo" />
                    </div>
                    <div className="text-center">
                        {props.educatorItem.name}
                    </div>
                </Box>
            </>
        )
    }

    EducatorList = (props) => {
        return (
            <>
                <div className="searchbar-eduactor">
                    <SearchBar changeValue={(ev) => this.searchEducator(ev)} placeholder="Search courses" />
                </div>
                <Box display="flex"
                    flexWrap="wrap"
                    className="ml-2 w-80">
                    {props.educatorList.map((item, i) =>
                        <Link to="/courses" className="link mr-5 mb-5" key={i}>
                            {<this.EducatorItem educatorItem={item} index={i + 1} />}
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
                    <this.EducatorList educatorList={this.state.filteredList} />
                </DashLayout>
            </>
        );
    }
}

export default Educator;