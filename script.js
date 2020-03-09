// Object with information to spawn in the popup element
const information = {
    bio: "Though commonly called \"Tyler\", I am also know me as swedish, my online perona. I reside in San Diego, CA and am currently a full stack web development student due to graduate in June of 2020.",
    about: "This is my about me",
    skills: "I am fluent in HTML, CSS, SCSS, JavaScript (ES6), jQuery, multiple CSS frameworks, and Node.js.",
    projects: `<a href=""><span>Password Generator</span></a> / <a href=""><span>Day Planner</span></a> / <a href=""><span>Weather Dashboard</span></a> / <a href=""><span>MunchiMaps</span></a> / <a href=""><span>Team Builder</span></a> `,
    contact: 
    `<form action="https://formspree.io/xknravez" method="POST">
        <p>Message</p>
        <input type="text" name="name" placeholder="Let's get coffee!">
        <p>Email</p>
        <input type="email" name="_replyto" placeholder="you@are-rad.com">
        <br>
        <input id='submit' type="submit" value="Send" onClick='stopForm(event)'>
    </form>`
}


// Declaring jQuery variables
const modeToggle = $('.toggle');
const iconsEl = $('.icons');
const headerEl = $('.header');
const buttonsEl = $('.buttons');
const bioEl = $('#bio');
const aboutEl = $('#about');
const skillsEl = $('#skills');
const projectsEl = $('#projects');
const contactEl = $('#contact');
const popUpEl = $('.pop-up');
const submitEl = $('#submit');



// buttonsEl.hide()
popUpEl.hide();

const littleBright = () => {

}

// Darkmdoe toggle that switches class of bulb icon
modeToggle.click(() => {
    if (modeToggle.children().attr('data-active') === 'true') modeToggle.children().attr('data-active', 'false')
    else if (modeToggle.children().attr('data-active') === 'false') modeToggle.children().attr('data-active', 'true')
    darkMode();
})

// Darkmode toggle css settings
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


// Function to transition one pop up to the next on button click
$('button').click(function() {
    // popUpEl.text('')
    hideEl(popUpEl, 'fast');
    setTimeout(() => {
        buttonsEl.find('button').removeClass('active');
        $(this).addClass('active');
        popUpShow();
    }, 500);
});

// Generic hiding function
const hideEl = (element, speed) => {
    element.hide(speed)
}

// Function brings up specific section on button click
const popUpShow = () => {
    if (bioEl.attr('class') === 'active') popUpEl.html(information.bio);
    if (aboutEl.attr('class') === 'active') popUpEl.html(information.about);
    if (skillsEl.attr('class') === 'active') popUpEl.html(information.skills);
    if (projectsEl.attr('class') === 'active') popUpEl.html(information.projects);
    if (contactEl.attr('class') === 'active') popUpEl.html(information.contact);
    popUpEl.show('fast');
}

// Prevent page load on form submission
const stopForm = (event) => {
    event.preventDefault()
}