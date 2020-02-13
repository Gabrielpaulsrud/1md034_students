function mylog(a) {
    console.log(a);
}

function getAnswers() {
    /*
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var street = document.getElementById("street").value;
    var house = document.getElementById("house").value;
    var payment = document.getElementById("payment").value;
    var radio = document.getElementsByName("Gender");
    for (var i = 0, length = radio.length; i < length; i++){
        if (radio[i].checked) {
            var gender = radio[i].id;
            break
        }
    }
    let answerArray = [name, email, street, house, payment, gender];
    console.log(answerArray);*/

    this.showAnswers = true;
    let burgers = this.burgers;
    for(let i = 0; i < burgers.length; i++){
        var burgerbutton = document.getElementById(burgers[i].name);
        if (burgerbutton.checked) {
            this.selectedburgers.push(burgers[i].name);
            mylog(burgers[i].name);
        }

}
}

//let submitButton = document.getElementById("submitButton");
//let testButton = document.getElementById("testButton");

//submitButton.onclick = mylog;
//testButton.onclick = getAnswers;

/*
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

*/


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
