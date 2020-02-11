function Burger(name, kCal, gluten, lactose, imgPath){
    this.name = name;
    this.kCal = kCal;
    this.gluten = gluten;
    this.lactose = lactose;
    this.imgPath = imgPath;
    this.info = function(){
        return this.name + " " + this.kCal + "kCal";
    };
}
let HalloumiBurger = new Burger("Halloumi Burger", 700, true, true, "https://www.burgerking.se/011_se/Product%20images/Burgers/image-thumb__15088__product_detail/Sourdough-Halloumi_Produktbilder-Hemsida_1.png");
let Oumph_Burger = new Burger("Oumph Burger", 500, true, false, "img/burger.png");
let AvocadoAndBeanBurger = new Burger("Avocado & Bean Burger",600, true, true, "img/avo_burger.png");
let b1 = new Burger("burger 1", 100, true, true, "img/burger.png");
let b2 = new Burger("burger 2", 200, true, true, "img/avo_burger.png");

const burgers = [HalloumiBurger, Oumph_Burger, AvocadoAndBeanBurger, b1, b2];

let grid = document.getElementById("burgerGrid");



for (let burger of burgers)
{
    var burgerDiv = document.createElement("div");
    var heading = document.createElement("H3");
    var headingText = document.createTextNode(burger.name);
    var pic = document.createElement("img");
    var list = document.createElement("ul");
    var kCal = document.createElement("li");
    var tkCal = document.createTextNode("kCal: " + burger.kCal);
    var gluten = document.createElement("li");
    var tgluten = document.createTextNode("Gluten: " + burger.gluten);
    var lactose = document.createElement("li");
    var tlactose = document.createTextNode("Lactose " + burger.lactose);
    pic.src = burger.imgPath;
    pic.height = 200;
    heading.appendChild(headingText);
    burgerDiv.appendChild(heading);
    burgerDiv.appendChild(pic);
    kCal.appendChild(tkCal);
    gluten.appendChild(tgluten);
    lactose.appendChild(tlactose);
    list.appendChild(kCal);
    list.appendChild(gluten);
    list.appendChild(lactose);
    burgerDiv.appendChild(list);
    grid.appendChild(burgerDiv);
}




/*
let elem = document.getElementById("myID");
for (let burger of burgers)
{
  let listItem = document.createElement("li");
  let listValue = document.createTextNode(burger.info());
  listItem.appendChild(listValue);
  elem.appendChild(listItem);
}
*/

/*

let p1 = document.createElement("p")
let text1 = document.createTextNode(HalloumiBurger.info())
p1.appendChild(text1)
list.appendChild(p1)

let p2 = document.createElement("p")
let t2 = document.createTextNode(Oumph_Burger.info())
p2.appendChild(t2)
list.appendChild(p2)

let p3 = document.createElement("p")
let t3 = document.createTextNode(AvocadoAndBeanBurger.info())
p3.appendChild(t3)
list.appendChild(p3)

let p4 = document.createElement("p")
let t4 = document.createTextNode(b1.info())
p4.appendChild(t4)
list.appendChild(p4)

let p5 = document.createElement("p")
let t5 = document.createTextNode(b2.info())
p5.appendChild(t5)
list.appendChild(p5)
*/
