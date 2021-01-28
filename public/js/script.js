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
                <a href="blogpost.html">
                    <div class="row">
                        <div class="col-md-3">
                            <img alt="" class="img-fluid rounded-circle" src="${timesApi[i].multimedia[0].url}">
                        </div>
                    </div>

                    <div class="col-md-9">
                            <h4 id="trendingTitle">${timesApi[i].title}</h4>
                            <p id="trendingAuthor">${timesApi[i].byline}</p>
                        </div>
                    </div>
                </a>`
                
            document.querySelector("#target").innerHTML += post 

        $("#target").click(function(){
            window.location = $(this).find("a").attr("href");
            return false;
        })
    }});

