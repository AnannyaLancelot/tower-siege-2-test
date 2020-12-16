const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground1,ground2;


var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12,box13;
var box14,box15,box16,box17,box18;
var box19,box20,box21,box22;
var box23,box24,box25;
var box26,box27;
var box28;

var box29,box30,box31,box32;
var box33,box34,box35;
var box36,box37;
var box38;

var polygon;
var slingshot



function preload(){

}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    //ground 1
    ground1=new Ground(500,400,300,10);
    //1st level of the first ground
    box1=new Box(378,375,40,40)
    box2=new Box(418,375,40,40)
    box3=new Box(458,375,40,40)
    box4=new Box(498,375,40,40)
    box5=new Box(538,375,40,40)
    box6=new Box(578,375,40,40)
    box7=new Box(618,375,40,40)
    //2nd level of the first ground
    box8=new Box(400,335,40,40)
    box9=new Box(440,335,40,40)
    box10=new Box(480,335,40,40)
    box11=new Box(520,335,40,40)
    box12=new Box(560,335,40,40)
    box13=new Box(600,335,40,40)
   //3rd level of the first ground
    box14=new Box(420,295,40,40)
    box15=new Box(460,295,40,40)
    box16=new Box(500,295,40,40)
    box17=new Box(540,295,40,40)
    box18=new Box(580,295,40,40)
    //4th level of the first ground
    box19=new Box(440,255,40,40)
    box20=new Box(480,255,40,40)
    box21=new Box(520,255,40,40)
    box22=new Box(560,255,40,40)
    //5th level of the first ground
    box23=new Box(460,215,40,40)
    box24=new Box(500,215,40,40)
    box25=new Box(540,215,40,40)
    //6th level of the first ground
    box26=new Box(480,175,40,40)
    box27=new Box(520,175,40,40)
    //7th level of the first ground
    box28=new Box(500,135,40,40)

    //second ground
    ground2=new Ground(882,300,200,10)
    //1st level of the second ground
    box29=new Box(820,275,40,40)
    box30=new Box(860,275,40,40)
    box31=new Box(900,275,40,40)
    box32=new Box(940,275,40,40)
    //2nd level of the second ground
    box33=new Box(840,235,40,40)
    box34=new Box(880,235,40,40)
    box35=new Box(920,235,40,40)
    //3rd level of the second ground
    box36=new Box(860,195,40,40)
    box37=new Box(900,195,40,40)
    //4th level of the second ground
    box38=new Box(880,155,40,40)

    //polygon to shoot
    polygon=new Polygon(150,200)
    //slingshot
    slingshot=new Slingshot(polygon.body,{x:140,y:200})



    
}

function draw(){
    background(1);
    Engine.update(engine);

    ground1.display();
   //1st level display
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    //2nd level display
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    //3rd level display
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    //4th level diaplay
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    //5th level diaplay
    box23.display();
    box24.display();
    box25.display();
    //6th level diaplay
    box26.display();
    box27.display();
    //7th level diaplay
    box28.display();

    //ground 2
    ground2.display();
    //1st level diplay
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    //2nd level diplay
    box33.display();
    box34.display();
    box35.display();
    //3rd level diplay
    box36.display();
    box37.display();
    //4th level diplay
    box38.display();

    //polygon
    polygon.display();

    slingshot.display()
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
