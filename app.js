for (;;) {
let nationality = prompt("Підтвердіть, що ви українець (Напишіть: Слава Україні): ")
    if (nationality == "Слава Україні") {
        alert("Доступ дозволено!")
        break
    } else {
        alert("Доступ заборонено, ви не українець!")
    }
}

function AboutMe() {
    alert("Instagram: @couchytry\nTelegram: @quietnesse")
}
