function setBackgroundColor_body(color) {
    document.querySelector("body").style.backgroundColor = color;
}

function setColor_body(color) {
    document.querySelector("body").style.color = color;
}

function setColor_link(color) {
    let alist = document.querySelector("a").style.color = color;
}

function day_night_change(self) {
    let target = document.querySelector("body");

    if(self.value == "Day") {
        setBackgroundColor_body('#282828');
        setColor_body('white');
        setColor_link('powderblue');
        self.value = "Night";

    } else {
        setBackgroundColor_body('white');
        setColor_body('black');
        setColor_link('blue');
        self.value = "Day";
    }
}