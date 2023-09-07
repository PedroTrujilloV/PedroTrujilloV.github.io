fetch('https://raw.githubusercontent.com/PedroTrujilloV/PedroTrujilloV.github.io/main/data/resume.json')
    .then(response => response.json())
    .then(function(data) {
        console.log("- data: "); 
        console.log(data); 
        // document.write(data);
        Object.entries(data).forEach(([key, value]) => {
            console.log(key, value);
         });
        // $("#text").text(data[1].text);
        // $("#author").text(data[1].author);
    })
    .catch(error => console.log(error));