fetch('https:api.nytimes.com/svc/topstories/v2/home.json?api-key=',
)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log('ERROR'))