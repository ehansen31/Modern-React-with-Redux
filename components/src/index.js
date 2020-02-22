import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from "./ApprovalCard"

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45"
                    imageURL={faker.image.avatar()}
                    text="first text here"
                />
            </ApprovalCard>

            <CommentDetail
                author="Jane"
                timeAgo="Today at 2:00AM"
                imageURL={faker.image.avatar()} text="second text here"
            />
            <CommentDetail
                author="Alex"
                timeAgo="Yesterday at 5:00PM"
                imageURL={faker.image.avatar()}
                text="third text here"
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));