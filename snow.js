class Snow{
    constructor(x,y,width,hight){
        var options = {
            'restitution' : 0.9,
            'friction'  : 0.9,
        }
         this.loadImage = this.loadImage("snow5.webp");
         this.body = Bodies.circle(x,y,this.r,options);


         this.radius =45;
         this.liftime=100;
         World.add(world,this.body);
    }
changePosition(){
    if(this.body.position.y > height){
        Matter .Body.setPosition(this.body,{x:random(0,1400),y:random(0,50)});
     
    }
}
display(){
    push ();

    var pos=this.body.position;

    imageMode (CENTRE);
    image(this.image,0,0,this.r*2,this.r*2);
    pop ();
}


}