function fn () {
   
    var email=document.getElementById("inputEmail").value;
    var password=document.getElementById("inputPassword").value;
    console.log("loging...");
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:8050/auth";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
                    //var json = /*JSON.parse(xhr.responseText);
            if(xhr.responseText==="1")
                window.location.href='melcow.html';
            else
                alert('Invalid email or Password');
        }
    };
    var data = JSON.stringify({"email": email,"pass": password});
    xhr.send(data); 
}
 function sign() {
    var fname=document.getElementById("fn").value;
    var lname=document.getElementById("ln").value; 
    var email=document.getElementById("inputEmail").value;
    var password=document.getElementById("inputPassword").value;
    console.log("signing up...");
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:8050/insert";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
                    //var json = /*JSON.parse(xhr.responseText);
            if(xhr.responseText==="1"){
                alert('User is added');
                window.location.href='sigin.html';
            }
                
                   
            else
                alert('email address already exist');
        }
    };
    var data = JSON.stringify({"fname": fname,"lname":lname,"email":email,"pass": password});
    xhr.send(data); 
 }

 
