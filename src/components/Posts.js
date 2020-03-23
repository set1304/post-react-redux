import React from "react";
import Post from "./Post";
import {connect} from 'react-redux'



const Posts = ({syncPosts}) => {
    if(!syncPosts.length){
        return <p>Постов пока нет</p>
    }
    return syncPosts.map( p => <Post post={p} key={p.id}/>)
};

const mapStateToProps = state => {
    console.log(state);
    return {
        syncPosts: state.posts.posts
    }
}

export default connect(mapStateToProps, null)(Posts)