import React from "react"

const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3 custom-background">
                <h5 className="text-uppercase">Mighty_Tech</h5>
                <span><p className="fs-2">Links below are not working</p></span>
                <p>Welcome to MIGHTY-TECH, your trusted source for the latest in tech.
                     We're passionate about technology and committed to keeping you informed 
                     in this fast-paced digital world.Our team of experts delivers concise
                      Stay updated with Mighty_Tech blog, where tech meets life.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3 custom-background">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">About</a></li>
                    <li><a href="#!">Terms and Condition</a></li>
                    <li><a href="#!">Contact Me</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3 custom-background">
                <h5 className="text-uppercase">Blogs</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Freelancing</a></li>
                    <li><a href="#!">Starting Tech</a></li>
                    <li><a href="#!">Building Portfolio Website</a></li>
                    <li><a href="#!">Networking</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2023 Copyright:
        <a href="https://mdbootstrap.com/">Mighty_Tech</a>
    </div>

</footer>

export default Footer