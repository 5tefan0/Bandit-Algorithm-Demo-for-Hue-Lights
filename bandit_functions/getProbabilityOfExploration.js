function getProbabilityOfExploration(t,x){
var sum = 0 ;
var addend = 0;
  for (i = 1 ; i < t; i++) {
       // compute kernels and sum them up
       addend = realContextsDistance(x[t],x[i]);
       sum += addend;
    }
if ( sum ==0 ) {
  return 1; }
else {
  return Math.min( 60/sum ,0.2)  ;}
}//end function
/*
function getProbabilityOfExploration(t){
var s = 0 ;
var addend = 0;
  for(i = 1 ; i < t; i++) {
       // compute kernels and sum them up
       addend = realContextsDistance(contextHistory[t], contextHistory[i]);
       s = s + addend;
    }
if ( s ==0 ) {
  return 1; }
else {
  return Math.min( 60/s ,1)  ;}
}//end function*/
