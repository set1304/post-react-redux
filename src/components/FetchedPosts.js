import React from "react";
import Post from "./Post";
import {connect} from "react-redux";
import {fetchPosts} from '../redux/action';
import Loader from "./Loader";


const FetchedPosts = ({asyncPosts, fetchPosts, loading}) => {
    if(loading){
        return <Loader/>
    };
    if(!asyncPosts.length){
        return <button
            className="btn btn-primary"
            onClick={fetchPosts}>Загрузить</button>
    }
    if(loading){
        return <p> Идет Загрузка</p>
    }
    return asyncPosts.map( p => <Post post={p} key={p.id}/>)
};

const mapStateToProps = (state) => {
    return {
        asyncPosts: state.posts.fetchedPosts,
        loading: state.app.loading
    }
};

const mapDispatchToProps = {
    fetchPosts
};




export default connect(mapStateToProps, mapDispatchToProps)(FetchedPosts)