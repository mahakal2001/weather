import React from 'react'
import "./home.css";

function Home() {
    return (
        <div>
            {/* Home page start */}
            <div class="container-fluid main_header">
                <div class="row">
                    <div class="col-md-10 col-12 mx-auto">
                        <div class="row">
                            {/* <!-- left side div --> */}

                            <div class="col-md-6 col-12 main_header_left">
                                <p>Hi, I am Bhim. Welcome to my weather application!!</p>
                                <h1>Get The Latest <span class="text_clr">Weather</span> Info Of Your City</h1>
                                <a href="/weather"><button>check now</button></a>
                            </div>
                            {/* <!-- right side div --> */}
                            <div class="col-md-6 col-12 main_header_right">
                                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img class="w-100" src="images/img.jpg" alt="First slide" width="500" height="400" />
                                        </div>
                                        <div class="carousel-item">
                                            <img class="w-100" src="images/img2.jpg" alt="Second slide" width="500" height="400" />
                                        </div>
                                        <div class="carousel-item">
                                            <img class="w-100" src="images/img3.webp" alt="Third slide" width="500" height="400" />
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home