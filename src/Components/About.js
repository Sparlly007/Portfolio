import React from 'react';

const About = () => {
    return (
        <section>
            <div class="container">
                <h2 class="section-headers">
                    About Me
                </h2>
                <div class="align-left gray-text">

                    <p>Hello!  I am a recent '22 Knox College graduate with a Bachelors of Arts in Computer Science and Minor in Accounting.
                        Ever since I was little, I was always enthusiastic about videogame development and how programming worked in the backend
                        of the games I enjoyed at a young age. Once I started college, my interest allowed me to become more fascinated about coding
                        and general software development letting me express new ways of critical thinking and creativity.
                    </p>

                    <p>Throughout college, I developed a great work ethic when it comes to collaborating with peers in large-scale projects.
                        Even the most minor projects gave me the perspective I needed to grow my interpersonal and leadership skills and
                        adapt to new environments to become a valuable asset to any team of new faces.</p>

                    <p>Currently, I am working part-time while continuing my experience in learning new frameworks and improving my skills needed
                        for software development.  During my free time, I love cooking, videogames, and staying fit!</p>
                    <a href="/C_Resume.pdf" target="_blank" rel="noopener noreferrer">
                        <div class="experience-headers">View Full Resume<i class="bi link-arrow bi-arrow-up-right"></i></div></a>
                </div>
            </div>
        </section>
    );
};

export default About;