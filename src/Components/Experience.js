import React from 'react';

const Experience = () => {
    return (
        <section>
            <div class="container">
                <h2 class="section-headers">
                    Experience
                </h2>

                <div class="item-block position-relative">
                    <a href="https://www.techforgoodinc.org/"
                        class="stretched-link" target="_blank" rel="noopener noreferrer"></a>
                    <div class="experience-headers">Software Engineer Intern . Tech For Good Inc <i class="bi link-arrow bi-arrow-up-right"></i></div>
                    <div class="experience-subheaders gray-text">June 2021 - August 2021</div>
                    <p class="gray-text">
                        Worked in a SCRUM team to improve existing application's frontend components and visual appeal using Material UI
                        that included refactoring the application's routing system between components.
                    </p>
                    <span class="badge badge-class">React</span>
                    <span class="badge badge-class">Material UI</span>
                </div>
                <div class="item-block position-relative">
                    <a href="https://www.knox.edu/"
                        class="stretched-link" target="_blank" rel="noopener noreferrer"></a>
                    <div class="experience-headers">Computer Science Teaching Assistant . Knox College <i class="bi link-arrow bi-arrow-up-right"></i></div>
                    <div class="experience-subheaders gray-text">September 2020 - March 2021</div>
                    <p class="gray-text">
                        Helped the main professors teach students the basics of data structures and algorithms in Computer Science classes
                        that exceed 20 students each
                    </p>
                </div>
                <div class="item-block position-relative">
                    <a href="https://lehman.shoptruevalue.com/"
                        class="stretched-link" target="_blank" rel="noopener noreferrer"></a>
                    <div class="experience-headers">Assistant Manager . True Value <i class="bi link-arrow bi-arrow-up-right"></i></div>
                    <div class="experience-subheaders gray-text">September 2022 - Present</div>
                    <p class="gray-text">
                        Engaged in product inventory management to maximize store profits during cost increases
                        while managing weekly shipment orders to ensure customer purchase orders are fulfilled
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Experience;