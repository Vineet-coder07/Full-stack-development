// class intro in js
class Rectangle{
    constructor(length,width,color){
        this.length=length;
        this.width=width;
        this.color=color;
    }
    area(){
        const area=this.length*this.width;
        return area;
    }
    paint(){
        console.log("Painting with color : ",this.color);
    }
}
    const rect  = new Rectangle(2,4,"red");
    const area =rect.area();
    rect.paint();
    console.log(area);

// Date class in js
const d=new Date();
console.log(d.getFullYear());
console.log(d);


// map is also class in js
const map = new Map();
map.set('name', 'Alice');
map.set('age', 30);
console.log(map.get('name'));
