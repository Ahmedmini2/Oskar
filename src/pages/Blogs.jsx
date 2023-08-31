/* eslint-disable no-unused-vars */
import  { useEffect } from 'react';
import BlogPost from './BlogPost'
import AllBlogs from '../components/Blogs/AllBlogs'

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <section className="">
        <div className="py-18">
            <AllBlogs />
        </div>
    </section>
  )
}

export default Blogs