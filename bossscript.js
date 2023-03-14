window.onload = bosses;


var myPix = new Array("main/napstablook.webp","main/mettaton.webp","main/sans.webp","main/undyne.webp","main/asgore.webp","main/papyrus.webp","main/doggo.webp","main/asriel.webp");


function bosses() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("myPicture").src = myPix[randomNum];

    if (myPix[randomNum] === "main/mettaton.webp"){
        document.getElementById("textflav").innerHTML = "* Mettaton EX makes his premiere!";
        document.getElementById("boo").innerHTML = "Lights! Camera! Action!";
        document.getElementById("musics").src = "https://static.wikia.nocookie.net/undertale/images/4/4f/Death_by_Glamour_music.ogg/revision/latest?cb=20160401060012";
    } else if (myPix[randomNum] === "main/napstablook.webp"){
        document.getElementById("textflav").innerHTML = "* Napstablook is pretending to sleep.";
        document.getElementById("boo").innerHTML = "zzzzzzzzzzzzzzzzzzzzzz zzzzzzzzzzzz.....";
        document.getElementById("musics").src = "https://static.wikia.nocookie.net/undertale/images/0/04/Ghost_Fight_music.ogg/revision/latest?cb=20160401065211";
    } else if  (myPix[randomNum] === "main/sans.webp"){
        document.getElementById("textflav").innerHTML = "* Just keep attacking.";
        document.getElementById("boo").innerHTML = "it's a beautiful day outside.";
        document.getElementById("musics").src = "https://static.wikia.nocookie.net/undertale/images/e/eb/Song_That_Might_Play_When_You_Fight_Sans_music.ogg/revision/latest?cb=20160102155752";
    }else if  (myPix[randomNum] === "main/undyne.webp"){
        document.getElementById("textflav").innerHTML = "* Smells like sushi.";
        document.getElementById("boo").innerHTML = "NGAAAAAHHH!";
        document.getElementById("musics").src = "https://static.wikia.nocookie.net/undertale/images/f/f5/Spear_of_Justice_music.ogg/revision/latest?cb=20160401061945";
    }else if  (myPix[randomNum] === "main/asgore.webp"){
        document.getElementById("textflav").innerHTML = "* Asgore attacks!";
        document.getElementById("boo").innerHTML = "Human... It was nice to meet you. Goodbye.";
        document.getElementById("musics").src = "https://static.wikia.nocookie.net/undertale/images/7/7c/ASGORE_music.ogg/revision/latest?cb=20160401055247";
    }else if  (myPix[randomNum] === "main/papyrus.webp"){
        document.getElementById("textflav").innerHTML = "* Papyrus blocks the way! ";
        document.getElementById("boo").innerHTML = "NYEH HEH HEH!";
        document.getElementById("musics").src = "https://static.wikia.nocookie.net/undertale/images/8/88/Bonetrousle_music.ogg/revision/latest?cb=20160401064014";
    }else if  (myPix[randomNum] === "main/doggo.webp"){
        document.getElementById("textflav").innerHTML = "* Doggo blocks the way! ";
        document.getElementById("boo").innerHTML = "Don't move an inch! ";
        document.getElementById("musics").src = "https://static.wikia.nocookie.net/undertale/images/8/8c/Dogsong_music.ogg/revision/latest?cb=20220312122504";
    }else if  (myPix[randomNum] === "main/asriel.webp"){
        document.getElementById("textflav").innerHTML = "* It's the end. ";
        document.getElementById("boo").innerHTML = "Urah ha ha... Behold my TRUE power!";
        document.getElementById("musics").src = "https://static.wikia.nocookie.net/undertale/images/5/5b/SAVE_the_World_music.ogg/revision/latest?cb=20160401054436";
    }
    else {
        document.getElementById("textflav").innerHTML = "error - what.";
    }
};

