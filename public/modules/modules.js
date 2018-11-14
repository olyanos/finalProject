var ui = {};
ui.default = `
    <!-- ------------- YOUR CODE: Default UI ------------- --> 
`;

ui.navigation = `
    <!-- ------------- YOUR CODE: Navigation UI ------------- --> 
`;

ui.createAccount = `
<form>
<div class="form-group">
    <label for="UserName"> User Name </label>
    <input type="text" class="form-control" id="UserName" placeholder="Enter User Name">
</div>
<div class="form-group">
    <label for="UserLat"> Latitude </label>
    <input type="text" class="form-control" id="userLat" placeholder="Enter your Latitude">
</div>
<div class="form-group">
    <label for="UserLong"> Longitude </label>
    <input type="text" class="form-control" id="userLong" placeholder="Enter your longitude">
</div>
<div class="form-group">
    <label for="rest1"> 1st Favorite resturant </label>
    <input type="name" class="form-control" id="rest1" placeholder="Enter favorite resturant">
</div>
<div class="form-group">
    <label for="rest2"> 2nd Favorite resturant </label>
    <input type="name" class="form-control" id="rest2" placeholder="Enter favorite resturant">
</div>
<div class="form-group">
    <label for="rest3"> 3rd Favorite resturant </label>
    <input type="name" class="form-control" id="rest3" placeholder="Enter favorite resturant">
</div>
<div class="form-group">
    <label for="rest4">4th Favorite resturant</label>
    <input type="name" class="form-control" id="rest4" placeholder="Enter favorite resturant">
</div>
<div class="form-group">
    <label for="rest5">5th Favorite resturant</label>
    <input type="name" class="form-control" id="rest5" placeholder="Enter favorite resturant">
</div>
<div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">I agree to the terms and conditions where LetsMeet have the right to save your data</label>
</div>
<button type="button" onclick="create()" class="btn btn-primary">Submit</button>
<br />
<br />

</form>

`;

ui.letsMeet = `
<form>

<h3> Enter the user names for each member </h3>
<div class="form-group">
    <label for="UserName"> 1st user name</label>
    <input type="text" class="form-control" id="1st_userName" placeholder="Enter User Name">
</div>
<div class="form-group">
    <label for="UserName"> 2nd user name </label>
    <input type="text" class="form-control" id="2nd_userName" placeholder="Enter User Name">
</div>
<div class="form-group">
    <label for="UserName"> 3rd user name </label>
    <input type="text" class="form-control" id="3rd_userName" placeholder="Enter User Name">
</div>
</div>
<button type="button" onclick="submituserNames()" class="btn btn-primary">Submit</button>
<br />
<br />
</form>

`;

ui.AboutUs = `
    <!-- ------------- YOUR CODE: Deposit UI ------------- --> 
    <h1> About Us </h1> 
`;

ui.showResults = `


    <h1>Place Searches</h1>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <style>

      #map {
        height: 100%;
      }
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>

      <script>

      var map;
      var infowindow;

      function initMap() {
        var pyrmont = {lat: 42.3601, lng: -71.0589};
        //var pyrmont = {lat: u1Lat, lng: u1Long};
        map = new google.maps.Map(document.getElementById('map'), {
          center: pyrmont,
          zoom: 15
        });

        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: pyrmont,
          radius: 500,
          type: ['resturant']
        }, callback);
      }

      function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
          }
        }
      }

      function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
      }
    </script>
  <body>
    <div id="map"></div>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBiYrja2-ZjF2JEpiI_W16ODrGBBsHijOs&callback=initMap&libraries=places">
    </script>
      </body>
   

`;

var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;

var defaultModule = function(){
    target.innerHTML = ui.default;
};

var loadCreateAccount = function(){
    target.innerHTML = ui.createAccount;
};

var loadLetsMeet = function(){
    target.innerHTML = ui.letsMeet;
};

var loadshowResults= function(){
    target.innerHTML = ui.showResults
};

var loadAboutUs = function(){
    target.innerHTML = ui.AboutUs;
};


defaultModule();
