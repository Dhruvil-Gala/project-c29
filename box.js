class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.5,
          'density':0.4
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
    
      
      World.add(world, this.body);
    }
    display(x,y,z){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      
     fill(x,y,z);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  