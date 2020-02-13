import React, { Component } from 'react'
import * as actions from '../store/actions/posts'
import { connect } from "react-redux";
import Form from "./Form";


class Posts extends Component {

    componentDidMount() {

        this.props.getPosts();
    }



    render() {

        if (this.props.loading) {
            return (<div> loading...</div>)
        } else {
            return (
                <div>
                    <Form addPost={this.props.addPost} updatePost={this.props.editPost} post={this.props.post} isELoading={this.props.isEloading} isALoading={this.props.isAloading}> </Form>

                    {this.props.posts.slice(0, 10).map(

                        post => <li key={post.id} onClick={() => this.props.getPostsById(post.id)}>
                            {post.title}
                            <button type="button" onClick={() => { this.props.deletePostsById(post.id); }} disabled={this.props.isDeleting && (post.id === this.props.post.id)}>
                                {this.props.isDeleting && (post.id === this.props.post.id) ? "Loading" : "Delete"}
                            </button></li>

                    )}

                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.posts,
        error: state.posts.postErr,
        loading: state.posts.postLoading,
        post: state.posts.post,
        isAloading: state.posts.addloading,
        isEloading: state.posts.editLoading,
        isDeleting: state.posts.deleteloading
    }
}



export default connect(mapStateToProps, actions)(Posts)