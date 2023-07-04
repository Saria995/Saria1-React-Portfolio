//Recent Photo or Avatar
// Short Biography
import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Analyst and Semi-Full Stack Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/Profile_Picture.jpg'} alt="Saria Elchaar"/>
      <p className="content is-italic mt-4">
        I'm Saria, a Full Time Business Analyst and currently studying full stack to enhance my knowledge in the technical field
      </p>
      <p className="content">
        Currently I manage third party relations dealing with projects that combine both Australia and Overseas work. I assist with learning resources, that guides users/staff with the company's processes. I am doing this course to expand my 
        skills and knowledge in the technical field. 
      </p>
    </div>
  );
}

export default About;