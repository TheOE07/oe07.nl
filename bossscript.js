window.onload = bosses;


var myPix = new Array("main/napstablook.webp","main/mettaton.webp","main/sans.webp","main/undyne.webp","main/asgore.webp","main/papyrus.webp","main/doggo.webp");


function bosses() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("myPicture").src = myPix[randomNum];

    if (myPix[randomNum] === "main/mettaton.webp"){
        document.getElementById("textflav").innerHTML = "* Mettaton EX makes his premiere!";
        document.getElementById("boo").innerHTML = "Lights! Camera! Action!";
    } else if (myPix[randomNum] === "main/napstablook.webp"){
        document.getElementById("textflav").innerHTML = "* Napstablook is pretending to sleep.";
        document.getElementById("boo").innerHTML = "zzzzzzzzzzzzzzzzzzzzzz zzzzzzzzzzzz.....";
    } else if  (myPix[randomNum] === "main/sans.webp"){
        document.getElementById("textflav").innerHTML = "* Just keep attacking.";
        document.getElementById("boo").innerHTML = "it's a beautiful day outside.";
    }else if  (myPix[randomNum] === "main/undyne.webp"){
        document.getElementById("textflav").innerHTML = "* Smells like sushi.";
        document.getElementById("boo").innerHTML = "NGAAAAAHHH!";
    }else if  (myPix[randomNum] === "main/asgore.webp"){
        document.getElementById("textflav").innerHTML = "* Asgore attacks!";
        document.getElementById("boo").innerHTML = "Human... It was nice to meet you. Goodbye.";
    }else if  (myPix[randomNum] === "main/papyrus.webp"){
        document.getElementById("textflav").innerHTML = "* Papyrus blocks the way! ";
        document.getElementById("boo").innerHTML = "NYEH HEH HEH!";
    }else if  (myPix[randomNum] === "main/doggo.webp"){
        document.getElementById("textflav").innerHTML = "* Doggo blocks the way! ";
        document.getElementById("boo").innerHTML = "Don't move an inch! ";
    }
    else {
        document.getElementById("textflav").innerHTML = "error - what.";
    }
};

