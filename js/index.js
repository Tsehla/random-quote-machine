
var arrMain=[];

function timeWarp(){
//usual caller  
var myReq= new XMLHttpRequest();
//caller direct  
myReq.open( "GET", 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=');
//when ready do
  console.log();
myReq.onload=function(){
// long way round, using JSON.parse() is faster, not funer  
var v=myReq.response.split(':');
  console.log();
//passing mountains and see, i think i can see the light.  
  var authorReadying=v[2].toString().replace('category','').split('\"');
 //aggg it was just a monky with a mirror back 
 var author=authorReadying[1];
 //now its raining, im thirsty so ill drink china imported soup 
 var quoteReadying=v[1].toString().replace('author','').split('\"');
 //finally, i can get that monky been stealing my roof tiles 
var quote= quoteReadying[1];
  console.log();
   //normall console, beats dibugging
  console.log();
  //output separated, not neccessary but fine, simple styling 
  // for the curius, this would work
  //document.getElementById('quote').innerHTML=quote + author;
  document.getElementById('quote').innerHTML='<quoMar>"</quoMar>'.fontcolor(arr[color])+quote.fontcolor(arr[color]);
  document.getElementById('author').innerHTML='---   '.fontcolor(arr[color])+author.fontcolor(arr[color]);
  //---------------------------------
  arrMain.push(quote,author);
  
  //capture click listerner for posts events ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log("this is author :"+author);
document.getElementById('bgColo2').onclick=function(){
 window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='+'"'+quote+'"'+author);}
document.getElementById('bgColo').onclick=function(){
 window.open('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+author+'&content='+quote+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');} 
  

 //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
}
//api call key to server
myReq.setRequestHeader('X-Mashape-Key', 'OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V');
//no comment  
myReq.send(null);
//here is where i change the background color, its not me its part and parcel of the requirements
//my imagination lacks, let me borrow from originator  
var arr=['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
//gotta do lonway to have consitency between bg and text color
  var max=12; //im doing longway anyway
  var min=1;
  var color=Math.floor(Math.random()*(max-min)+min);
  console.log('hello');
  
document.body.style.backgroundColor =arr[color]; 
document.getElementById("button").style.backgroundColor =arr[color];  
document.getElementById("bgColo").style.backgroundColor =arr[color];
document.getElementById("bgColo2").style.backgroundColor =arr[color];
  
console.log();

  
};