const information = {
    bio: "Though ommonly called \"Tyler\", I am also know me as swedish, my online perona. I reside in San Diego, CA and am currently a full stack web development student due to graduate in June of 2020.",
    about: "This is my about me",
    skills: "I am fluent in HTML, CSS, SCSS, JavaScript (ES6), jQuery, multiple CSS frameworks, and Node.js.",
    projects: "projects here",
    contact: "This is how you contact me"
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
    }
    else if (modeToggle.children().attr('data-active') === 'false') {
        modeToggle.children().css('color', 'black')
        iconsEl.find('a').css('color', 'black')
        headerEl.children().css('color', 'black')
        $('body').css('background-color', 'white')
    }
};

$('button').click(function() {
    console.log(this);
    buttonsEl.children().removeClass('active');
    $(this).addClass('active');
    popUpShow()
});

function popUpShow() {
    if (bioEl.attr('class') === 'active') popUpEl.text(information.bio);
    if (aboutEl.attr('class') === 'active') popUpEl.text(information.about);
    if (skillsEl.attr('class') === 'active') popUpEl.text(information.skills);
    if (projectsEl.attr('class') === 'active') popUpEl.text(information.projects);
    if (contactEl.attr('class') === 'active') popUpEl.text(information.contact);
}

