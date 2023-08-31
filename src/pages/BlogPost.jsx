/* eslint-disable no-unused-vars */
import React from 'react'
import { BrandHeader } from '../components/Portfolio/BrandHeader'
import Blog from '../components/BlogPost/Blog'
import Banner from '../components/BlogPost/Banner'
import { useEffect } from 'react'

const BlogPost = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <section>
    
  
    <Blog />
    
   
    
    </section>
  )
}

export default BlogPost