
// var mydata = JSON.parse(data);
// $.ajax({
//     url: "https://type.fit/api/quotes",
//     method: "GET"
//   }).then(function(data) {
//     data = JSON.parse(data);
    
//     $("#text").text(data[1].text);
//     $("#author").text(data[1].author);
//   });


//   $.getJSON("data.json", function(json) {
//     console.log(json); // this will show the info it in firebug console
// }).then(function(data) {
//     data = JSON.parse(data);
    
//     document.write(data);
//     // $("#text").text(data[1].text);
//     // $("#author").text(data[1].author);
// });

fetch('./data/resume.json')
    .then(response => response.json())
    .then(function(data) {
        data = JSON.parse(data);
        console.log("- data: "); 
        console.log(data); 
        document.write(data);
        // $("#text").text(data[1].text);
        // $("#author").text(data[1].author);
    })