$("#submitNewPost").on("click", handleSubmit);

function handleSubmit(e) {
    e.preventDefault()
    console.log("post started")
    let title = $("#title").val()
    let text = $("#text").val()

    $.ajax({
        type: 'POST',
        url: '/api/data/new',
        body: {
            title: title,
            text: text
        }
    }).then(res => {
        console.log(res)
        console.log("post sent")
    })
}