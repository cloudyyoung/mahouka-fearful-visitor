
$("body").append(`
    <div class="bg-main animated fadeIn"></div>
    <div class="main">
        <div class="logo animated fadeIn delay-1s"></div>
        <div class="chara animated fadeIn delay-2s"></div>
    </div>
    <div class="flowers animated fadeIn"></div>
`);

for (let t = 0; t < 20; t++) {
    $(".flowers").append(`<div class="flower ${t}"><p></p></div>`);
}

let x_center = window.screen.width / 2;

$(document).on("mousemove", (e) => {
    let x_offset = (e.clientX - x_center) * 0.02;
    $("body").css("--offset", `${x_offset}px`)
});