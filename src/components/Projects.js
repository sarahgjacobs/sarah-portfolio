import React from 'react';
import Tuter from "../img/tuter.png";
import PawPals from "../img/logo.gif";
// import TTT from "../img/ttt.png";
import SJW from "../img/sjw.png";
import CC from "../img/cc.jpeg";
// import TC from "../img/thecircuit.PNG";
import services from '../img/services.png';
import petesza from '../img/petesza.png';
import blogit from '../img/bi.png';

  const projects = [
    {
      id: 1,
      title: "Services",
      description: "Tuter is a social network for tutors and students to share questions, homework details and more in an online, efficient platform. Now tutors can be accurately prepared to show up to sessions with the right materials and expectations in hand. It's as simple as uploading a picture of your homework, filling out a few questions and submitting it. Then you're done and on your way to better learning!",
      image: services,
      link: "https://sarahgjacobs.github.io/services/"
    },
    {
      id: 2,
      title: "BlogIt",
      description: "BlogIt is an interactive, modern blogging website that allows users to register, login, browse and upload articles. It provides an intuitive and user-friendly interface for individuals to share their thoughts, ideas, and experiences with the world.",
      image: blogit,
      link: "https://github.com/sarahgjacobs/blogit"
    },
    {
      id: 3,
      title: "Pete's Za",
      description: "Hey there, pizza enthusiasts! Get ready to dive into the world of flavor-packed goodness with Pete's Za, your go-to pizza haven since 2023. We're all about serving up pies that not only hit the spot but also leave you craving more.",
      image: petesza,
      link: "https://sarahgjacobs.github.io/petes-za/"
    },
    {
      id: 4,
      title: "Tuter",
      description: "Tuter is a social network for tutors and students to share questions, homework details and more in an online, efficient platform. Now tutors can be accurately prepared to show up to sessions with the right materials and expectations in hand. It's as simple as uploading a picture of your homework, filling out a few questions and submitting it. Then you're done and on your way to better learning!",
      image: Tuter,
      link: "https://github.com/thebobfather2/tuterapp"
    },
    {
      id: 5,
      title: "PawPals",
      description: "Welcome to the Paw Pals! Our mission is to help find loving homes for animals in need. Whether you're looking for a cuddly cat, a playful pup, or a quirky rabbit, you'll find your perfect match here. Our extensive database of available pets includes detailed information on breed, age, personality, and more to help you find the right fit for your family. Adopting a pet is a big decision, and we're here to support you every step of the way. Our knowledgeable staff is available to answer any questions you may have, and our resources page includes information on pet care, training, and more. Start your search today and give an animal in need a second chance at a happy home!",
      image: PawPals,
      link: "https://github.com/thebobfather2/pawpals"
    },
    {
      id: 6,
      title: "Sarah Jacobs Writes",
      description: "Sarah Jacobs is an aspiring author with an array of books and short stories in her portfolio. She uses this website as her landing page for friends and family to browse through her works as well as purchase products through Amazon links.",
      image: SJW,
      link: "https://github.com/sarahgjacobs/sarahjacobswrites"
    },
    {
        id: 7,
        title: "Carrot Calendar",
        description: "Gaining over $100k in revenue per year, Bobbys Rabbits needed a simple, efficient way to coordinate community events to boost interaction and sales. Carrot Calendar is a user-friendly calendar intended to handle online events, RSVPs and monetary transactions.",
        image: CC,
        link: "https://github.com/thebobfather2/carrotcalendar"
      },
     
  ];
  
  const Card = ({ title, description, image, link }) => {
    return (
      <div className="card">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
      <button className="card-button">Learn More</button>
    </a>
      </div>
    );
  };
  
  //Card for upcoming projects shown in opposite form of card
  // const NextProjectCard = () => {
  //   return (
  //     <div className="card next-project-card">
  //       <div>
  //         <h2>My Next Project:</h2>
  //         <p>
  //           "The Circuit": an interactive landing page for a fiction novel that will include games, excerpts, and promotional content. Built with React, JavaScript, and more.
  //         </p>
  //       </div>
  //       <img src={TC} alt="The Circuit Project" className="project-image" />
  //     </div>
  //   );
  // };

  const Portfolio = () => {
    return (
        <div className="card-grid" style={{ marginTop: '10px',  flexDirection: 'column', paddingBottom: '50px'}}>
      <h1>Projects</h1>
      <div style={{justifyContent: 'center', paddingBottom: '10px'}} className='replit'><button><a href='https://replit.com/@sarahgjacobs' id="replit" >Replit Projects</a></button></div>
      <div className="portfolio">
        
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
      {/* <NextProjectCard /> */}

      </div>
    );
  };
  
  export default Portfolio;
  
