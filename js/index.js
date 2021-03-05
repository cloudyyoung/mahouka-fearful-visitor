
$("body").append(`
    <div class="bg-main animated fadeIn"></div>
    <div class="logo animated fadeIn delay-1s"></div>
    <div class="chara animated fadeIn delay-1s"></div>
    <div class="flowers animated fadeIn"></div>
`);

for (let t = 0; t < 20; t++) {
    $(".flowers").append(`<div class="flower ${t}"><p></p></div>`);
}