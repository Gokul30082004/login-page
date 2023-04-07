let signupbtn= document.getElementById("signupbtn");
let signinbtn= document.getElementById("signinbtn");
let namefield= document.getElementById("namefield");
let title= document.getElementById("title");
signinbtn.onclick= function(){
	namefield.style.maxHeight="0";
	title.innerHTML="Sign In";
	signupbtn.classList.add("dis");
	signinbtn.classList.remove("dis");
}
signupbtn.onclick= function(){
	namefield.style.maxHeight="60px";
	title.innerHTML="Sign Up";
	signupbtn.classList.remove("dis");
	signinbtn.classList.add("dis");
}