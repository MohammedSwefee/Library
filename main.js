
var People = [
	{ 
		username: "Ali",
		password: "123"
	},
	{ 
		username: "Mohammed",
		password: "1234"
	},
	{
		username: "Noor",
		password: "12345"
	}

]

function get() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < People.length; i++) {
		
		if(username == People[i].username && password == People[i].password) {
			//alert( username + " is logged in!!");
        //document.getElementById("p").setAttribute;
           //window.location='homepage.html';
           
	return false;
		}
	}
			return true;
  document.getElementById("p").src='pic_buloff.gif';
	alert("incorrect username or password");
}
 //var a=document.getElementById("a");
 var b=document.getElementById("feedback");
 var user=document.getElementById("username");
 user.addEventListener("keyup",set,false);
function set(){
    if(user.value.length < 20){
       b.textContent=user.value.length;
        document.getElementById("p").setAttribute("src","pic_bulbon.gif")
    }else{
        //document.getElementById("a").src;
     b.textContent="No More!";
                document.getElementById("p").setAttribute("src","pic_bulboff.gif")

    }
}


var date = new Date();
      
  date = date.toLocaleString('en-US');
 
  document.getElementById("msg").innerHTML ="you are in from    "+ date;
