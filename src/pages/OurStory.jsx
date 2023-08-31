
import  { useEffect } from 'react';
import { NewsHeader } from "../components/News/NewsHeader";
import { StoriesHeader } from '../components/OurStories/StoryHeader';
import { MainStory } from '../components/OurStories/MainStory';



export const OurStory = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }, []);
  return (
    <section>
    <StoriesHeader />
    <div className="py-4 text-center">
      
    </div>
    <MainStory />
   
    
  </section>
  )
}
