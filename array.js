let container = null;
let songElement = null;

window.addEventListener('DOMContentLoaded', (event) => {
    const storedContainer = localStorage.getItem("container");
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = storedContainer;

    const parsedElement = tempContainer.firstElementChild;

    parsedElement.style.width = "45vh";
    parsedElement.style.height = "45vh";

    parsedElement.style.display = "grid";
    parsedElement.style.justifyItems = "center";
    parsedElement.style.alignContent = "center";

    parsedElement.firstElementChild.style.width = "40vh";
   
    let SongName = parsedElement.children[1];
    let ArtistName = parsedElement.children[2];
    parsedElement.removeChild(parsedElement.children[1]);
    parsedElement.removeChild(parsedElement.children[1]);

    let Song_box = document.querySelector(".song-box");
    Song_box.appendChild(parsedElement);


    const box = document.createElement("div")
    box.style.height = "280px";

    box.style.paddingTop = "25px";
    Song_box.appendChild(box)

    const Info = document.createElement('div');
    Info.style.height = "120px";
    box.appendChild(Info);


    const Song_name = document.createElement('div');
    Song_name.innerHTML = SongName.innerHTML;

    const Artist_name = document.createElement('div');
    Artist_name.innerHTML = ArtistName.innerHTML;

    Song_name.style.fontFamily = "Roboto";
    Song_name.style.fontSize = "50px";

    Artist_name.style.fontFamily = "Roboto";
    Artist_name.style.fontSize = "30px";

    Info.appendChild(Song_name);
    Info.appendChild(Artist_name);

    Info.style.display = "grid";
    Info.style.alignContent = "space-between";

    songElement = SongName;
    console.log(songElement);
    console.log(songElement.innerHTML);
    
    container = parsedElement;

    const mediaQuery1 = window.matchMedia("(max-width: 700px)");
    mediaQuery1.addEventListener("change", (e) => {
        if (e.matches) {
            parsedElement.style.height = "40vh";
            parsedElement.style.width = "40vh";
            parsedElement.firstElementChild.style.width = "37vh";
            Song_name.style.fontSize = "40px";
            Artist_name.style.fontSize = "24px";
            box.style.height = "220px";
            Info.style.height = "90px";

        }
        else {
            parsedElement.style.height = "45vh";
            parsedElement.style.width = "45vh";
            parsedElement.firstElementChild.style.width = "40vh";
            Song_name.style.fontSize = "50px";
            Artist_name.style.fontSize = "30px";
            box.style.height = "280px";
            Info.style.height = "120px";
        }
    });
    if (mediaQuery1.matches) {
        parsedElement.style.height = "40vh";
        parsedElement.style.width = "40vh";
        parsedElement.firstElementChild.style.width = "37vh";
        Song_name.style.fontSize = "40px";
        Artist_name.style.fontSize = "24px";
        box.style.height = "220px";
        Info.style.height = "90px";
    }

    const mediaQuery2 = window.matchMedia("(max-width: 550px)");
    mediaQuery2.addEventListener("change", (e) => {
        if (e.matches) {
            parsedElement.style.height = "35vh";
            parsedElement.style.width = "35vh";
            parsedElement.firstElementChild.style.width = "32vh";
            Song_name.style.fontSize = "30px";
            Artist_name.style.fontSize = "18px";
            box.style.height = "160px";
            Info.style.height = "70px";

        }
        else {
            parsedElement.style.height = "40vh";
            parsedElement.style.width = "40vh";
            parsedElement.firstElementChild.style.width = "37vh";
            Song_name.style.fontSize = "40px";
            Artist_name.style.fontSize = "24px";
            box.style.height = "220px";
            Info.style.height = "90px";

        }
    });
    if (mediaQuery2.matches) {
        parsedElement.style.height = "35vh";
        parsedElement.style.width = "35vh";
        parsedElement.firstElementChild.style.width = "32vh";
        Song_name.style.fontSize = "30px";
        Artist_name.style.fontSize = "18px";
        box.style.height = "160px";
        Info.style.height = "70px";
    }



    // const mediaQuery3 = window.matchMedia("(max-width: 397px)");
    const mediaQuery3 = window.matchMedia("(max-width: 460px)");
    mediaQuery3.addEventListener("change", (e) => {
        if (e.matches) {
            parsedElement.style.height = "30vh";
            parsedElement.style.width = "30vh";
            parsedElement.firstElementChild.style.width = "27vh";
            box.style.paddingTop = "0px";
            box.style.height = "60px";
            Info.style.height = "60px";
        }
        else {
            parsedElement.style.height = "35vh";
            parsedElement.style.width = "35vh";
            parsedElement.firstElementChild.style.width = "32vh";
            box.style.paddingTop = "25px";
            box.style.height = "160px"
            Info.style.height = "70px";
        }
    });
    if (mediaQuery3.matches) {
        parsedElement.style.height = "30vh";
        parsedElement.style.width = "30vh";
        parsedElement.firstElementChild.style.width = "27vh";
        box.style.paddingTop = "0px";
        box.style.height = "60px";
        Info.style.height = "60px";
    }
    const mediaQuery4 = window.matchMedia("(max-width: 370px)");
    mediaQuery4.addEventListener("change", (e) => {
        if (e.matches) {
            parsedElement.style.height = "25vh";
            parsedElement.style.width = "25vh";
            parsedElement.firstElementChild.style.width = "22vh";
        }
        else {
            parsedElement.style.height = "30vh";
            parsedElement.style.width = "30vh";
            parsedElement.firstElementChild.style.width = "27vh";
        }
    });
    if (mediaQuery3.matches) {
        parsedElement.style.height = "25vh";
        parsedElement.style.width = "25vh";
        parsedElement.firstElementChild.style.width = "22vh";
    }
    // audio = new Audio(songFiles[nm]);

    main(songElement)
});



function main(songElement) {

    let songFiles= ["songs/Ace of Base - Happy Nation.mp3","songs/Imagine Dragons - Believer.mp3","songs/Pharrell Williams - Happy.mp3","songs/Shubh - Cheques.mp3","songs/Shubh - Still Rollin.mp3","songs/Clean Bandit - Rockabye.mp3","songs/Queen - We Will Rock You.mp3","songs/Alan Walker - Faded.mp3","songs/Dua Lipa - No Lie.mp3","songs/Roddy Ricch - The Box.mp3","songs/Ed Sheeran - Shape Of You.mp3"]

    console.log(songFiles);
    let song_names = [];
    let artist = [];

        for (const i of songFiles) {

            let e = i.indexOf("/");
            let f = i.indexOf("-");
            let g = i.slice(e+1, f - 1);
            artist.push(g);

            let c = i.lastIndexOf(".");
            let d = i.slice(f + 2, c);
            song_names.push(d);
        }

    console.log(artist)
    console.log(song_names)

    let play = document.querySelector(".play");

    let song_name = songElement.innerHTML;
    // console.log(song_name);
    
    let index;
    for (const song of song_names) {
        console.log(song);
        console.log(song_name);
        
        if (song_name === song) {
            index = song_names.indexOf(song);
            console.log(song);
        }
    }
    audio = new Audio(songFiles[index]);
    currentSong = songFiles[index];
    document.querySelector(".song-info").innerHTML = `${song_name} - ${artist[index]}`;


    let updateInterval;
    let Blink;

    audio.loop = true;
    function playMusic() {

        if (audio.paused) {
            audio.play();
            play.src = "img/pause.svg";
            updateInterval = setInterval(updateSongTimeDisplay, 1000);
            audio.addEventListener("timeupdate", () => {
                const progressPercent = (audio.currentTime / audio.duration) * 100;
                document.querySelector(".circle").style.width = progressPercent + "%";
                // Blink = setInterval(interval,500)

            });
           Blink = setInterval(interval,500)

        } else {
            audio.pause();
            play.src = "img/play.svg";
            clearInterval(updateInterval)
            clearInterval(Blink)
            container.style.backgroundColor = "rgb(18, 17, 17)"
        }
    }

    container.addEventListener('click', playMusic);
    play.addEventListener("click", playMusic)

    updateWidth()


    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
            playMusic();
            updateSongTimeDisplay();
        }
    });

    function interval(){
    if (container.style.backgroundColor === "green"){
        container.style.backgroundColor = "rgb(18, 17, 17)"
    }
    else{
        container.style.backgroundColor = "green"
    }

    }

    audio.addEventListener("loadedmetadata", function () {
        updateSongTimeDisplay();
    });

    function updateSongTimeDisplay() {
        let time1 = audio.duration;
        let timeD = time1.toFixed(0);
        let secondsD = timeD % 60;
        if (secondsD < 10) {
            secondsD = "0" + secondsD;
        }
        let minutesD = Math.floor(timeD / 60);

        let time2 = audio.currentTime;
        let timeR = time2.toFixed(0);
        let secondsR = timeR % 60;
        if (secondsR < 10) {
            secondsR = "0" + secondsR;
        }
        let minutesR = Math.floor(timeR / 60);

        document.querySelector(".song-time").innerHTML = `${minutesR}:${secondsR} / ${minutesD}:${secondsD}`;
    }
    function updateWidth() {
        document.querySelector(".playline").addEventListener("click", e => {
            const playline = document.querySelector(".playline");
            const circle = document.querySelector(".circle");

            const divRect = playline.getBoundingClientRect();
            const clickX = e.clientX - divRect.left;
            const playbarWidth = divRect.width;
            let clickPercent = (clickX / playbarWidth) * 100;

            audio.currentTime = (audio.duration * clickPercent) / 100;

        });
    }

}
// main()


document.querySelector(".hamburger").addEventListener("click",()=>{
    document.querySelector(".left").style.left ="0"
    console.log("Clicked")
})

document.querySelector(".close").addEventListener("click",()=>{
    document.querySelector(".left").style.left ="-100%"
    console.log("Clicked")
})
