let myOrange = []; 
let myTokomon;
let amount = 50;
let img;

function preload(){
  img = loadImage('iloveorange.PNG');
}

function setup() {
      createCanvas(windowWidth, windowHeight);
      for (let i = 0; i < amount; i++){
        myOrange[i] = new Orange();
      }
      myTokomon = new Tokomon();

}

function draw() {
      background(250, 250, 200);

      for (let i = 0; i < amount; i++){
        myOrange[i].display();
        myOrange[i].move();
        
        let d1 = dist(myTokomon.tx, myTokomon.ty, myOrange[i].xpos1, myOrange[i].ypos1);
        let d2 = dist(myTokomon.tx, myTokomon.ty, myOrange[i].xpos2, myOrange[i].ypos2);
        if(myOrange[i].c1 && d1 < 45){
          if(keyIsDown(32)){
            myOrange[i].r1 = 0;
            myTokomon.s += 0.5;
          }
        }
        if(myOrange[i].c2 && d2 < 45){
          myOrange[i].r2 += 5;
        }  
      }

      myTokomon.display();
      myTokomon.move();

  }

class Orange{ 

    constructor(){ 
        this.c1 = color(240, 170, 10);
        this.c2 = color(0, 100, 100);
        this.xpos1 = random(width);
        this.ypos1 = random(height);
        this.xpos2 = random(width);
        this.ypos2 = random(height);
        this.xspeed1 = random(1, 5);
        this.yspeed1 = random(1, 5);
        this.xspeed2 = random(1, 5);
        this.yspeed2 = random(1, 5);
        this.r1 = 45;
        this.r2 = 45;
    }

    display() { 
        rectMode(CENTER);
        noStroke();
        fill(this.c1);
        ellipse(this.xpos1, this.ypos1, this.r1);//orange
        fill(this.c2);
        ellipse(this.xpos2, this.ypos2, this.r2);//fake orange
    }
  
    move() {
      this.xpos1 = this.xpos1 + this.xspeed1;
      this.ypos1 = this.ypos1 + this.yspeed1;
      if (this.xpos1 >= width || this.xpos1 < 0){
        this.xspeed1 = this.xspeed1 * -1;
      }
      if (this.ypos1 >= height || this.ypos1 < 0){
        this.yspeed1 = this.yspeed1 * -1;
      } //orange

      this.xpos2 = this.xpos2 + this.xspeed2;
      this.ypos2 = this.ypos2 + this.yspeed2;
      if (this.xpos2 >= width || this.xpos2 < 0){
        this.xspeed2 = this.xspeed2 * -1;
      }
      if (this.ypos2 >= height || this.ypos2 < 0){
        this.yspeed2 = this.yspeed2 * -1;
      } //fake orange
    
  }
}

class Tokomon {

  constructor(){
    this.tspeed = 10;
    this.tx = 35;
    this.ty = 35;
    this.s = 50;
  }

  display(){
    imageMode(CENTER);
    image(img, this.tx, this.ty, this.s, this.s);

  }

  move(){
    this.tx = constrain(this.tx, 35, width-35);
    this.ty = constrain(this.ty, 35, height-35);

    if(keyIsDown(UP_ARROW)){
      this.ty = this.ty - this.tspeed;
    }
    if(keyIsDown(DOWN_ARROW)){
      this.ty = this.ty + this.tspeed;
    }
    if(keyIsDown(LEFT_ARROW)){
      this.tx = this.tx - this.tspeed;
    }
    if(keyIsDown(RIGHT_ARROW)){
      this.tx = this.tx + this.tspeed;
    }
  }
}