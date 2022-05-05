import React, { useContext } from 'react';

//component
import BlogBox from './shared/BlogBox';
import Content from './../content/Content'

//context
import { BlogsContext } from '../../context/BlogContextProvider';



const BlogList = () => {
  const blogs = useContext(BlogsContext)
  return (
    <Content> 
      <div>
        {
        blogs.map(blog =>{<BlogBox key={blog.id} imgUrl={blog.image} title={blog.title} content={blog.short_descriptions} detailUrl={blog.detail}/>})
        }
      </div>
    </Content>
    
  )
}

export default BlogList