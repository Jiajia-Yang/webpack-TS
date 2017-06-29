import $ from 'jquery'
$.ajax({
    url: "comment/get.action"
}).success((data) => {
    console.log(data)
})