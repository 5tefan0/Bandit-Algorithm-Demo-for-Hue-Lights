/*-------------------------------------------------------------------------------
DESCRIPTION: finds distance given by the Normal kernel (μ and x can be vectors)
σ is given (to study which is better)
-------------------------------------------------------------------------------*/
// not sure if you need this ! var numeric = require('numeric-1.2.6');

function normalDistance(mu, x){
var sigma = 35;
var sigmaSquared = Math.pow(sigma,2);
var diffSquared =  numeric.norm2Squared(numeric.sub(mu,x));
var exponent = numeric.div(diffSquared,sigmaSquared);
return Math.exp(-exponent);
}

function normalDistance2(mu, x){
var sigma = 1;
var sigmaSquared = Math.pow(sigma,2);
var diffSquared =  numeric.norm2Squared(numeric.sub(mu,x));
var exponent = numeric.div(diffSquared,sigmaSquared);
return Math.exp(-exponent);
}

function normalDistance3(mu, x){
var sigma = 15;
var sigmaSquared = Math.pow(sigma,2);
var diffSquared =  numeric.norm2Squared(numeric.sub(mu,x));
var exponent = numeric.div(diffSquared,sigmaSquared);
return Math.exp(-exponent);
}
/*---
function normalDistance2(μ, x)
  σ = 1
  return exp( - (norm(μ-x))^2/(σ^2)   )
end

function normalDistance3(μ, x)
  σ = 15
  return exp( - (norm(μ-x))^2/(σ^2)   )
end

//-------------------------------------------------------------------------------*/
