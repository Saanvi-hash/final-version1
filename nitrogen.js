class Nitrogen{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.image = loadImage("images/nitrogen.png")
    }

    display(){
        imageMode(CENTER)
      image(this.image,this.x,this.y,this.w,this.h)
    
    }

    move(){
        this.y = this.y +5;
    }
}