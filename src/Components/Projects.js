import React from "react";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CalculateIcon from '@mui/icons-material/Calculate';

const Projects = () => {
    return (
        <section>
            <div class="container">
                <h2 class="section-headers">
                    Projects
                </h2>
                <div class="item-block position-relative">
                <a href="https://github.com/Sparlly007/Banking-System" 
                class="stretched-link" target="_blank" rel="noopener noreferrer"></a>
                    <div class="experience-headers">
                        Banking Simulator
                        <i class="bi link-arrow bi-arrow-up-right"></i>
                    </div>
                    <div class="experience-subheaders gray-text">
                        May 2020
                    </div>
                    <p class="gray-text">
                        Developed an experimental banking system during school that simulates user registration,
                        checking/savings accounts, and money transfer.
                    </p>
                    <span class="badge badge-class">Java</span>
                    <span class="badge badge-class">JDBC</span>
                    <span class="badge badge-class">MySQL</span>
                </div>
                <div class="item-block position-relative">
                <a href="https://github.com/Sparlly007/SpringBoot-React-Registration-Project" 
                class="stretched-link" target="_blank" rel="noopener noreferrer"></a>
                    <div class="experience-headers">
                        Employee Schedule Maker
                        <i class="bi link-arrow bi-arrow-up-right"></i>
                    </div>
                    <div class="experience-subheaders gray-text">
                        March 2023 - June 2023
                    </div>
                    <p class="gray-text">
                        Developed a scheduling web application that allows employees to create and share their
                        schedules within private groups.  Uses REST API and JWT tokens for user authentication.
                    </p>
                    <span class="badge">Java</span>
                    <span class="badge">Spring Boot</span>
                    <span class="badge">React</span>
                    <span class="badge">Bootstrap</span>
                    <span class="badge">PostgreSQL</span>
                    <span class="badge">Postman</span>
                </div>
                <div class="item-block position-relative">
                    <a href="https://play.unity.com/mg/other/webgl-builds-25362?fbclid=IwAR2YwmYMTsCEUXghIelvlNJUfeFHRL8q4hBhj8lAvNoUU_6vQuNa67aQ-ok"
                        class="stretched-link" target="_blank" rel="noopener noreferrer"></a>
                    <div class="experience-headers">
                        Brain Racer
                        <i class="bi link-arrow bi-arrow-up-right"></i>
                    </div>
                    <div class="experience-subheaders gray-text">
                        January 2021 - March 2021
                    </div>
                    <p class="gray-text">
                        Developed an educational racing game with a group of colleagues using Unity Engine and C# to create scripts for game
                        mechanics, movement, and UI/UX design.
                    </p>
                    <span class="badge">Unity</span>
                    <span class="badge">C#</span>
                    <span class="badge">Bitbucket</span>
                </div>
                <div class="item-block position-relative">
                <a href="https://github.com/charlesjm13/revue/tree/emeka" 
                class="stretched-link" target="_blank" rel="noopener noreferrer"></a>
                    <h2 class="experience-headers">
                        College Social App
                        <i class="bi link-arrow bi-arrow-up-right"></i>
                    </h2>
                    <div class="experience-subheaders gray-text">
                        April 2021 - May 2021
                    </div>
                    <p class="gray-text">
                        Created an application with a group of colleagues as a class assignment.
                        I developed the frontend components that allow incoming freshmen to edit their
                        settings and profile preferences to matchmake with more prospective students.
                    </p>
                    <span class="badge">Vue</span>
                    <span class="badge">Bootstrap</span>
                    <span class="badge">Python</span>
                    <span class="badge">Docker</span>
                </div>
            </div>
        </section>

    );
}

export default Projects;