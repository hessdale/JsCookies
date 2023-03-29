
function button_clicker(details) {
    Cookies.set(`button_clicked`, `yes`);
}
let click_me = document.getElementById(`button_1`);
click_me.addEventListener(`click`, button_clicker);

let cookie_clicked = Cookies.get(`button_clicked`);


if (cookie_clicked === undefined) {
    click_me.insertAdjacentHTML(`beforebegin`, `<h1>CLICK BUTTON</h1>`);
} else {
    click_me.insertAdjacentHTML(`beforebegin`, `<h1>Thanks for baking a cookie!</h1>`);
}

let dont_click = document.getElementById(`button_2`);

function cookie_delete(details) {
    Cookies.remove(`button_clicked`);
};

dont_click.addEventListener(`click`, cookie_delete);



let red = document.getElementById(`red`);
let blue = document.getElementById(`blue`);
let purple = document.getElementById(`purple`);

function color_red(details) {
    Cookies.set(`chosen_color`, `red`);
};
function color_blue(details) {
    Cookies.set(`chosen_color`, `blue`);
};
function color_purple(details) {
    Cookies.set(`chosen_color`, `purple`);
};

red.addEventListener(`click`, color_red);
blue.addEventListener(`click`, color_blue);
purple.addEventListener(`click`, color_purple);

