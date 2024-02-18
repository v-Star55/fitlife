import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import firebase from '../../../firebase/app';
import { auth } from '../../../firebase';

const CommunityPage = () => {


  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({ image: '', title: '', tag: '', description: '' });

  useEffect(() => {
    // Fetch community posts from the server
    axios.get('http://localhost:5000/api/posts') // change this line
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


const handleAddPost = () => {
    // Add the post
    axios.post('http://localhost:5000/api/addPost', formData)
        .then(response => {
            console.log(response.data.message);
            // Refresh posts after adding a new post
            axios.get('http://localhost:5000/api/posts')
                .then(response => setPosts(response.data))
                .catch(error => console.error('Error fetching posts:', error));
        })
        .catch(error => console.error('Error adding post:', error));
};

  return (
    <div className='comm-main'>
     <div className='comm-hero'>
       <h1>Community</h1>
     </div>
      
      <div className='form-container'>
        <h2>Add Post</h2>
        <form className='form_com'>
          <input type="text" name="image" placeholder="Image URL" onChange={handleInputChange} />
          <input type="text" name="title" placeholder="Title" onChange={handleInputChange} />
          <input type="text" name="tag" placeholder="Tag" onChange={handleInputChange} />
          <textarea name="description" placeholder="Description" onChange={handleInputChange}></textarea>
          <button type="button" onClick={handleAddPost}>Add Post</button>
        </form>
      </div>

      <div className='comm-post'>
        <h2>Community Posts</h2>
        <ul>
          {posts.map(post => (
           <div key={post._id} class="blog-container">
  
           <div class="blog-header">
             <div class="blog-cover">
                <img src={post.image} alt="blog-cover" />
               <div class="blog-author">
                 <h3>Anonymous</h3>
               </div>
             </div>
           </div>
         
           <div class="blog-body">
             <div class="blog-title">
               <h1><a href="#">{post.title}</a></h1>
             </div>
             <div class="blog-summary">
               <p>{post.description}</p>
             </div>
         
             <div class="blog-tags">
               <ul>
                 <li><a href="#">{post.tag}</a></li>
                 <li><a href="https://linkedIn.com">linkedIn</a></li>
               </ul>
             </div>
         
           </div>
           
           <div class="blog-footer">
             <ul>
               <li class="published-date">12-sep</li>
             </ul>
           </div>
         
         </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommunityPage;



