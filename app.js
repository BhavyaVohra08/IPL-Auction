let playerNumber=1;
let player=[
    {
        "order":"1",
        "name":"AB Devillers",
        "imgSrc":"/Players/AB D.jpg",
        "batavg":"100",
        "bowlavg":"8",
        "openingbid":"2",
        "wkPts":"22"
    },
    {
        "order":"2",
        "name":"Jasprit Bumrah",
        "imgSrc":"/Players/JBumrah.jpg",
        "batavg":"8",
        "bowlavg":"97",
        "openingbid":"2",
        "wkPts":"Nil"
    },
    {
        "order":"3",
        "name":"Rohit Sharma",
        "imgSrc":"/Players/RohitS.jpg",
        "batavg":"88",
        "bowlavg":"18",
        "openingbid":"2",
        "wkPts":"Nil"
    },
    {
        "order":"4",
        "name":"Ben Stokes",
        "imgSrc":"/Players/BStokes.jpg",
        "batavg":"70",
        "bowlavg":"62",
        "openingbid":"2",
        "wkPts":"Nil"
    },
    {
        "order":"5",
        "name":"Hardik Pandya",
        "imgSrc":"/Players/hPandya.png",
        "batavg":"68",
        "bowlavg":"69",
        "openingbid":"2",
        "wkPts":"Nil"
    },
    {
        "order":"6",
        "name":"Mitchael Stark",
        "imgSrc":"/Players/Mitchell-Starc.png",
        "batavg":"22",
        "bowlavg":"100",
        "openingbid":"2",
        "wkPts":"Nil"
    }
    
];

const click = document.getElementById("change");

click.addEventListener("click", myFunction);
function myFunction() {
	let elementValue = document.getElementById("Medication").value;
   

    player.forEach(function(myElement){
        if(myElement.order==elementValue){
            document.getElementById("name").innerHTML = myElement.name;
            document.getElementById("currPlayerImg").style.opacity=0.5;            
            document.getElementById("currPlayerImg").src =""+myElement.imgSrc;
            document.getElementById("currPlayerImg").style.opacity=1;  
            document.getElementById("batAvg").innerHTML = myElement.batavg;
            document.getElementById("bowlPts").innerHTML = myElement.bowlavg;
            document.getElementById("basePrice").innerHTML = myElement.openingbid;
            document.getElementById("wkPts").innerHTML = myElement.wkPts;
        }
        
    })    
}




let curr_bid=document.getElementById("Amount").innerHTML;
let substracting_value;
 
const bidup=document.getElementById("UP");
const sold=document.getElementById("Sold");
bidup.addEventListener("click",increaseBid);
let bids=0;

function increaseBid(){
    if(bids==0){
        curr_bid=document.getElementById("basePrice").innerHTML*100;
        bids++;
    }
    else{
        if((curr_bid/10)%10==2||(curr_bid/10)%10==5){
            curr_bid+=30;
        }
        else{
       curr_bid+=20;}
    }
   
    document.getElementById("Amount").innerHTML=curr_bid;
   
}

sold.addEventListener("click",sell);

function sell (){
    document.getElementById("hidden").innerHTML="Sold at : "+ "\u20B9"+curr_bid+" lakhs";
    document.getElementById("hidden").style.backgroundColor="green";
    document.getElementById("hidden").style.border="2px white solid";
    document.getElementById("hidden").style.borderRadius="5px";
    document.getElementById("Amount").innerHTML="0";

    substracting_value=curr_bid/100;
    curr_bid=0;
    bids=0;
    document.getElementById("hidden").style.display="block";
    document.getElementById("teamSelector").style.display="block";

}

const confirm= document.getElementById("confirm");
confirm.addEventListener("click",find);
function find(){
    let team="MIn";
    let teams= document.forms[0];
    for(let i=0;i<teams.length;i++){
        if(teams[i].checked){
            team=teams[i].value +"";
        }
    }
    let purseId =team+"purse";
    let numId =team+"num";
    

    let curr_purse=document.getElementById(purseId).innerHTML-substracting_value;
    console.log(curr_purse);
    document.getElementById(""+purseId).innerHTML=""+curr_purse.toFixed(2);
    document.getElementById(numId).innerHTML++;
    console.log(team);
    console.log(purseId);
}

document.addEventListener('click', (e) =>
  {
    // Retrieve id from clicked element
    let elementId = e.target.id;
    // If element has id
    if (elementId !== '') {
        console.log(elementId);
         
        
        if(elementId[0]=="l"){
            
        document.getElementsByClassName("modal")[0].style.display="flex";
        document.getElementsByClassName("wallet")[0].style.display="none";
        document.getElementsByClassName("statsHolder")[0].style.display="none";
        document.getElementsByClassName("bids")[0].style.display="none";
        document.body.style.backgroundColor="#eabcbc";
                                                     
        }
       
    }
    // If element has no id
    else { 
        console.log("An element without an id was clicked.");
    }
    
  }
);

const close=document.getElementById("close");
close.addEventListener("click",closeDetails);
function closeDetails(){
    document.getElementsByClassName("modal")[0].style.display="none";
    document.getElementsByClassName("wallet")[0].style.display="flex";
    document.getElementsByClassName("statsHolder")[0].style.display="flex";
    document.getElementsByClassName("bids")[0].style.display="flex";
}

 
