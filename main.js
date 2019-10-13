var container = document.getElementById("container");
var ballSize = 10;
var Frames = 60;
var positionX, positionY;
var velocityX, velocityY;
var data = container.getContext("2d");

positionX = container.width / 2;             
positionY = container.height / 2;       // Initial position of the ball is center. ( Can be changed )

setInterval(ballState,1000 / Frames);

velocityX = Math.floor(Math.random() * 49 + 120) / Frames; // To get the speed in pixel per frame.
velocityY = Math.floor(Math.random() * 49 + 120) / Frames;



// Creating a random starting direction
var temp;
temp = Math.floor(Math.random() * 10);
if(temp >= 3 && temp <= 7)
{
    velocityX = -velocityX;
}
temp = Math.floor(Math.random() * 10);
if(temp >=3 && temp <= 4)
{
    velocityY = -velocityY;
}
if(Math.floor(Math.random() * 2 == 0))
{
    velocityY = -velocityY;
}


function ballState(){
    positionX += velocityX;
    positionY += velocityY;
    if(positionX < 0 && velocityX < 0)
    {
        velocityX = -velocityX;
    }
    if(positionX > container.width && velocityX > 0)
    {
        velocityX = -velocityX;
    }
    if(positionY < 0 && velocityY < 0)
    {
        velocityY = -velocityY;
    }
    if(positionY > container.height && velocityY > 0)
    {
        velocityY = -velocityY;
    }
    data.fillStyle = "#778899";
    data.fillRect(0, 0, container.width, container.height);
    data.fillStyle = "#E0FFFF";
    data.beginPath();
    data.arc(positionX, positionY, ballSize * 0.5, 0, Math.PI * 2);
    data.fill();

}
function alterBallSpeed()                    // Changing the speed of ball
{
    /* This is just a demo on how to change the velocity so I am just adding / subtracting 5 to the velocity.
        Once you are comfortable feel free to try other complex changes like generating a new random value and 
        adding it to the velocity ,etc . */
    if( Math.floor(Math.random() * 10 % 2 == 0) )
    {
        velocityY += 5;
        velocityX += 5;
    }
    else
    {
        velocityY -= 5;
        velocityX -= 5;
    }
}