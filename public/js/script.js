// let mykey = process.env.MY_API_TOKEN;
// let secretkey = process.env.SECRET_KEY;
// function myApiCall() {
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
                            <a class="target2" data-index=${i} href="comments.html" target="_blank"><h4 id="trendingTitle">${timesApi[i].title}</h4></a>
                            <p id="trendingAuthor">${timesApi[i].byline}</p>
                        </div>
                    </div>`
        
        $('#target').append(post);
        // document.querySelector("#target").innerHTML += post
// };

// myApiCall();

    // On click we recieve the index of this specific article in our for loop
        $(".target2").click(function() {
            const index = $(this).data("index");
            // console.log(timesApi[index])
        // sets on click to redirect us to new html that allows the user to add comments to the post
            window.location.href = 'comments.html'
            const newPost = `
                <div class="row">
                    <div class="col-lg-12">
                        <h1>${timesApi[index].title}</h1>
                        <img alt="" class="img-fluid" src="${timesApi[index].multimedia[0].url}"></img>
                        <p>${timesApi[index].byline}</p>
                        <p>${timesApi[index].abstract}</p>
                        <p>Acess Full Article: ${timesApi[index].url}</p>
                    </div>
                </div>`
        // apiPost lives in comments.html, where we will send the data
            $("#apiPost").append(newPost);
        })
    }});
