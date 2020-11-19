var fr, mr;

function setup() 
{
  createCanvas(800,400);
  fr = createSprite(400, 200, 50, 50);
  fr.debug = true;
  fr.shapeColor = "white";
  mr = createSprite(500,300,100,100);
  mr.debug = true;
  mr.shapeColor = "white";
}

function draw() {
  background(0); 
  
  mr.x = mouseX;
  mr.y = mouseY;

  if(isTouching(fr, mr))
  {
    fr.shapeColor = "red";
    mr.shapeColor = "red";
  } else   
  {fr.shapeColor = "white";
   mr.shapeColor = "white";
  }



  drawSprites();
}

function isTouching(object1, object2)
{
  if(object1.x - object2.x < object1.width/2 + object2.width/2 && 
    object2.x - object1.x < object1.width/2 + object2.width/2 && 
    object1.y - object2.y < object1.height/2 + object2.height/2 &&  
    object2.y - object1.y < object1.height/2 + object2.height/2 )
  {
    return true;
  } else
  {
    return false;
  } 
}