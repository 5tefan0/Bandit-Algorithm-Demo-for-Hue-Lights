function getContext(){

t += 1

//WEATHER
var w = Math.floor((Math.random() * 4) + 1);

if (w==1){
document.getElementById("weatherImage").src = "im/sunny.png";
document.getElementById("showWeatherContext").innerHTML = "The weather is sunny.";}

if (w==2){
document.getElementById("weatherImage").src = "im/partially_sunny.png";
document.getElementById("showWeatherContext").innerHTML = "The weather is partially sunny.";}

if (w==3){
document.getElementById("weatherImage").src = "im/cloudy.png";
document.getElementById("showWeatherContext").innerHTML = "The weather is cloudy.";}

if (w==4){
document.getElementById("weatherImage").src = "im/rainy.png";
document.getElementById("showWeatherContext").innerHTML = "The weather is rainy.";}

//TIME
var time = Math.floor((Math.random() * 4) + 1);

if (time == 1){
document.getElementById("showTimeContext").innerHTML = "It's morning.";}

if (time == 2){
document.getElementById("showTimeContext").innerHTML = "It's the afternoon.";}

if (time == 3){
document.getElementById("showTimeContext").innerHTML = "It's the evening.";}

if (time == 4){
document.getElementById("showTimeContext").innerHTML = "It's night.";}

//DAY
var day = Math.floor((Math.random() * 7) + 1);

if (day <= 5){
document.getElementById("showDayContext").innerHTML = "It's a weekday.";}

if (day > 5){
document.getElementById("showDayContext").innerHTML = "It's the weekend!";}

//TEMPERATURE
var temperature = Math.floor((Math.random() * 40) + 40);
document.getElementById("showTemperatureContext").innerHTML = "It's " + temperature + " degrees.";






currentContext = [time, temperature, w, day];
contextHistory[t] = currentContext;
epsilons[t] = getProbabilityOfExploration(t,contextHistory);

// decision
var r = new Rands();
decision = r.bernoulli(epsilons[t], 1)[0];
decisionVector[t]=decision;

//if draw color at random
if(decision == 1) {
//translate numbers
 colorMath = Math.floor((Math.random() * 6));
 colorHistory[t]=colorMath;
 color = getNameColor(colorMath);
 document.getElementById("showAlgorithmColor").innerHTML = " The bandit explored and chose this color: " + color;
}

else{
colorMath = getBestColor(t,contextHistory,userHistory,rewards); //only consider user history
colorHistory[t]=colorMath;
color = getNameColor(colorMath);
document.getElementById("showAlgorithmColor").innerHTML = " The bandit exploited and chose this color: " + color;
}
//else show best color

//get reward and display



}




//convert index of the color to the name, used also in comparison
function getNameColor(number){
if(number == 0){color = "blue";}
else if(number == 1){color = "red";}
else if(number == 2){color = "yellow";}
else if(number == 3){color = "magenta";}
else if(number == 4){color = "cyan";}
else {color = "green";}
return color;
}
