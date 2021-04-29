const express = require('express')
const app = express()
const axios = require('axios');
app.use(express.json());


/*
    I will leave this here as an example that you can use
    when building your APIs. I suggest that you try to understand
    what each line is doing. Reach out if you have any questions.
*/
app.get('/exampleApi', function (req, res) {

    axios.get('https://api.agify.io?name=Mike')
    .then(function (response) {
        // handle success and send back a 200 response with the data
        console.log(response.data);
        res.status(200).json(response.data);
    })
    .catch(function (error) {
        /* 
            It is good practice to handle the error and send back the 
            error message that was received from the API call
        */ 
        console.log(error)
        res.status(400).json({error:"An error occurred"});
    })
})


app.post('/translateNews', function(translateReq, translateRes) {
    let language = translateReq.query.language;
    const body = translateReq.body;

    axios.post(`https://codubee-projects-api.herokuapp.com/translate/translateNews?language=${language}`, body)
    .then(function (res) {
        console.log(res.data);
        translateRes.status(200).json(res.data);
    })
    .catch(function (error) {
        console.log(error);
        translateRes.status(400).json({error: "An error occurred in POST /translateNews"});
    });
});

app.get('/getWeather', function(req, res){
    axios.get('https://codubee-projects-api.herokuapp.com/translate/getWeather')
    .then(function(response){
      //handle success and send back a 200 data response
      console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch(function(error){
      //if error occurs:
      console.log(error);
      res.status(400).json({error:"An error occurred."});
    })
})

app.get('/getVaccineNews', function(req, res){
    axios.get('https://codubee-projects-api.herokuapp.com/translate/getVaccineNews')
    .then(function(response){
      //handle success and send back a 200 data response
      console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch(function(error){
      //if error occurs:
      console.log(error);
      res.status(400).json({error:"An error occurred."});
    })
})

app.listen(8080, () => console.log('Listening at locahost:8080'))
