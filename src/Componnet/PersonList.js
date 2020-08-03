import React, { Component } from 'react';
import axios from 'axios';



class PostList extends Component {
    constructor(props){
        super(props)
        this.state = {
        posts:[]
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then (res=> {
            console.log(res)
            this.setState({posts:res.data})
        })
    }

    render() { 
        const { posts } = this.state
        return( 
            <div>
                hello
                {
                posts.map ( post => <div key={post.id} >{post.body}</div> )
                
                }
            </div>
            
         );
    }
}
 
export default PostList;