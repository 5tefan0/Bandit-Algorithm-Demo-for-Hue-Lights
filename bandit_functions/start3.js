 // ? var math = require('mathjs'); //to be able to use the math package

function Initialize() {
    // create global variables
    //  n = prompt ("Enter the number of turns");
    t = 0;
    color = 0;
    epsilons = [0];
    rewards = [0];
    decisionVector = [0];
    contextHistory = [0];
    colorHistory = [0];
    userHistory = [0];
    similarityHistory =[0];

//    document.getElementById("show").innerHTML = "The number of turns is " + n;

    //BUTTONS FOR COLORS
    var blue = document.getElementById('color1');
    blue.setAttribute('content', 'color one');
    blue.setAttribute('class', 'btn');
    blue.innerHTML = 'Blue';

    var wrapper = document.getElementById("divWrapper1");
    wrapper.appendChild(blue);

    var red = document.getElementById('color2');
    red.setAttribute('content', 'color one');
    red.setAttribute('class', 'btn');
    red.innerHTML = 'Red';

    var wrapper = document.getElementById("divWrapper2");
    wrapper.appendChild(red);

    var yellow = document.getElementById('color3');
    yellow.setAttribute('content', 'color one');
    yellow.setAttribute('class', 'btn');
    yellow.innerHTML = 'Yellow';

    var wrapper = document.getElementById("divWrapper3");
    wrapper.appendChild(yellow);

    var magenta = document.getElementById('color4');
    magenta.setAttribute('content', 'color one');
    magenta.setAttribute('class', 'btn');
    magenta.innerHTML = 'Magenta';

    var wrapper = document.getElementById("divWrapper4");
    wrapper.appendChild(magenta);

    var cyan = document.getElementById('color5');
    cyan.setAttribute('content', 'color one');
    cyan.setAttribute('class', 'btn');
    cyan.innerHTML = 'Cyan';

    var wrapper = document.getElementById("divWrapper5");
    wrapper.appendChild(cyan);

    var green = document.getElementById('color6');
    green.setAttribute('content', 'color one');
    green.setAttribute('class', 'btn');
    green.innerHTML = 'Green';

    var wrapper = document.getElementById("divWrapper6");
    wrapper.appendChild(green);

    getContext();
}

function numberOfTurns4(value) {
    document.getElementById("showChosenColor").innerHTML = "You chose this color: " + getNameColor(value);
    userHistory[t]=value;
    if(value == colorHistory[t]){rewards[t]=1;}
    else{rewards[t]=0;}
    document.getElementById("Reward").innerHTML = "  The current reward is: " + rewards[t];
    document.getElementById("CumulativeReward").innerHTML = "   The cumulative reward is: " + cumulative(rewards);
}

function cumulative(rew){
var temp=0;
for(i=0;i<=t;i++){ temp += rew[i]; }
return temp;
}
