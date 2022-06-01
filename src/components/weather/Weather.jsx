import React from 'react'
import "./weather.css";
import "./main";

function Weather() {

    
    const getCurrentDay = () =>{
        let weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        let currentTime  = new Date();
        days =  weekday[currentTime.getDay()];
        let day = document.getElementById('day');
        day.innerText = days;
    };
    getCurrentDay();

 const getCurrentTime = () => {

        let months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "June",
            "July",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",            
        ];

        let now = new Date();
        let month  = months[now.getMonth()]; //?
        let date = now.getDate();

        let today_date = document.getElementById('today_date');
        let dates = `${date} ${month}`;  
        today_date.innerText = dates;
        
    }; 
    getCurrentTime();

    return (
        <div>
            <div class="container-fluid main_header">
                <div class="row">
                    <div class="col-md-10 col-12 mx-auto">
                        <div class="main_content">
                            <form class="temp_form">
                                <input type="text" id="cityname" placeholder="Enter your city name" autocomplete="off" />
                                <input type="submit" value="search" id="submitBtn" />
                            </form>
                        </div>

                        <div class="tempInformation">
                            <div class="top_layer">
                                <p id="day">Tuesday</p>
                                <p id="today_date">13 OCT</p>

                            </div>
                            <div class="main_layer">
                                <p id="city_name">Get Output Here</p>
                                <div class="middle_layer data_hide">
                                    <p id="temp"><span id="temp_real_val">0</span> <sup>o</sup>C</p>
                                    <p id="temp_status"><i class="fa fa-cloud" aria-hidden="true"></i></p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather