// let mykey = process.env.MY_API_TOKEN;
// let secretkey = process.env.SECRET_KEY;

let getStories = fetch('https:api.nytimes.com/svc/topstories/v2/home.json?api-key=' + 'uo8kDH7ynagM6B20qSWeGTocjSemJi7k')
    .then(response => response.json())
    .then(data => {
    
    //variable to hold content we need from api
        let timesApi = data.results;
    // loop through api to recieve the first 10 trending posts
    
        // console.log(document.querySelector("#target"))
        for (let i = 0; i < 10; i++) {

//for every top story we create a new CLICKABLE div in "trending today"
// that will hold an individual ny times article

        const post =`
                    <div class="row">
                        <div class="col-md-3">
                            <img alt="" class="img-fluid rounded-circle" src="${timesApi[i].multimedia[0].url}">
                        </div>
                        <div class="col-md-9">
                            <a href="${timesApi[i].url}" target="_blank"><h4 id="trendingTitle">${timesApi[i].title}</h4></a>
                            <p id="trendingAuthor">${timesApi[i].byline}</p>
                        </div>
                    </div>`

        document.querySelector("#target").innerHTML += post 
    }});

