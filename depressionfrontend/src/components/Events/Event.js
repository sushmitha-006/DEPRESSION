import React from 'react';
import "./Event.css"
import Section from "./Section";

function Event() {
  const sections = [
    { 
      title: 'Yoga & Relaxation', 
      activities: [
        { name: 'Yoga Class', image: 'https://th.bing.com/th/id/OIP.D4uxbHgUGh5BiCVUT1SERQHaFj?w=800&h=600&rs=1&pid=ImgDetMain' }, 
        { name: 'Detox & Recharge', image: 'https://th.bing.com/th/id/OIP.1uBPKJSx8S4csxY1MUv_-AHaE8?rs=1&pid=ImgDetMain' }, 
        { name: 'Relaxation Therapy', image: 'https://th.bing.com/th/id/OIP.QWvRI1xik4Aej_8hlwBoGAHaE8?rs=1&pid=ImgDetMain' },
        {name:'Somatic Symphony', image:'https://static.wixstatic.com/media/eeb7d7_db2f958d996e4acb934c6d44da62009d~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01/eeb7d7_db2f958d996e4acb934c6d44da62009d~mv2.jpg'},
        {name:'Run for a Cause',image:'https://blog.fusionmedstaff.com/hs-fs/hubfs/Blog%20Images/Marathon%201.jpg?width=3561&name=Marathon%201.jpg'},
        {name:'Fitness Bootcamp',image:'https://hr.emory.edu/eu/_includes/images/sections/wellness/blomeyer-photos/blomeyerclass_small.jpg'}

      ] 
    },
    { 
      title: 'Workshops', 
      activities: [
        { name: 'Pottery Workshop', image: 'https://rome4kidstours.com/wp-content/uploads/2019/10/Pottery_workshop_in_Rome_for_kids_Rome_for_kids.jpg' }, 
        { name: 'Cooking Class', image: 'https://image.cookly.me/images/family-cooking-class_VgA1n9z.jpeg' },
        {name:'Art Workshop',image:'https://th.bing.com/th/id/OIP.CPOmnvxFZu7CKMxAfyBaMwHaFj?rs=1&pid=ImgDetMain'},
        {name:'Puppy play',image:'https://th.bing.com/th/id/R.d3c9282fa58834b00161f25181fc3caf?rik=zOVFZu364ARJuA&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fb%2fb4%2fGolden_Retriever_puppy_standing.jpg&ehk=Kk2kjbQaS3iQrO0963NOU8IKTCWRw23eH6dmLA8jFa8%3d&risl=1&pid=ImgRaw&r=0'},
        { name: 'Photography Workshop', image: 'https://images.squarespace-cdn.com/content/v1/5093b717e4b0979eac7c286c/1526571531810-YM0EM0AS3878VARX7P20/ke17ZwdGBToddI8pDm48kJK4Mm1kch8SFO9ZNkN1NT97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmFk_H6M1tkD9NpL7mXac0oVSXdFfjxR5AjcLwGSebOiGBsFzzcw3xKxvyC_6CFFG_/Beginners+photography+classes+near+me' },
        {name:'Texture Art Workshop',image:'https://creativeyatra.com/wp-content/uploads/2019/05/Texture-Painting-Workshop.jpg'}
      ] 
    },
    { 
      title: 'Stand-Up Comedy Shows', 
      activities: [
        { name: 'Gaurav Gupta Show', image: 'https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-gaurav-gupta-live-india-tour-0-2024-2-28-t-14-54-20.jpg' }, 
        { name: 'Mind Fool', image: 'https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-mindfool-india-tour-vir-das-0-2024-6-5-t-8-16-28.jpg' }, 
        { name: 'Chaman Chatora', image: 'https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-chaman-chatora-gaurav-kapoors-comedy-special-0-2024-3-5-t-10-43-34.jpg' },
        {name:'Telugu Comedy Show',image:'https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-telugu-stand-up-comedy-0-2024-5-5-t-5-23-13.jpg'},
        {name:'Only Personal Questions',image:'https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-only-personal-questions-a-crowd-work-show-0-2024-6-4-t-7-7-55.jpg'}      ] 
    },
    { 
      title: 'Meditation', 
      activities: [
        { name: 'Morning Meditation', image: 'https://cdn.pocketfives.com/p5wp/2017/11/590696-meditating.jpg' }, 
        { name: 'Evening Meditation', image: 'https://th.bing.com/th/id/OIP.S8xq0AS3pcccu55JamP7sgHaE2?rs=1&pid=ImgDetMain' }, 
        { name: 'Mindfulness Practice', image: 'https://live.staticflickr.com/65535/51485332868_a60bf63c2e_b.jpg' },
        {name:'Health & Wellness',image:'https://th.bing.com/th/id/OIP.OwPi7SK-IqvCU0vj3mBB4AHaIp?rs=1&pid=ImgDetMain'},
        {name:'Zumba',image:'https://th.bing.com/th/id/OIP.gSsid-WjGbMwp_l-TnwVcgAAAA?rs=1&pid=ImgDetMain'},
        {name:'Relaxation Techniques',image:'https://th.bing.com/th/id/OIP.H5KrrUgbL65mWZcWNxPMDgAAAA?rs=1&pid=ImgDetMain'},

      ] 
    },
  ];
  console.log("HEY");

  return (
    <div className="Event">
      <header className="Event-header">
        <h1>Events</h1>
        <p>"Join our curated events to overcome depression through engaging activities and supportive community interactions."</p>
      </header>
      {sections.map((section, index) => (
        <Section key={index} title={section.title} activities={section.activities} />
      ))}
    </div>
  );
}

export default Event;
