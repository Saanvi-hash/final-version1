class O2{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.image = loadImage("images/oxygen.png")
    }

    display(){
        imageMode(CENTER)
      image(this.image,this.x,this.y,this.w,this.h)
    
    }

    move(){
        this.y = this.y +5;
    }

    hit(player){
    if(player.x-this.x<player.width/2 + this.width/2
        && this.x-player.x<this.width/2+player.width/2
        && player.y-this.y<player.height/2 + this.height/2
        && this.y-player.y<this.height/2 + player.height/2){
        return true
        }

    }

}
