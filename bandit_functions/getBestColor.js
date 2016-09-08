function getBestColor(t,x,HistoryC,rewards){
  //initialize
var F = [0,0,0,0,0,0];
var SUM_numerator= [0,0,0,0,0,0];
var SUM_denominator=[0,0,0,0,0,0];
//Loop arms
  for (j=0;j<6;j++){
     // Loop over all previous times
     for (i=1;i<t;i++){
        if (HistoryC[i]==j){//decisions[i]==j
             var addend_numerator=0;
             var addend_denominator=0;

//rewards are always 1 if we consider user preference
/*             addend_denominator = realContextsDistance(x[t],x[i]);
             SUM_numerator[j] +=  addend_numerator;
             SUM_denominator[j] += addend_denominator;}*/

             addend_numerator = realContextsDistance(x[t],x[i]);//rewards[i]*realContextsDistance(contextHistory[t],contextHistory[i]);
             addend_denominator = 1;
             SUM_numerator[j] +=  addend_numerator;
             SUM_denominator[j] += addend_denominator;}
        else{}
     }//end loop over tims

            if (SUM_denominator[j]==0)
               {var toPush= 0;}
             else
               {var toPush = SUM_numerator[j]/SUM_denominator[j]}

    F[j]=toPush;
    //console.log(F[j])
  }//end color loop

  console.log(F)
  return  indexOfMax(F)

}

function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}
