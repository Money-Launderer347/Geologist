class Rubber{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.5,
            'friction':1.0,
            'density':2
        }
        this.body = Bodies.circle(x, y, radius);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        ellipse(56, 46, 55, 55);
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("blue");
        pop();
      }
}