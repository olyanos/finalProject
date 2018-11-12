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
    target.innerHTML = ui.showResults;
};

var loadAboutUs = function(){
    target.innerHTML = ui.AboutUs;
};


defaultModule();
