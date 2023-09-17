/* Kayla Turner functions for wk 2*/
function funcAlert()
{
    /* variable function for two random #'s*/
    /* one sum function for the sum of var die1 and die2*/
    alert("you pushed the button on 9 11 23");
    var die1 = Math.ceil(Math.random()*6)
    var die2 = Math.ceil(Math.random()*6)
    var sum = die1+die2;

    alert("First num = " + die1 + " Second num" + die2);

    if (die1 % 2 == 0)
    {
    alert("die1 = " + die1 + " you lose!");
    }
/* if the sum  of die 1 and die2 is equal to 7 the player loses*/
   else if (sum ==7)
    {
        alert("YOU LOSE!")
    }
/*if the sum of die1 and die 2 is equal to 11 the player loses*/
    else if (sum ==11)
    {
        alert("YOU LOSE!")
    }

    else
    {
        /*if the sume of die1 and die2 is an even # the player wins*/
        alert("die1 = " + die1 + " you won!"); 
    }
} 
