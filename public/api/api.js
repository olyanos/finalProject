
function calc_pref(){



    return preffered ;
}


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
                var bulk_data =  res.body;
                

                var u1Lat = bulk_data.firstuserNameData.userLat;
                var u1Long = bulk_data.firstuserNameData.userLong;
                var u2Lat = bulk_data.seconduserNameData.userLat;
                var u2Long = bulk_data.seconduserNameData.userLong;
                var u3Lat = bulk_data.thirduserNameData.userLat;
                var u3Long = bulk_data.thirduserNameData.userLong;
            
                avg_lat  = (Number(u1Lat) + Number(u2Lat) + Number(u3Lat))/3;
                avg_long = (Number(u1Long)+Number(u2Long)+Number(u3Long))/3;

                // User1 pref resturants as strings
                var u1p1 = bulk_data.firstuserNameData.res1;
                var u1p2 = bulk_data.firstuserNameData.res2;
                var u1p3 = bulk_data.firstuserNameData.res3;
                var u1p4 = bulk_data.firstuserNameData.res4;
                var u1p5 = bulk_data.firstuserNameData.res5;
                
                // User2 pref resturants as strings
                var u2p1 = bulk_data.seconduserNameData.res1;
                var u2p2 = bulk_data.seconduserNameData.res2;
                var u2p3 = bulk_data.seconduserNameData.res3;
                var u2p4 = bulk_data.seconduserNameData.res4;
                var u2p5 = bulk_data.seconduserNameData.res5;
                                
                // User3 pref resturants as strings
                var u3p1 = bulk_data.thirduserNameData.res1;
                var u3p2 = bulk_data.thirduserNameData.res2;
                var u3p3 = bulk_data.thirduserNameData.res3;
                var u3p4 = bulk_data.thirduserNameData.res4;
                var u3p5 = bulk_data.thirduserNameData.res5;
                
                // for Mason : write your function here using the varaibles above and store it in var preffered = 'subway';
                
                var preffered = 'subway';

                window.location.href = "../result.html?avg_lat="+avg_lat+"&avg_long="+avg_long+"&preffered="+preffered;

            }
            })





            

}

