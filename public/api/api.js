
function create() {

    var obj = {
    name:document.getElementById("UserName").value,
    res1: document.getElementById("rest1").value,
    res2: document.getElementById("rest2").value,
    res3: document.getElementById("rest3").value,
    res4: document.getElementById("rest4").value,
    res5: document.getElementById("rest5").value,
    userLat: document.getElementById("userLat").value,
    userLong: document.getElementById("userLong").value,

    };
    // -------------------------------------  
    var temp = String(obj.name);
    var temp1 = String(obj.res1);
    var temp2 = String(obj.res2);
    var temp3 = String(obj.res3);
    var temp4 = String(obj.res4);
    var temp5 = String(obj.res5);
    var temp10 =String(obj.userLat);
    var temp11 =String(obj.userLong);
    var temp9 = '/account/create';
    var temp7 = '/'
    var temp6  = temp9+temp7+temp+temp7+temp1+temp7+temp2+temp7+temp3+temp7+temp4+temp7+temp5+temp7+temp10+temp7+temp11;
    var url = temp6;
    superagent
        .get(url)
        .end(function(err,res){
            if(err){ console.log(err);}
            else { console.log(res.text);}

        })
   
}

function submituserNames() {
    var usersobj = {
        firstUser:document.getElementById("1st_userName").value,
        secondUser:document.getElementById("2nd_userName").value,
        thirdUser:document.getElementById("3rd_userName").value,
        };

        //There should be a function here returning prefrence






        var preffered =


        var preffered = 'subway';

        var temp20 = '/usersLoc';
        var temp21 = '/';
        var temp22 = String(usersobj.firstUser);
        var temp23 = String(usersobj.secondUser);
        var temp24 = String(usersobj.thirdUser);
        var temp29 = temp20+temp21+temp22+temp21+temp23+temp21+temp24;
        var url = temp29;

        
         superagent
            .get(url)
            .end(function(err,res){
                if(err){ console.log(err);}
                else {
                var result =  res.body;
                var  avg_latq = res.body.avg_lat;
                var  avg_longq = res.body.avg_long;
                window.location.href = "../result.html?avg_lat="+avg_latq+"&avg_long="+avg_longq+"&preffered="+preffered;

            }
            })





            

}

