class Box{
    constructor(x, y, width, height, angle) {
      this.visiblity = 255
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic : false
            
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        if (this.body.speed<3) {
          var pos = this.body.position
          push()
          translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
       pop()

        }
        else {
          World.remove(world,this.body)
          push()
          this.visiblity=this.visiblity-5
          tint(255,this.visiblity)
          pop()
        }
        
      }
      score(){
        if (this.visiblity < 0 && this.visiblity > -1005){
          score++;
        }
      }
}