import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import logo from "../Assests/logo.svg"
import sign from "../Assests/sign.svg"
import myProfile3 from "../Assests/1721921828280_1.jpg"
import img1 from "../Assests/1.webp"
import cPlus from "../Assests/c-logo.webp"
import python from "../Assests/python.webp"
import java from "../Assests/java2.webp"
import dsa from "../Assests/dsa.webp"
import html from "../Assests/html2.webp"
import css from "../Assests/css.webp"
import js from "../Assests/js.webp"
import tailwind from "../Assests/tailwind.webp"
import reactlogo from "../Assests/react.webp"
import node from "../Assests/node.webp"
import express from "../Assests/express.png"
import mongoDb from "../Assests/mongodb.png"

import home from "../Assests/home.webp"
import contactus from "../Assests/contactus.avif"



function Header() {
  return (
    <>
    <div className='lg:w-10/12 w-11/12 mx-auto mt-8 mb-6'>

        <div>

                {/* logo and Name  */}
                <div className='flex justify-between'>
                    <div className='flex lg:gap-4 gap-2 items-center'>
                        <img src={logo} alt="" />
                        <p className='text-lg font-semibold '>Satynarayan Maurya</p>
                    </div>
                    <div className='flex gap-2 items-center cursor-pointer'>
                        <a href='https://github.com/SatynarayanMaurya' target='_blank' rel="noopener noreferrer" className='text-lg font-semibold'>Github</a>
                        <p className='text-xl'><MdOutlineArrowOutward/></p>
                    </div>
                </div>

                {/* Image and Name here  */}
                <div className='mt-8 flex lg:flex-row flex-col-reverse lg:gap-0 gap-10  justify-between items-center'>

                    <div className='lg:w-[55%] flex gap-4 flex-col lg:items-start'>
                        <div>
                            <p className='lg:text-[5vw] text-4xl leading-none font-roboto'>Hello,</p>
                            <p className='lg:text-[4vw] text-2xl    font-roboto font-normal lg:mt-4 lg:mb-2'>I'm Satynarayan Maurya</p>
                        </div>

                        <div>
                            <p className='lg:text-lg lg:w-[80%] font-roboto2 flg:ont-semibold'>I'm a full-stack web developer skilled in the MERN stack, creating dynamic and responsive applications. I'm passionate about developing efficient, user-centered solutions that solve real-world challenges.</p>
                        </div>

                        <div className='flex gap-2 items-center mt-6 cursor-pointer'>
                            <a href='https://www.linkedin.com/in/satynarayan-maurya-114335246/' target='_blank' rel="noopener noreferrer" className='text-lg font-semibold '>LinkedIn</a>
                            <p className='text-xl'><MdOutlineArrowOutward/></p>
                        </div>
                    </div>

                    <div className='lg:w-[45%]  rounded-full'>
                        {/* <img src={profileImage} alt="profile" className='w-[600px] rounded-full' /> */}
                        <img src={myProfile3} alt="profile" className='lg:w-[550px] lg:h-[550px] w-[300px] h-[300px] rounded-full object-fill'  />
                    </div>

                </div>


                {/* About me  */}
                <div className='mt-12 font-roboto2 lg:text-lg lg:w-[69%] flex flex-col gap-3'>

                    <h1 className='font-semibold text-2xl'>A litte about me</h1>

                    <p className='font-medium'>I am a B.Tech student and a passionate full-stack web developer with a focus on the MERN stack—MongoDB, Express.js, React.js, and Node.js. Through my projects, I've developed a deep understanding of building dynamic, responsive web applications that offer seamless user experiences.</p>

                    <p> I enjoy working across both the front end and back end, from creating interactive UIs in React to designing robust server-side logic and APIs with Node.js and Express. MongoDB enables me to manage data efficiently, allowing for scalable and flexible applications. I’m continually exploring new tools and techniques to build impactful, user-centered solutions and am excited to contribute to meaningful projects that make a difference.</p>
                    <img src={sign} alt="sign" className='lg:w-[150px] w-[100px] mt-4' />
                </div>

                <div className='border-t border-black lg:w-[99vw] w-[360px] -ml-4 lg:-ml-32 lg:mt-12 mt-6 '></div>

                {/* Skills  */}
                <div className='mt-6'>
                    <p className='lg:text-[3vw] text-3xl font-bold'>Skills</p>


                    <div className='flex flex-col gap-8'>
                        
                        {/* first skill section  */}
                        <div className='flex lg:flex-row flex-col lg:gap-0 gap-6 justify-between items-center mt-6'>

                            <div className='lg:w-[620px]'>
                                <img src={img1} alt="" className='lg:w-[620px]  lg:h-[375px]  shadow-md' />
                            </div>

                            <div className='lg:w-[620px] border lg:p-6 pl-4 py-6 flex flex-col gap-3 shadow-lg text-sm'>

                                <div className='flex flex-col gap-1'>
                                    <div className='flex items-center gap-2 font-semibold lg:text-xl text-lg'>
                                        <img src={cPlus} alt="logo" className='w-[25px] ' />
                                        <p>C++</p>
                                    </div>
                                    <p className='lg:pl-8 pl-4'>C++ is a high-performance, versatile programming language that extends C with object-oriented features like classes and inheritance. </p>
                                </div>


                                <div className='flex flex-col gap-1'>
                                    <div className='flex items-center gap-2 font-semibold  lg:text-xl text-lg'>
                                        <img src={python} alt="logo" className='w-[25px] ' />
                                        <p>Python</p>
                                    </div>
                                    <p className='lg:pl-8 pl-4'>Python is a high-level, versatile programming language known for its readability and simplicity, making it great for beginners and experts alike.  </p>
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <div className='flex items-center gap-2 font-semibold  lg:text-xl text-lg'>
                                        <img src={java} alt="logo" className='w-[30px] ' />
                                        <p>Java</p>
                                    </div>
                                    <p className='lg:pl-8 pl-4'>Java is a versatile, object-oriented programming language known for its platform independence, thanks to the Java Virtual Machine (JVM).  </p>
                                </div>
                                
                                <div className='flex flex-col gap-1'>
                                    <div className='flex items-center gap-1 font-semibold  lg:text-xl text-lg'>
                                        <img src={dsa} alt="logo" className='w-[35px] ' />
                                        <p className='lg:text-lg text-base'>Data structure & Algorithm using C++</p>
                                    </div>
                                    <p className='lg:pl-8 pl-4'>DSA involve organizing and processing data efficiently to solve problems. Data structures like arrays, trees, and graphs store data.</p>
                                </div>


                            </div>
                        </div>
                        
                        {/* second skill section  */}
                        <div className='flex lg:flex-row flex-col lg:gap-0 gap-6 justify-between items-center mt-6'>


                            <div className='lg:w-[620px] border lg:p-6 pl-4 py-6 flex flex-col gap-3 shadow-lg text-sm'>

                                <div className='flex flex-col gap-1'>
                                    <div className='flex items-center gap-2 font-semibold text-[16px]'>
                                        <img src={html} alt="logo" className='w-[25px] ' />
                                        <p>Hypertext Markup Language ( HTML )</p>
                                    </div>
                                    <p className='lg:pl-8 pl-4'>HTML is the standard language used to structure and present content on the web. It organizes text, images, links, and multimedia elements on web pages. </p>
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <div className='flex items-center gap-2 font-semibold text-lg'>
                                        <img src={css} alt="logo" className='w-[25px] ' />
                                        <p>Cascading style sheet ( CSS )  </p>
                                    </div>
                                    <p className='lg:pl-8 pl-4'>CSS is a stylesheet language used to describe the presentation and layout of HTML documents. It allows developers to apply styles such as colors, fonts.</p>
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <div className='flex items-center gap-2 font-semibold text-lg'>
                                        <img src={js} alt="logo" className='w-[30px] ' />
                                        <p>Java script</p>
                                    </div>
                                    <p className='lg:pl-10 pl-4'>JavaScript is a high-level, versatile programming language primarily used to create interactive and dynamic content on websites. </p>
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <div className='flex items-center gap-2 font-semibold text-lg'>
                                        <img src={tailwind} alt="logo" className='w-[35px] ' />
                                        <p className=' text-lg'>Tailwind & Bootstrap</p>
                                    </div>
                                    <p className='lg:pl-10 pl-4'>Tailwind CSS is a utility-first CSS framework that provides low-level utility classes for building custom designs directly in HTML.</p>
                                </div>

                            </div>

                            <div className='lg:w-[620px] border p-6 flex flex-col gap-2 shadow-lg text-sm'>

                                <div className='flex flex-col gap-1'>
                                        <div className='flex items-center gap-2 font-semibold text-lg'>
                                            <img src={reactlogo} alt="logo" className='w-[35px] ' />
                                            <p className=' text-lg'>React js</p>
                                        </div>
                                        <p className='lg:pl-10 pl-4'>React.js is a popular JavaScript library for building user interfaces, particularly single-page applications.</p>
                                    </div>

                                    <div className='flex flex-col gap-1'>
                                        <div className='flex items-center gap-2 font-semibold text-lg'>
                                            <img src={node} alt="logo" className='w-[25px] ' />
                                            <p>Node js</p>
                                        </div>
                                        <p className='lg:pl-8 pl-4'>Node.js is a JavaScript runtime built on Chrome's V8 engine that allows developers to execute JavaScript on the server side. </p>
                                    </div>

                                    <div className='flex flex-col gap-1'>
                                        <div className='flex items-center gap-2 font-semibold text-lg'>
                                            <img src={express} alt="logo" className='w-[25px] ' />
                                            <p>Express js</p>
                                        </div>
                                        <p className='lg:pl-8 pl-4'>Express.js is a minimal and flexible web application framework for Node.js that simplifies the process of building server-side applications and APIs.</p>
                                    </div>

                                    <div className='flex flex-col gap-1'>
                                        <div className='flex items-center gap-2 font-semibold text-lg'>
                                            <img src={mongoDb} alt="logo" className='w-[30px] ' />
                                            <p>Mongo DB</p>
                                        </div>
                                        <p className='lg:pl-8 pl-4'>MongoDB is a NoSQL database that uses a flexible, document-oriented data model to store data in JSON-like format (BSON).</p>
                                    </div>


                            </div>

                        </div>
                    </div>
                </div>


                <div className='border-t border-black lg:w-[99vw] w-[360px] -ml-4 lg:-ml-32 lg:mt-12 mt-6 '></div>

                {/* Project  */}
                <div className='mt-6 text-sm'>
                    <p className='lg:text-[3vw] text-3xl font-bold'>Projects</p>

                   <div className='mt-6 flex  flex-col gap-16'>

                        {/* first Row  */}
                        <div className='flex lg:flex-row flex-col justify-between '>

                            {/* Left part  */}
                            <div className='lg:w-[620px] flex flex-col gap-3 border lg:p-6 pl-4 py-6 shadow-xl '>
                                <p className='lg:text-3xl text-2xl font-semibold'>1. Study Notion: E-Learning Platform </p>
                                <a href='https://study-notion-frontend-satynarayan-mauryas-projects.vercel.app/' target='_blank' rel="noopener noreferrer"className='pl-2 lg:text-lg text-blue-700 '>https://study-notion-frontend-satynarayan-mauryas-projects.vercel.app/</a>

                                <div className='mt-2'>
                                    {/* Overview  */}
                                    <div className='flex flex-col gap-3'>
                                            <h1><span className='text-lg font-semibold'>Overview:</span> Study Notion is a comprehensive e-learning platform designed to connect instructors and students seamlessly. The platform provides a user-friendly interface for students to enroll in courses and for instructors to create and manage their courses.</h1>

                                            {/* Key features  */}
                                            <div className='flex flex-col gap-3'>
                                                <p className='text-lg font-semibold'>Key Features: </p>

                                                <div className='lg:pl-6 pl-3'>
                                                    <p className='text-[16px] mb-1 font-semibold'>User Registration and Login:</p>
                                                    <p className='lg:pl-10 pl-4 pr-1'>Both students and instructors can sign up using their email addresses, followed by an OTP verification process to ensure secure access.</p>
                                                </div>


                                                <div className='lg:pl-6 pl-3'>
                                                    <p className=' text-[16px] mb-1  font-semibold'>Course Management for Instructors:</p>
                                                    <div className='lg:pl-10 pl-4 pr-1'>
                                                        <p>Instructors can create courses by defining chapter names as sections and subdividing them into subsections.</p>
                                                        <p>Each course can be published once complete, making it available for students to enroll.</p>
                                                    </div>
                                                </div>

                                                <div className='lg:pl-6 pl-3'>
                                                    <p className=' text-[16px] mb-1  font-semibold'>Course Enrollment for Students:</p>
                                                    <div className='lg:pl-10 pl-4 pr-1'>
                                                        <p>Students can browse available courses and purchase them using Razorpay, a secure payment gateway.</p>
                                                        <p>Once payment is confirmed, courses are added to the students' enrolled courses section, allowing them to track their learning progress.</p>
                                                    </div>
                                                </div>

                                                
                                                <div className='lg:pl-6 pl-3'>
                                                    <p className=' text-[16px] mb-1  font-semibold'>Contact Us Page:</p>
                                                    <p className='lg:pl-10 pl-4 pr-1'>A dedicated contact form is available for potential instructors to express their interest in joining the platform and for general inquiries.</p>
                                                </div>
                                                
                                                <div className='lg:pl-6 pl-3'>
                                                    <p className=' text-[16px] mb-1  font-semibold'>Responsive Design:</p>
                                                    <p className='lg:pl-10 pl-4 pr-1'>The platform is designed to be mobile-friendly, ensuring a smooth experience on various devices..</p>
                                                </div>

                                            </div>
                                    </div>

                                </div>
                            </div>
                            
                             {/* Right part  */}
                            <div className='lg:w-[620px]  flex flex-col gap-3 border lg:p-6 pl-4 py-6 shadow-xl'>
                                <p className='lg:text-3xl text-2xl font-semibold'>2. Shop Next: E-Commerce Platform </p>
                                <a href='https://e-commerce-frontend-green-ten.vercel.app/' target='_blank' rel="noopener noreferrer" className='pl-2 lg:text-lg text-blue-700 '>https://e-commerce-frontend-green-ten.vercel.app/</a>

                                <div className='mt-2'>
                                    {/* Overview  */}
                                    <div className='flex flex-col gap-3'>
                                            <h1><span className='text-lg font-semibold'>Overview:</span> ShopNext is a full-featured e-commerce platform built to deliver a seamless and intuitive shopping experience while allowing efficient management by administrators.</h1>

                                            {/* Key features  */}
                                            <div className='flex flex-col gap-3'>
                                                <p className='text-lg font-semibold'>Key Features: </p>
                                                
                                                {/* Normal user  */}
                                                <div className='lg:pl-6 pl-3'>
                                                    <p className='text-lg font-semibold'>Normal Users:</p>
                                                    <div>
                                                        <div className='lg:pl-4 pl-2 pr-1 flex flex-col'>
                                                            <p className='text-[16px] font-semibold flex items-center -mt-3'><span className='text-6xl leading-none lg:mt-0 mt-1 pr-1 font-semibold'>·</span>Browsing & Account Creation:</p>
                                                            <p className='lg:pl-10 pl-6  -mt-4'>Users can explore all products without logging in. To add items to their cart, they need to sign up via email with OTP verification.</p>
                                                        </div>
                                                        
                                                        <div className='lg:pl-4 pl-2 pr-1 flex flex-col'>
                                                            <p className=' text-[16px]  font-semibold flex items-center -mt-3'><span className='text-6xl leading-none  lg:mt-0 mt-1  pr-1 font-semibold'>·</span>Cart & Checkout:</p>
                                                            <p className='lg:pl-10 pl-6 -mt-4'>Once logged in, users can add products to their cart and proceed to checkout, where they fill in delivery details and choose between payment options—bank transfer or cash on delivery.</p>
                                                        </div>

                                                        <div className='lg:pl-4 pl-2 pr-1 flex flex-col'>
                                                            <p className=' text-[16px] font-semibold flex items-center -mt-3'><span className='text-6xl leading-none  lg:mt-0 mt-1  pr-1 font-semibold'>·</span>Order Tracking: </p>
                                                            <p className='lg:pl-10 pl-6 -mt-4'>Users can view their order history and track the status of placed orders in their account’s "Orders" section.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                {/* Admin panel  */}
                                                <div className='lg:pl-6 pl-3'>
                                                    <p className='text-lg font-semibold'>Admin Panel:</p>

                                                    <div>

                                                        <div className='lg:pl-4 pl-2 pr-1 flex flex-col'>
                                                            <p className='text-[16px] font-semibold flex items-center -mt-3'><span className='text-6xl leading-none  lg:mt-0 mt-1  pr-1 font-semibold'>·</span>Product Management: </p>
                                                            <p className='lg:pl-10 pl-6  -mt-4'>Admins can create, update, and manage product listings with control over details like pricing and stock.</p>
                                                        </div>
                                                        
                                                        <div className='lg:pl-4 pl-2 pr-1 flex flex-col'>
                                                            <p className='text-[16px] font-semibold flex items-center -mt-3'><span className='text-6xl leading-none  lg:mt-0 mt-1  pr-1 font-semibold'>·</span>Order Monitoring:</p>
                                                            <p className='lg:pl-10 pl-6  -mt-4'>Admins can view all customer orders, allowing them to manage sales and keep track of completed transactions efficiently.</p>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                        {/* second Second  */}
                        <div className='flex lg:flex-row flex-col justify-between'>

                            {/* Left part  */}
                            <div className='lg:w-[620px] flex flex-col gap-3 border lg:p-6 pl-4 py-6 shadow-xl'>
                                <p className='lg:text-3xl text-2xl font-semibold'>3. TODO List:</p>
                                <a href='https://to-do-list-frontend-zjhn.onrender.com/' target='_blank' rel="noopener noreferrer" className='pl-2 lg:text-lg text-blue-700 '>https://to-do-list-frontend-zjhn.onrender.com/</a>

                                <div className='mt-2'>
                                    {/* Overview  */}
                                    <div className='flex flex-col gap-3'>
                                            <h1><span className='text-lg font-semibold pr-1'>Overview:</span> This Todo List application is a full-stack MERN project designed to provide users with a seamless, intuitive platform for managing their tasks. With a focus on user authentication and data persistence, the app ensures that users can easily access and maintain their to-dos across sessions.</h1>

                                            {/* Key features  */}
                                            <div className='flex flex-col gap-3'>
                                                <p className='text-lg font-semibold'>Key Features: </p>

                                                <div className='lg:pl-6 pl-2 flex flex-col'>
                                                    <p className=' text-[16px] font-semibold flex items-center -mt-3'><span className='text-6xl leading-none  lg:mt-0 mt-1  pr-1 font-semibold'>·</span>User Authentication: </p>
                                                    <p className='lg:pl-10 pl-6 pr-1 -mt-4'>Users are required to sign up and log in to create, update, or delete tasks. Without logging in, users can only view the site interface, emphasizing data security.</p>
                                                </div>

                                                <div className='lg:pl-6 pl-2  flex flex-col'>
                                                    <p className='text-[16px]  font-semibold flex items-center -mt-3'><span className='text-6xl leading-none  lg:mt-0 mt-1  pr-1 font-semibold'>·</span>Task Management: </p>
                                                    <p className='lg:pl-10 pl-6 pr-1 -mt-2'>Logged-in users have complete control over their to-do items. They can:</p>
                                                    <div className='lg:pl-8 pl-2 lg:mt-1 mt-4 text-sm'>
                                                        <p className=' flex items-center lg:-mt-3 -mt-6'><span className='text-6xl leading-none  pr-1 font-semibold'>·</span>Create new tasks to manage daily goals.</p>
                                                        <p className='  flex items-center lg:-mt-8 -mt-6'><span className='text-6xl leading-none  pr-1 font-semibold'>·</span>Edit existing tasks if priorities or deadlines change.</p>
                                                        <p className='  flex items-center lg:-mt-8 -mt-6'><span className='text-6xl leading-none  pr-1 font-semibold'>·</span>Delete tasks that are no longer needed.</p>
                                                        <p className=' flex items-center  lg:-mt-8 -mt-6'><span className='text-6xl leading-none  pr-1 font-semibold'>·</span>Mark tasks as complete, making it easy to track progress.</p>
                                                    </div>
                                                </div>

                                                
                                                <div className='lg:pl-6 pl-2 flex flex-col'>
                                                    <p className=' text-[16px]  font-semibold flex items-center -mt-3'><span className='text-6xl leading-none  lg:mt-0 mt-1  pr-1 font-semibold'>·</span>Persistent Data Storage: </p>
                                                    <p className='lg:pl-10 pl-6 pr-1 -mt-4'>All user data is stored securely in MongoDB. This ensures that when users log in, their tasks are readily available, providing a consistent experience regardless of device or session.</p>
                                                </div>
                                                
                                                <div className='lg:pl-6 pl-2 flex flex-col'>
                                                    <p className=' text-[16px] font-semibold flex items-center -mt-3'><span className='text-6xl leading-none lg:mt-0 mt-1 pr-1 font-semibold'>·</span>Responsive Interface: </p>
                                                    <p className='lg:pl-10 pl-6 pr-1 -mt-4'>The app is designed for easy navigation on both desktop and mobile devices, enabling users to manage tasks anytime, anywhere.</p>
                                                </div>


                                            </div>
                                    </div>

                                </div>
                            </div>

                            {/* Right part  */}
                            <div className='lg:w-[620px] flex flex-col gap-3 border lg:p-6 pl-4 py-6 shadow-xl'>
                                <p className='lg:text-3xl text-2xl font-semibold'>4. Interactive Draggable Footballs Webpage</p>
                                <a href='https://drag-ball.vercel.app/' target='_blank' rel="noopener noreferrer" className='pl-2 lg:text-lg text-blue-700 '>https://drag-ball.vercel.app/</a>

                                <div className='mt-2'>
                                    {/* Overview  */}
                                    <div className='flex flex-col gap-3'>
                                            <h1><span className='text-lg font-semibold pr-1'>Overview:</span>This webpage is an animated interactive project that allows users to drag two footballs across the screen freely, showcasing the capabilities of the Framer Motion library in enhancing frontend design with smooth animations and user-driven movement. The project focuses on creating an immersive experience by combining interactivity and motion.</h1>

                                            {/* Key features  */}
                                            <div className='flex flex-col lg:gap-3 gap-1'>
                                                <p className='text-lg font-semibold'>Key Features: </p>

                                                <div className='lg:pl-6 pl-3 flex flex-col'>
                                                    <p className='text-[16px] font-semibold flex items-center -mt-3'><span className='text-6xl leading-none  pr-1 font-semibold'>·</span>Drag and Drop Functionality: </p>
                                                    <p className='lg:pl-10 pl-6 pr-1 - -mt-4'>Users can click and drag two football icons anywhere within the browser window. This freeform movement adds a playful element to the webpage, inviting users to interact with the objects directly.</p>
                                                </div>


                                                
                                                <div className='lg:pl-6 pl-3  flex flex-col'>
                                                    <p className='text-[16px] font-semibold flex items-center -mt-3'><span className='text-6xl leading-none  pr-1 font-semibold'>·</span>Framer Motion Animation Library:</p>
                                                    <p className='lg:pl-10 pl-6 pr-1 -mt-4'>The page leverages Framer Motion, a popular React animation library, to implement the dragging mechanics and smooth transitions. This results in responsive, fluid animations that feel natural and engaging, enhancing the interactive experience.</p>
                                                </div>
                                                
                                                <div className='lg:pl-6 pl-3  flex flex-col'>
                                                    <p className='text-[16px]  font-semibold flex items-center -mt-3'><span className='text-6xl leading-none  pr-1 font-semibold'>·</span>Smooth, Responsive Interactions: </p>
                                                    <p className='lg:pl-10 pl-6 pr-1  -mt-4'>Built with responsiveness in mind, the page adjusts seamlessly across different screen sizes, ensuring the dragging effect works fluidly on both desktop and mobile devices.</p>
                                                </div>
                                                
                                                <div className='lg:pl-6 pl-3 flex flex-col'>
                                                    <p className='text-[16px]  font-semibold flex items-center -mt-3'><span className='text-6xl leading-none  pr-1 font-semibold'>·</span>Frontend Animation Showcase: </p>
                                                    <p className='lg:pl-10 pl-6 pr-1 - -mt-4'>This project highlights advanced frontend animation techniques and is designed to demonstrate skill in creating interactive, visually compelling web experiences using JavaScript libraries.</p>
                                                </div>


                                            </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                   </div>
                </div>

                <div className='border-t border-black lg:w-[99vw] w-[360px] -ml-4 lg:-ml-32 lg:mt-12 mt-6 '></div>

                {/* Education back ground  */}
                <div className='mt-6'>

                    <p className='lg:text-[3vw] text-3xl font-bold'>Education Section </p>

                    <div className='mt-6'>

                        {/* upper part  */}
                        <div className='flex lg:flex-row flex-col lg:gap-0 gap-6 justify-between'>

                            <div className='lg:w-[620px] bg-yellow-300'>
                                <img src={home} alt="" />
                            </div>

                            <div className='lg:w-[620px]  lg:pl-6 pl-3 lg:pt-12 pt-6 lg:pb-0 pb-6 border shadow-md flex flex-col gap-6 '>

                                    <div>
                                        <p className='lg:text-xl text-lg font-semibold'>Dr. Ram Manohar Lohia Avadh University, Ayodhya</p>
                                        <p className='text-lg  pl-2'>IET Ayodhya</p>
                                        <div className='pl-6 '>
                                            <p>B.Tech (2021 - 2025 ) pursuing</p>
                                            <p className='pl-4'>Computer Science & Engineering</p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className='lg:text-xl text-lg  font-semibold '>Almighty Public Intermediate College Bridgemanganj Maharajganj</p>
                                        <p className='text-lg  pl-2'>Intermediate ( 12th )</p>
                                        <div className='pl-6  '>
                                            <p>2020 ( 76% marks )</p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className='lg:text-xl text-lg  font-semibold'>Shri Ram Paramhash Balika Inter College</p>
                                        <p className='text-lg pl-2'>Highschool (10th )</p>
                                        <div className='pl-6  '>
                                            <p>2018 ( 87% marks )</p>
                                        </div>
                                    </div>

                            </div>

                        </div>

                    </div>
                </div>

                <div className='border-t border-black lg:w-[99vw] w-[360px] -ml-4 lg:-ml-32 lg:mt-12 mt-6 '></div>

                {/* contact section  */}
                <div className='mt-6'>

                    <p className='lg:text-[3vw] text-3xl font-bold'>Contact Us </p>

                    <div className='mt-6'>

                        {/* upper part  */}
                        <div className='flex lg:flex-row flex-col justify-between lg:gap-0 gap-6 lg:items-center'>


                            <div className='lg:w-[620px]  lg:pl-6 py-5 border flex flex-col gap-6 shadow-lg'>
                                
                                <form action="" className='lg:w-[80%] lg:pl-6 flex flex-col gap-3  mx-auto '>

                                    <div className='flex flex-col gap-1'>
                                        <label htmlFor="" className='pl-1 text-lg font-semibold '>Name*</label>
                                        <input type="text" placeholder='Name' className='px-6 py-2 outline-none rounded-lg border shadow-md' />
                                    </div>

                                    <div className='flex flex-col gap-1'>
                                        <label htmlFor="" className='pl-1 text-lg font-semibold '>Email*</label>
                                        <input type="text" placeholder='Email' className='px-6 py-2 outline-none rounded-lg border shadow-md' />
                                    </div>

                                    <div className='flex flex-col gap-1'>
                                        <label htmlFor="" className='pl-1 text-lg font-semibold '>Subject*</label>
                                        <input type="text" placeholder='Subject' className='px-6 py-2 outline-none rounded-lg border shadow-md' />
                                    </div>
                                    
                                    <div className='flex flex-col gap-1'>
                                        <label htmlFor="" className='pl-1 text-lg font-semibold '>Message*</label>
                                        <textarea name="" id="" rows={2} placeholder='Message...'  className='border px-6 py-2 outline-none rounded-lg shadow-md'></textarea>
                                    </div>

                                    <button className='py-2 bg-yellow-400 rounded-lg font-semibold'>Submit</button>

                                    
                                </form>

                            </div>

                            
                            <div className='lg:w-[620px] '>
                                <img src={contactus} alt="" className='lg:h-[440px]'/>
                            </div>

                        </div>

                    </div>
                </div>

                {/* Footer  */}
                <div className=' mt-12'>
                    <div className='flex justify-between pt-10 items-center'>
                            <div className='flex lg:gap-4 gap-2 items-center'>
                                <img src={logo} alt="" />
                                <p className='text-lg font-semibold'>Satynarayan Maurya</p>
                            </div>
                            <div className='flex gap-2 items-center cursor-pointer'>
                                <a href='https://github.com/SatynarayanMaurya' target='_blank' rel="noopener noreferrer" className='text-lg font-semibold'>Github</a>
                                <p className='text-xl'><MdOutlineArrowOutward/></p>
                            </div>
                    </div>
                    <div>

                        <div className='flex lg:flex-row flex-col-reverse lg:justify-between  lg:items-center lg:gap-0 gap-4 mt-3'>
                            <p className='mt-6 lg:ml-10 ml-4'><span className='text-xl'>&copy;</span> Satynarayan Maurya</p>
                            <div className='flex gap-3'>
                                <p className='font-semibold'>mail to : </p>
                                <a href='mailto:satynarayanmaurya111@gmail.com'>satynarayanmaurya111@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                
        </div>
        
    </div>
       

    </>
  )
}

export default Header
