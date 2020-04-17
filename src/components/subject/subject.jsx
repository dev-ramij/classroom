import React, { Component } from 'react';
import SearchBar from '../common/search-bar/searchBar';
import './subject.css'
class Subjects extends Component {
    state = {
        // subjects: ['Subject 1',
        //  'Subject 2',
        //   'Subject 3', 
        //   'Subject 4',
        //    'Subject 5']
        subjects: [
            {
                name: 'Subject 1',
                topics: [
                    {
                        name: 'setstate in react js inside array of objects'
                    },
                    {
                        name: 'Topic 2'
                    },
                    {
                        name: 'Topic 3'
                    }
                ],
                isExpand: false
            },
            {
                name: 'Subject 2',
                topics: [
                    {
                        name: 'Topic 1'
                    },
                    {
                        name: 'Topic 2'
                    },
                    {
                        name: 'Topic 3'
                    }
                ],
                isExpand: false
            },
            {
                name: 'Subject 3',
                topics: [
                    {
                        name: 'Topic 1'
                    },
                    {
                        name: 'Topic 2'
                    }
                ],
                isExpand: false
            },
            {
                name: 'Subject 4',
                topics: [],
                isExpand: false
            },
        ]
    }


    expandItem = (index) => {
        this.state.subjects[index].isExpand = !this.state.subjects[index].isExpand;
        this.setState({
            subjects: this.state.subjects
        })
    }

    TopicList = (props) => {
        return (
            <div className="list-container-subject sub-topic">
                {props.topics.map((topic, i) =>
                    <div key={i} className="list-subject sub-topic-list">
                        {topic.name}
                    </div>
                )}
            </div>
        )
    }

    SubjectList = (props) => {

        return (
            <>
                {props.subjects.map((subject, i) =>
                    <div key={i}>
                        <div className="list-container-subject">
                            <div className="list-subject" onClick={() => this.expandItem(i)}>
                                {!subject.isExpand && subject.topics.length > 0 && <i className="fa fa-chevron-right icons" />}
                                {subject.isExpand && subject.topics.length > 0 && <i className="fa fa-chevron-down icons" />}
                                {subject.name}
                            </div>
                        </div>
                        <div>
                            {subject.isExpand && <this.TopicList topics={subject.topics} />}
                        </div>
                    </div>
                )}
            </>
        )
    }


    render() {
        return (
            <>
                <div className="header-with-search">
                    <h1>
                        Subjects
                    </h1>
                    <SearchBar />
                </div>
                <hr />
                <div className="scroll">
                <this.SubjectList subjects={this.state.subjects}/>
                </div>
                
            </>
        );
    }
}

export default Subjects;