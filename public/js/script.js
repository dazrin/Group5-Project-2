let mykey = config.MY_KEY;
let secretkey = config.SECRET_KEY;

let getStories = fetch('https:api.nytimes.com/svc/topstories/v2/home.json?api-key=' + mykey,)
    .then(response => response.json())
    .then(data => {
    
    //variable to hold content we need from api
        let timesApi = data.results;
    // loop through api to recieve the first 10 trending posts
    
        // console.log(document.querySelector("#target"))
        for (let i = 0; i < 10; i++) {
        console.log(timesApi[i]);

        const post =`
                    <div class="row">
                        <div class="col-md-3">
                            <img alt="" class="img-fluid rounded-circle" src="${timesApi[i].multimedia[0].url}">
                        </div>
                    </div>

                    <div class="col-md-9">
                            <h4 id="trendingTitle">${timesApi[i].title}</h4>
                            <p id="trendingAuthor">${timesApi[i].byline}</p>
                        </div>
                    </div>`
            document.querySelector("#target").innerHTML += post 
    }});


// Step 1: Get generate 10 random #s from 0-53 (top trending stories)
// Step 2: Perform step one only every 24 hours
// Step 3: Of the 10 numbers chosen get data needed for front page
// Ex:

