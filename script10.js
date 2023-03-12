window.onload = choosePic;


var myPix = new Array("blog/snowdinbg.png","je/cyber.gif","about/ruinsbg.png");
var myArray = [
    "Apples",
    "Bananas",
    "Pears"
];

function choosePic() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("myPicture").src = myPix[randomNum];

    //var number = "123";
    //document.getElementById("myText").innerHTML = number;

    //var random2 = myArray[Math.floor(Math.random()*myArray.length)];
    //document.getElementById("myText2").innerHTML = random2;

    if (myPix[randomNum] === "blog/snowdinbg.png"){
        document.getElementById("myText3").innerHTML = "snowdin";
    } else {
        document.getElementById("myText3").innerHTML = "snowdin - not";
    }
};


