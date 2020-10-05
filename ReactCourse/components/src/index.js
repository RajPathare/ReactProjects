import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail author="Raj" timeAgo="Today at 3:45pm" cmttext="Hey" ava={faker.image.avatar()} />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Rahul" timeAgo="Today at 4:45pm" cmttext="Yo" ava={faker.image.avatar()} />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Rahul" timeAgo="Today at 4:45pm" cmttext="Yo" ava={faker.image.avatar()} />
        </ApprovalCard>
        
    </div>
};

ReactDOM.render(<App/>, document.querySelector('#root'));