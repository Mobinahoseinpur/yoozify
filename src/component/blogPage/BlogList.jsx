import React, { Fragment, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
//component
import BlogBox from './shared/BlogBox';
import Content from './../content/Content'
//context
import { BlogsContext } from '../../context/BlogContextProvider';

const BlogList = () => {
  const blogs = useContext(BlogsContext)
  return (
    <Content>
      <div style={{display:'flex'}}>
        {
          blogs.map(blogloop => <BlogBox 
                                            key={blogloop.id} 
                                            blogData={blogloop} 
                                        />)
        }
      </div>
     </Content>

  )
}

export default BlogList