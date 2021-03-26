function buttonPianist() {
    let titleBlock = document.getElementById("title")
    let actorBlock = document.getElementById("actors")
    let text = document.getElementById("text")
    let image = document.getElementById("image")

    let title = titleBlock.children
    let actors = actorBlock.children

    document.getElementById("Pianist").className = "active"
    document.getElementById("Tenet").className = "disactive"
    document.getElementById("Gifted").className = "disactive"

    title[0].innerHTML =   "Pianist"
    title[1].innerHTML =   "September 6, 2002"

    text.innerHTML =    "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II."

    actors[0].innerHTML = "Adrien Brody"
    actors[1].innerHTML = "Thomas Kretschmann"
    actors[2].innerHTML = "Frank Finlay"
    actors[3].innerHTML = "Emilia Fox"
    actors[4].innerHTML = "Michal Zebrowski"

    image.children[0].setAttribute("src", "assets/images/Pianist.jpg")
}

function buttonTenet() {
    let titleBlock = document.getElementById("title")
    let actorBlock = document.getElementById("actors")
    let text = document.getElementById("text")
    let image = document.getElementById("image")

    let title = titleBlock.children
    let actors = actorBlock.children

    document.getElementById("Pianist").className = "disactive"
    document.getElementById("Tenet").className = "active"
    document.getElementById("Gifted").className = "disactive"

    title[0].innerHTML =   "Tenet"
    title[1].innerHTML =   "August 26, 2020"

    text.innerHTML =    "A Protagonist journeys through a twilight world of international espionage on a mission that will unfold \
     in something beyond real time."

    actors[0].innerHTML = "John David Washington"
    actors[1].innerHTML = "Robert Pattinson"
    actors[2].innerHTML = "Elizabeth Debicki"
    actors[3].innerHTML = "Wes Chatham"
    actors[4].innerHTML = "Andrew Howard"

    image.children[0].setAttribute("src", "assets/images/Tenet.jpg")
}

function buttonGifted() {
    let titleBlock = document.getElementById("title")
    let actorBlock = document.getElementById("actors")
    let text = document.getElementById("text")
    let image = document.getElementById("image")

    let title = titleBlock.children
    let actors = actorBlock.children

    document.getElementById("Pianist").className = "disactive"
    document.getElementById("Tenet").className = "disactive"
    document.getElementById("Gifted").className = "active"

    title[0].innerHTML =   "Gifted"
    title[1].innerHTML =   "April 7, 2017 (my birthday is april 7 thats why i love this movie :) )"

    text.innerHTML =    "Frank, a single man raising his child prodigy niece Mary, is drawn into a custody battle with his mother."

    actors[0].innerHTML = "Chris Evans"
    actors[1].innerHTML = "Mckenna Grace"
    actors[2].innerHTML = "Lindsay Duncan"
    actors[3].innerHTML = "Octavia Spencer"
    actors[4].innerHTML = "Jenny Slate"

    image.children[0].setAttribute("src", "assets/images/Gifted.jpeg")
}