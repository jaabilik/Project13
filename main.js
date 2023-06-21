function preload() {

}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.position(320,200)
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(30, 30, 20, 300);
    rect(530, 30, 20, 300);
    rect(70, 340, 450, 20);
    rect(70, 30, 450, 20);
    fill(238, 75, 43);
    stroke(238, 75, 43);
    circle(550, 50, 70);
    circle(50, 50, 70);
    circle(550, 360, 70);
    circle(50, 360, 70);
    image(video, 160, 75, 260, 230);
    tint(tint_color);
}

function takeSnapshot() {
    save('someonesname.png');
}

function filterTint() {
    tint_color = document.getElementById("color_name").value;
}