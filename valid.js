function validate(){
    let x=document.getElementById("nn").value;
    let y=document.getElementById("rg1").value;
    if(x=="")
    {
        window.alert("please enter name");
    }
    else if(y=="")
    {
        window.alert("enter valid regno");
    }
    else if(y.length<6)
    {
        window.alert("regno must be 5")
    }
    else{
        let form=document.getElementById('form');
       form.setAttribute('action','form.php')
    }
    var z=document.getElementsByClassName("rd1");
    var valid=false;
    for(var i=0;i<z.length;i++){
        if(z[i].checked){
            window.alert("voted");
            valid=true;
            break;
        }
    }
    if(valid)
    {
        window.alert("success");
    }
    else{
         window.alert("please try again");
        return false;
    }
    
}