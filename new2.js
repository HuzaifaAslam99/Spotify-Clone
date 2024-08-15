let container = null;
let songElement = null;

window.addEventListener('DOMContentLoaded', (event) => {
    const storedContainer = localStorage.getItem("container");
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = storedContainer;

    // console.log("tempContainer: " + tempContainer.innerHTML);
    const parsedElement = tempContainer.firstElementChild;
    // console.log("parsedElement: " + parsedElement.outerHTML);

    // parsedElement.style.width = "280px";
    // parsedElement.style.height = "280px";
    parsedElement.style.width = "45vh";
    parsedElement.style.height = "45vh";
    // parsedElement.style.backgroundColor = "green";
    // parsedElement.style.backgroundColor = "red";

    parsedElement.style.display = "grid";
    parsedElement.style.justifyItems = "center";
    parsedElement.style.alignContent = "center";

    // parsedElement.firstElementChild.style.width = "250px";
    parsedElement.firstElementChild.style.width = "40vh";
   
    let SongName = parsedElement.children[1];
    let ArtistName = parsedElement.children[2];
    parsedElement.removeChild(parsedElement.children[1]);
    parsedElement.removeChild(parsedElement.children[1]);

    let Song_box = document.querySelector(".song-box");
    Song_box.appendChild(parsedElement);


    const box = document.createElement("div")
    // box.style.width = "280px";
    box.style.height = "280px";
    // box.style.position = "relative";
    // box.style.left = "30px";
    // box.style.backgroundColor = "purple"
    box.style.paddingTop = "25px";
    Song_box.appendChild(box)

    // parsedElement.style.backgroundColor = "green";
    const Info = document.createElement('div');
    // Info.style.width = "400px";
    Info.style.height = "120px";
    // Info.style.backgroundColor= "red"
    box.appendChild(Info);


    const Song_name = document.createElement('div');
    Song_name.innerHTML = SongName.innerHTML;
    // console.log(Song_name);
    const Artist_name = document.createElement('div');
    Artist_name.innerHTML = ArtistName.innerHTML;

    Song_name.style.fontFamily = "Roboto";
    Song_name.style.fontSize = "50px";

    Artist_name.style.fontFamily = "Roboto";
    Artist_name.style.fontSize = "30px";

    Info.appendChild(Song_name);
    Info.appendChild(Artist_name);

    Info.style.display = "grid";
    // Info.style.justifyItems = "center";
    Info.style.alignContent = "space-between";
    // Info.style.position = "relative";
    // Info.style.left = "10px";

    // Song_box.appendChild(Info);

    songElement = SongName;

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
            // console.log("correct")

        }
        else {
            parsedElement.style.height = "45vh";
            parsedElement.style.width = "45vh";
            parsedElement.firstElementChild.style.width = "40vh";
            Song_name.style.fontSize = "50px";
            Artist_name.style.fontSize = "30px";
            box.style.height = "280px";
            Info.style.height = "120px";
            // console.log("wrong")
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

    const mediaQuery3 = window.matchMedia("(max-width: 397px)");
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
});

async function getSongs() {
    // let a = await fetch("/songs/");
    // let a = await fetch("http://127.0.0.1:51422/songs");
    let a = await fetch("https://spotify-clone-ashy-beta.vercel.app/songs");
    let response = await a.text(); 
    console.log(response);
    
    let div = document.createElement("div");
    div.innerHTML = response;
    let f = div.getElementsByClassName("icon icon icon-mp3 icon-default");
    // console.log(f)
    let songs = [];

    for (let index = 0; index < f.length; index++) {
        const element = f[index];
        if (element.href.endsWith(".mp3")) {
            // let e = (element.href).indexOf("/songs");
            // let a = element.href.slice(e)
            songs.push(element.href);
        }
    }
    // console.log(songs);
    
    return songs;
}

async function main() {
    let songs = await getSongs();
    console.log(songs);
    let song_names = [];
    let artist = [];
    for (const song of songs) {
        // if (song==".htaccess"){
        //     continue
        // }
        // else{
        let a = song.replaceAll("%20", " ");
        // let e = a.indexOf("-");
        // let f = a.lastIndexOf(".");
        // let g = a.slice(e + 2, f);
        // song_names.push(g);

        let b = a.lastIndexOf("/");
        let c = a.lastIndexOf("-");
        let d = a.slice(b + 1, c - 1);
        artist.push(d);

        // let e = a.lastIndexOf("-");
        let f = a.lastIndexOf(".");
        let g = a.slice(c + 2, f);
        song_names.push(g);


        // let b = a.lastIndexOf("/");
        // let c = a.lastIndexOf("-");
        // let d = a.slice(b + 1, c - 1);
        // artist.push(d);

        // }

    }
    console.log(artist)
    console.log(song_names)

    let play = document.querySelector(".play");

    let song_name = songElement.innerHTML;
    console.log(song_name);
    
    let nm = "";
    for (const song of song_names) {
        if (song_name == song) {
            nm = song_names.indexOf(song);
        }
    }
    audio = new Audio(songs[nm]);
    currentSong = songs[nm];
    document.querySelector(".song-info").innerHTML = `${song_name} - ${artist[nm]}`;


    let updateInterval;
    let Blink;
    // let update;
    audio.loop = true;
    function playMusic() {
        // if (audio.currentTime/audio.duration===1){
        //     // clearInterval(Blink)
        //     audio.currentTime = 0;
        //     console.log( audio.currentTime)
        //     audio.play()
        //    }
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
main()


document.querySelector(".hamburger").addEventListener("click",()=>{
    document.querySelector(".left").style.left ="0"
    console.log("Clicked")
})

document.querySelector(".close").addEventListener("click",()=>{
    document.querySelector(".left").style.left ="-100%"
    console.log("Clicked")
})
