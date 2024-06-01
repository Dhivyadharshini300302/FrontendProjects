let ampm=document.getElementById('ampm');
function displaytime(){
    let dateTime=new Date()
    let hr=dateTime.getHours();
    //console.log(hr)
    let min=dateTime.getMinutes();
    let sec=dateTime.getSeconds();
    if(hr>12){
        hr=hr-12
       
        ampm.innerHTML= "PM"
    }
    else{
        ampm.innerHTML="AM"
    }
    document.getElementById('hours').innerHTML=padzero(hr);
    document.getElementById('mins').innerHTML=padzero(min);
    document.getElementById('seconds').innerHTML=padzero(sec);
    


}
function padzero(num){
    if(num<10){
        return "0"+num;
    }
    else{
        return num;
    }
}
setInterval(displaytime,500)
