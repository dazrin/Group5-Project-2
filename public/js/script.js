var mykey = config.MY_KEY;
var secretkey = config.SECRET_KEY;

fetch('https:api.nytimes.com/svc/topstories/v2/home.json?api-key=' + mykey,
)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log('ERROR'))