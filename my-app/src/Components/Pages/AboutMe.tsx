import React, { FC } from 'react';
import ImageHolder from "./Display/ImageHolder"

interface AboutMe {

}
let style = {
    maxWidth: 1200,
    fontSize: 18,
    fontFamily: 'Roboto, sans-serif',
}
let imageStyle = {
    maxWidth: 400
    // 
}

const Title: FC<AboutMe> = ({ children }) => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center p-5">
            <div id="aboutme" style={style}>
                <h1>Biography</h1>

                <div className="d-flex justify-content-center flex-wrap flex-xl-nowrap">
                    
                    <div className='flex-grow-1 px-3'>
                        Hello!  My name is Phil Burney and I am currently pursuing a Computer Science degree at North Carolina State University.
                        I started life in Polk County, North Carolina, a rural county in the foothills of the beautiful Blue Ridge mountains.
                        Here, I grew up, and eventually graduated from high school.  After I graduated, I was accepted to North Carolina State University.
                        After a year of exploring what NCSU’s engineering program had to offer in my freshman, I decided to pursue a degree in Computer Science.
                        At the time, coding seemed very interesting, and Computer Science allows for creativity and problem solving that most other
                        engineering degrees cannot match.  I was very successful in pursuing this degree, and currently have the highest GPA out of the
                        whole senior class.  I plan on graduating in May of 2022, and am currently looking for gainful employment that is either remote
                        or located in Asheville, Spartanburg, Greenville, or Charlotte.
                    </div>
                    <div className="flex-md-shrink-0 p-3">
                        <ImageHolder imageSource='../../images/home.jpg' caption="The Blue Ridge Mountains, the place I call home." />
                    </div>



                </div>
                <h1 className="p-3">Hobbies</h1>

                <div>
                    <h2>Bronco</h2>
                    <div className="d-flex justify-content-center  flex-wrap flex-lg-nowrap">
                    <div className="flex-md-shrink-0 p-3">
                            <ImageHolder imageSource='../../images/bronco.jpg' caption="The Bronco as it was being unloaded off of the tow truck." />
                        </div>
                        <div className='flex-grow-1 px-3 align-self-center'>
                            In middle school, I purchased a 1979 Ford Bronco as a car that I could drive when I became of driving age.  I really loved the
                            lines of the truck, and it is also one of the most capable off roading vehicles that Ford ever made.  It is also highly desirable
                            due to the fact that 1979 was the last year that the Bronco was manufactured with a solid front axle, a feature that is widely
                            valued by the off-roading community.  After getting the Bronco, I quickly learned my way around the engine.  I started with
                            smaller things, such as oil pan removal, and worked my way up to bigger things, such as replacing the carburetor and the rear main seal.
                        </div>
                        
                    </div>

                    <div className="d-flex justify-content-center flex-wrap flex-lg-nowrap">
                        
                        <div className='flex-grow-1 px-3 align-self-center'>
                            The tailgate of the truck also had electrical problems, so I also learned how to do automotive electrical work.  After working out many
                            of the mechanical issues with the truck, the engine threw a connecting rod this past summer as I was taking it out on the highway.
                            This caused the engine to seize up, but I was luckily able to coast to a nearby off ramp.  After assessing the damage to the engine,
                            I decided to do a full engine swap and transmission rebuild.  I am currently working on that project, and am working on preparing an
                            engine to swap in the place of the old one.
                        </div>
                        <div className="flex-md-shrink-0 p-3">
                            <ImageHolder imageSource='../../images/oilpan.jpg' caption="The contents of the oil pan as I was investigating the engine failure.  Yes, those are metal flakes." />
                        </div>

                    </div>

                </div>
                <h2 className="p-3">Web Development</h2>
                In the summer of 2020, I knew that I would need to know JavaScript, HTML and CSS for an upcoming class that I would be taking at my school.
                As a result, I decided to work on a project for the summer that would get me acclimated with all of those technologies.  I decided to work
                on a virtual card deck, which was basically a web application that would allow players to interact with each other and a card deck in
                real time.  This would allow players to play card games with each other.  However, I decided to use minimal frameworks and JavaScript
                libraries.  The result was a project that became too difficult to extend upon, so I eventually decided to stop work on the project.
                However, this was the project that taught me about Javascript, as well as how the HTML and CSS languages worked.  I also learned about
                the Express.js framework and about how sockets worked.  Finally, I learned about the importance of JavaScript frameworks to the modern
                internet.  Modern frameworks make the work of the programmer quicker, more efficient, and make the written code easier to understand.
                The next summer, I decided to work on a website that would serve as my portfolio website, similar to the one you are looking at now.
                I decided to use React, and got a good way through its development, but had to stop work due to the fact that school resumed.  After
                looking through that old code in January of 2022, I decided that it was better to build a different website from scratch that would
                be less complicated and more elegant.  However, this website taught me many of the basics of React, such as component properties and
                how to use them, and many of the more complex ideas of React, such as callback functions.  This knowledge came in handy for the web
                development class that I took for the fall semester of 2021.  In this class, I was able to refine my web development techniques, and
                learn about other web technologies that I hadn’t known about before.
                <h2 className="p-3">Electric Scooter</h2>
                <div className="d-flex justify-content-center flex-wrap flex-lg-nowrap">
                    <div className="flex-md-shrink-0 p-3 align-self-center">
                        <ImageHolder height="500px" imageSource='../../images/scooter.jpg' caption="An image of the electric scooter that I am currently working on.  The frame is aluminum with a steel bottom plate to help protect the internals." />
                    </div>
                    <div className='flex-grow-1 px-3 align-self-center'>
                        Upon first arriving at North Carolina State University, I realized that the campus was very large and spread out.  As a result of this,
                        I decided to purchase an electric scooter from Amazon for $200 a few weeks into the semester to shorten the time that it took for me to
                        get from my dorm room to class.  This proved to be be very good investment, even though the scooter was very cheaply made and ultimately
                        broke down a few months later.  After this, I got a more durable scooter, but it also lacked power.  I decided to look and see what my
                        other options were, and most of the powerful options were too expensive.  As a result, I decided to build my own electric scooter from scratch.
                        I started by designing a frame, which I would be able to bolt together.  I then designed a battery pack, which is made from 18650 batteries
                        and produces 52 volts.  Currently, I am sorting out the design of the rear suspension, which has proven to be challenging due to the forces
                        exerted on the rear subframe.
                    </div>

                </div>
            </div>






        </div>


    );
};

export default Title;