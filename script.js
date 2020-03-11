// Object with information to spawn in the popup element
const information = {
    bio: `I believe in beauty through simplicity and always focus on a minimalistic approach to web development. Distraction-free design and intuitive navigation gives us more time to do the things we really want to be doing.<br><br> Websites should be responsive and fit our lifestyle, whether that be browsing on a mobile device while on the go or viewing a beautiful web page on a large display at home. Take a look at my <a href="./assets/images/Tyler_Arthur_Web_Dev_Resume.pdf">resume</a> and checkout some <a href="https://github.com/tarthurf">projects</a> I've made.`,
    about: `I am passionate about the earth and its boundless beauty. I constantly think about the stars and how we came to ride spaceship Earth through the cosmos. I am an avid outdoorsman and rock climber. I am a life-long student. I love building web applications.<br><br>I was born and live in sunny, San Diego, California. I have worked in many fields ranging from retail and customer service, beer distribution, delivery driver, dog sitter and walker, building custom military grade rack servers, and teaching young children how to play Dungeons and Dragons.`,
    skills: "I am fluent in HTML, CSS, SCSS, JavaScript (ES6), jQuery, multiple CSS frameworks, and Node.js.",
    projects: `<a href="https://github.com/tarthurf/Secure_Password_Generator"><i class="fas fa-key"></i><span> Password Generator</span></a> / <a href="https://github.com/tarthurf/Day-Planner"><i class="fas fa-calendar-check"></i><span> Day Planner</span></a> / <a href="https://github.com/tarthurf/Weather-Dashboard"><i class="fas fa-cloud"></i><span> Weather Dashboard</span></a> / <a href="https://github.com/tarthurf/MunchiMaps"><i class="fas fa-map-marked-alt"></i><span>MunchiMaps</span></a> / <a href="https://github.com/tarthurf/Employee-Generator"><i class="fas fa-users-cog"></i><span> Team Builder</span></a> `,
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

// color randomizer
function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}

var ranNums = shuffle(["red", "orange", "green", "blue", "purple"]);