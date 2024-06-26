import React from 'react';
import * as Scroll from 'react-scroll';

export default function Sidebar() {
    let Link = Scroll.Link;

    return (
        <div class="col-lg-5 col-md-12 col-sm-12" id="sticky-sidebar">
            <div class="sticky-top">
                <div class="text-left sidebar-padding">
                    <img src={"./Me.png"} />
                    <h1>
                        Emeka Nkuku
                    </h1>
                    <div class="header-size mb-3">
                        <h5>
                            Aspiring Software Developer
                        </h5>
                    </div>
                    {/* <p>Always engaged in continuous learning</p> */}

                    <div class="gray-text mb-3 d-none d-lg-block">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <Link
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={false}
                                    duration={500}>
                                    About
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link
                                    activeClass="active"
                                    to="projects"
                                    spy={true}
                                    smooth={false}
                                    duration={500}>
                                    Projects
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link
                                    activeClass="active"
                                    to="experience"
                                    spy={true}
                                    smooth={false}
                                    duration={500}>
                                    Experience
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link
                                    activeClass="active"
                                    to="extracurricular"
                                    spy={true}
                                    smooth={false}
                                    duration={500}>
                                    Extracurricular
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <p>
                        <a href="http://www.linkedin.com/in/emeka-nkuku-0b39a5193" target="_blank" rel="noopener noreferrer"><i class="bi header-icon bi-linkedin"></i></a>
                        <a href="https://github.com/emekankuku" target="_blank" rel="noopener noreferrer"><i class="bi header-icon bi-github"></i></a>
                        <a href="mailto: emekankuku@gmail.com" ><i class="bi header-icon bi-envelope-fill"></i></a>
                    </p>
                </div>
            </div>
        </div>
    );
};
