const information = {
    bio: "Though commonly called \"Tyler\", I am also know me as swedish, my online perona. I reside in San Diego, CA and am currently a full stack web development student due to graduate in June of 2020.",
    about: "This is my about me",
    skills: "I am fluent in HTML, CSS, SCSS, JavaScript (ES6), jQuery, multiple CSS frameworks, and Node.js.",
    projects: "projects here",
    contact: 
    `<form action="https://formspree.io/xknravez" method="POST">
        <p>Message</p>
        <input type="text" name="name">
        <p>Email</p>
        <input type="email" name="_replyto">
        <br>
        <input id='submit' type="submit" value="Send">
    </form>`
}

const modeToggle = $('.toggle')
const iconsEl = $('.icons')
const headerEl = $('.header')
const buttonsEl = $('.buttons')
const bioEl = $('#bio')
const aboutEl = $('#about')
const skillsEl = $('#skills')
const projectsEl = $('#projects')
const contactEl = $('#contact')
const popUpEl = $('.pop-up')

popUpEl.hide();

modeToggle.click(() => {
    if (modeToggle.children().attr('data-active') === 'true') modeToggle.children().attr('data-active', 'false')
    else if (modeToggle.children().attr('data-active') === 'false') modeToggle.children().attr('data-active', 'true')
    darkMode();
})

const darkMode = () => {
    if (modeToggle.children().attr('data-active') === 'true') {
        modeToggle.children().css('color', 'white')
        iconsEl.find('a').css('color', 'white')
        headerEl.children().css('color', 'white')
        $('body').css('background-color', 'black')
        popUpEl.css('color', "white")
    }
    else if (modeToggle.children().attr('data-active') === 'false') {
        modeToggle.children().css('color', 'black')
        iconsEl.find('a').css('color', 'black')
        headerEl.children().css('color', 'black')
        $('body').css('background-color', 'white')
        popUpEl.css('color', "black")
    }
};


// $('button').click(function() {
    // buttonsEl.find(popUp).remove();
    // popUp.text(information.bio);
    // buttonsEl.append(popUp).fadeIn()
// })

$('button').click(function() {
    // popUpEl.text('')
    hideEl(popUpEl, 'fast');
    setTimeout(() => {
        buttonsEl.find('button').removeClass('active');
        $(this).addClass('active');
        popUpShow();
    }, 500);
});
    
const hideEl = (element, speed) => {
    element.hide(speed)
}

const popUpShow = () => {
    if (bioEl.attr('class') === 'active') popUpEl.html(information.bio);
    if (aboutEl.attr('class') === 'active') popUpEl.html(information.about);
    if (skillsEl.attr('class') === 'active') popUpEl.html(information.skills);
    if (projectsEl.attr('class') === 'active') popUpEl.html(information.projects);
    if (contactEl.attr('class') === 'active') popUpEl.html(information.contact);
    popUpEl.show('fast');
}