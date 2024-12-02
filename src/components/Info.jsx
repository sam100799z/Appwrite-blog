import React from 'react'
import github from '../assets/github-sign.png'
import linkedin from '../assets/linkedin.svg'

const Info = ({ category }) => {

    const aboutContent = {
        heading: "About Chronique",
        description: [`
            Chronique is a blog application project where users can upload and manage blogs. It is built with React.js for the frontend and Appwrite for backend services. Appwrite provides features like authentication, database management, and secure file storage. The app uses Redux Toolkit (RTK) for efficient state management, making the application faster and more scalable.
        `],
        socials: [
            { name: github, link: "https://github.com/sam100799z/Appwrite-blog" },
        ],
    };

    const contactContent = {
        heading: "Contact Me",
        description: ["Hi, I'm Samarth Yadav. I aspire to be a software developer and have a strong interest in UI/UX design. I created this blog app as a project to practice and improve my skills. This application is coded in React.js for the frontend.Unlike simpler React + API projects, this app is more complex as it integrates backend services such as authentication, database management, and file storage. While the backend isn’t written by me, using Appwrite allowed me to focus on building the frontend.", 
        "Your feedback is highly valued and appreciated!", "You can Email me at iamsam0211@gmail.com",],
        socials: [
            { name: github, link: "https://github.com/sam100799z/" },
            { name: linkedin, link: "https://www.linkedin.com/in/samarthyadav02/" },
        ],
    };

    const content = category === "about" ? aboutContent : contactContent;
    const isAbout = category === "about";

    return (
        <div className="w-full flex px-20 bg-slate-300 py-10 flex-col items-center justify-center shadow-lg min-h-[40vh]">
            <h1 className="text-4xl font-light font-ptserif uppercase text-slate-800 mb-6">
                {content.heading}
            </h1>
            <p className="text-slate-700 text-lg leading-[1.75]">
                {content.description.map((paragraph, index) => (
                    <span key={index}>
                        {paragraph}
                        <br />
                    </span>
                ))}
            </p>
            <div className="mt-8 flex gap-4">
                {content.socials.map((social, index) => (
                    <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-slate-200 hover:underline text-lg"
                    >
                        <img src={social.name} className='w-10 hover:transform hover:scale-110 transition duration-300' alt="" />
                    </a>
                ))}
            </div>
        </div>
    );

}

export default Info
