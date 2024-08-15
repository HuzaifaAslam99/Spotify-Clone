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

    const box = document.createElement("div");
    box.style.height = "280px";
    box.style.paddingTop = "25px";
    Song_box.appendChild(box);

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
    container = parsedElement;

    const mediaQueries = [
        {
            query: "(max-width: 700px)",
            styles: {
                height: "40vh",
                width: "40vh",
                innerWidth: "37vh",
                songFontSize: "40px",
                artistFontSize: "24px",
                boxHeight: "220px",
                infoHeight: "90px"
            }
        },
        {
            query: "(max-width: 550px)",
            styles: {
                height: "35vh",
                width: "35vh",
                innerWidth: "32vh",
                songFontSize: "30px",
                artistFontSize: "18px",
                boxHeight: "160px",
                infoHeight: "70px"
            }
        },
        {
            query: "(max-width: 397px)",
            styles: {
                height: "30vh",
                width: "30vh",
                innerWidth: "27vh",
                boxPaddingTop: "0px",
                boxHeight: "60px",
                infoHeight: "60px"
            }
        },
        {
            query: "(max-width: 370px)",
            styles: {
                height: "25vh",
                width: "25vh",
                innerWidth: "22vh"
            }
        }
    ];

    function applyMediaQueryStyles(mediaQuery) {
        const styles = mediaQueries.find(mq => window.matchMedia(mq.query).matches)?.styles;
        if (styles) {
            parsedElement.style.height = styles.height || "45vh";
            parsedElement.style.width = styles.width || "45vh";
            parsedElement.firstElementChild.style.width = styles.innerWidth || "40vh";
            Song_name.style.fontSize = styles.songFontSize || "50px";
            Artist_name.style.fontSize = styles.artistFontSize || "30px";
            box.style.height = styles.boxHeight || "280px";
            Info.style.height = styles.infoHeight || "120px";
            if (styles.boxPaddingTop) {
                box.style.paddingTop = styles.boxPaddingTop;
            }
        }
    }

    mediaQueries.forEach(({ query }) => {
        const mediaQuery = window.matchMedia(query);
        mediaQuery.addEventListener("change", () => applyMediaQueryStyles(mediaQuery));
        if (mediaQuery.matches) {
            applyMediaQueryStyles(mediaQuery);
        }
    });
});

async function getSongs() {
    let a = await fetch("http://127.0.0.1:53252/songs");
    let response = await a.text();
    
    let div = document.createElement("div");
    div.innerHTML = response;
    let f = div.getElementsByClassName("icon icon icon-mp3 icon-default");
    let songs = [];

    for (let index = 0; index < f.length; index++) {
        const element = f[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href);
        }
    }
    
    return songs;
}

async function main() {
    let songs = await getSongs();
    let song_names = [];
    let artist = [];
    for (const song of songs) {
        let a = song.replaceAll("%20", " ");
        let e = a.indexOf("-");
        let f = a.lastIndexOf(".");
        let g = a.slice(e + 2, f);
        song_names.push(g);

        let b = a.lastIndexOf("/");
        let c = a.lastIndexOf("-");
        let d = a.slice(b + 1, c - 1);
        artist.push(d);
    }

    let play = document.querySelector(".play");
    let song_name = songElement.innerHTML;
    
    let nm = song_names.indexOf(song_name);
    if (nm === -1) return; // No match found

    let audio = new Audio(songs[nm]);
    let currentSong = songs[nm];
    document.querySelector(".song-info").innerHTML = `${song_name} - ${artist[nm]}`;

    let updateInterval;
    let Blink;

    function playMusic() {
        if (audio.paused) {
            audio.play();
            play.src = "img/pause.svg";
            updateInterval = setInterval(updateSongTimeDisplay, 1000);
            audio.addEventListener("timeupdate", () => {
                const progressPercent = (audio.currentTime / audio.duration) * 100;
                document.querySelector(".circle").style.width = progressPercent + "%";
            });
            Blink = setInterval(interval1, 500);
        } else {
            audio.pause();
            play.src = "img/play.svg";
            clearInterval(updateInterval);
            clearInterval(Blink);
            container.style.backgroundColor = "rgb(18, 17, 17)";
        }
    }

    container.addEventListener('click', playMusic);
    play.addEventListener("click", playMusic);

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
            playMusic();
            updateSongTimeDisplay();
        }
    });

    function interval1() {
        if (container.style.backgroundColor === "green") {
            container.style.backgroundColor = "rgb(18, 17, 17)";
        } else {
            container.style.backgroundColor = "green";
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
            const
        })
    }
