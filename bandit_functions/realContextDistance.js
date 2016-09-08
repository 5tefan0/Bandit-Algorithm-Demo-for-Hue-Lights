
function realContextsDistance(a,b){

// Similarity between times
if (a[0] > b[0])
  { var A = Math.min(Math.abs(a[0]-b[0]),Math.abs(a[0]-(b[0]+24))) ;}
 else { var A = Math.min(Math.abs(b[0]-a[0]),Math.abs(b[0]-(a[0]+24))) ;}


// Similarity between temperatures
var  B = normalDistance3(a[1],b[1]);

// Similarity between weather
if (a[2] == b[2]){
var  C= 1 ;}
else  {var C=0;}


// Similarity between day

if ( numeric.and(a[3]<= 5 , b[3] <=  5)){
  var  D = 1; }
else if  (numeric.and(a[3]> 5 , b[3] > 5) ){
  var D =1; }
else  {var D=0;}

//println("\n Similarities: times $A, temperatures $B, wether $C, day $D. \n")

similarityHistory[t] = Math.pow(( (24-A)/24 + B + C + D)/4,2);

return Math.pow(( (24-A)/24 + B + C + D)/4,2)

}
