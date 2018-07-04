  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCtXs6s8vW8RY9OWIUbvcH5mag5JlCWdw8",
    authDomain: "weatherapp-e8fe2.firebaseapp.com",
    databaseURL: "https://weatherapp-e8fe2.firebaseio.com",
    projectId: "weatherapp-e8fe2",
    storageBucket: "weatherapp-e8fe2.appspot.com",
    messagingSenderId: "362158132271"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  var userLocationCity = "";
  var userLocationState = "";
  var userWeather = "";


$.get("auto_location.html", function(html){
    $(html).find("#city").find("#city").each(function(){
        var city = $("#city").html();
        console.log(city);
        alert("City Loaded!");
    })


    /*window.addEventListener("load", function(){
        alert("Page Loaded!");
    
        event.preventDefault();
        
        userLocationCity = $('#city').html();
        
        userLocationState = $('#state').val();
        console.log(userLocationCity,userLocationState);
    
        database.ref().push({
            City: userLocationCity,
            State: userLocationState,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        })
    })*/


});



window.addEventListener("load", function(){
    alert("Page Loaded!");

    event.preventDefault();
    
    userLocationCity = $('#city').html();
    
    userLocationState = $('#state').val();
    console.log(userLocationCity,userLocationState);

    database.ref().push({
        City: userLocationCity,
        State: userLocationState,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    })
})

