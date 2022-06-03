import React from 'react'
import "./about.css";

function About() {
    return (
        <div>
           
            <div className="menu">
                <div className="constainerf">
                    <form action="https://formsubmit.co/efbf160df9401f83ad37c819f1bf0b36" method="POST">

                        <p><input type="text" placeholder="Your Name" name="Name" /></p>
                        <p><input type="email" placeholder="Email Name" name="email" /></p>
                        <textarea name="message" className="textarea" cols="30" rows="10"></textarea> <br />
                        <button type="submit">SEND</button>
                        <button type="reset">RESET</button>

                    </form>
                </div>

                <div className="rightside">

                    <h2>More Way to Contract</h2>


                    <div className="media-buttons">
                        <a target="blank" href="https://bhim.vercel.app/" className="request-callback"><img src="images/internet.png" alt="Bhim" /></a>
                        <a target="blank" href="https://www.facebook.com/bhim_charan_bhakta/"><img src="images/facebook.png" alt="Facebook" /></a>
                        <a target="blank" href="https://www.instagram.com/bhim_charan_bhakta/"><img src="images/instagram.png" alt="Instragram" /></a>
                    </div>


                    <div className="media-button">
                        <a target="blank" href="https://www.linkedin.com/in/bhim-charan-bhakta-997496175/" className="request-callback"><img src="images/linkedin-brands.svg" alt="LinkedIn" /></a>
                        <a target="blank" href="https://github.com/mahakal2001"><img src="images/github.png" alt="GitHub" /></a>
                        <a target="blank" href="mailto:bhaktabhim2001@gmail.com"><img src="images/gmail.png" alt="Gmail" /></a>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default About