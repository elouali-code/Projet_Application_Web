//JavaScript pour le login


class User{
	constructor(idU,mdpU, roleU) {
            this.idU = idU;
            this.mdpU = mdpU;
            this.roleU = roleU;
        }
        getIdUser(){
            return this.idU;
        }
        getMdpUser() {
            return this.mdpU;
        }
        getRoleUser() {
            return this.roleU;
        }
}


const u1 = new User('test1', 'mdptest1', 'ADMIN');
const u2 = new User('test2', 'mdptest2', 'ADMIN');
const u3 = new User('test3', 'mdptest3', 'USER');
const u4 = new User('test4', 'mdptest4', 'USER');
const u5 = new User('test5', 'mdptest5', 'USER');
let users=new Array(u1,u2,u3,u4,u5);


 
function distruiberPage(pfId,pfMdp){
    const result = users.find(({ idU }) => idU === pfId);
 
    if(typeof result =='undefined'){
        alert("Something wrong with your id ");
    }
    else{
        if(result.getMdpUser()!=pfMdp){
            alert("Your password is wrong");
        }
        else{
        if(result.getRoleUser()=="ADMIN"){
        location.href="./home_Admin.html";

        }
        if(result.getRoleUser()=="USER"){
        location.href="./home_User.html";
        }
    }
    }

}


function login(){
	var login=document.getElementById("username").value;
	var mdp=document.getElementById("password").value;
	distruiberPage(login,mdp);
}

function forget(){
    name=document.getElementById("username").value;
    url = "forget_pwd.html?name="+name;
    window.location.href = url;
}

function submit1(name) {
    const result = users.find(({ idU }) => idU === name);
     if(typeof result =='undefined'){
        alert("user not exists!");
    }
    else{
        var mdpU=result.getMdpUser();
        url="index.html?name="+name+"&mdp="+mdpU;
        window.location.href=url;
    }

}

 function hideMdp() {
    var Img = document.getElementById("imageShow");
    var mdp = document.getElementById("password");
        if (mdp.type == "password") {
            mdp.type = "text";
            Img.src ="./images/show.png";
        } else {
            mdp.type = "password";
            Img.src = "./images/hide.png";
        }
    }



