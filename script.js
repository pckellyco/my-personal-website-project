// my event listners are not working , not sure how to fix, currently have onmouseclick and onclick added in image tag
// I would like to replace those with js code

const emailIcon = document.getElementById("email");
const githubIcon = document.getElementById("github");
const linkedinIcon = document.getElementById("linkedin")
const slackIcon = document.getElementById("slack");

function iconMouseOver(icon, id) {
    icon.setAttribute = ('src', `images/${id}-icon.png`)
}

function iconMouseClick(icon, id) {
    icon.setAttribute = ('src', `images/${id}-brown-icon.png`)
}

emailIcon.addEventListener("mouseover", iconMouseOver(emailIcon, "email"))
githubIcon.addEventListener("mouseover", iconMouseOver(githubIcon, "github"))
slackIcon.addEventListener("mouseover", iconMouseOver(emailIcon, "email"))
githubIcon.addEventListener("mouseover", iconMouseOver(githubIcon, "github"))

emailIcon.addEventListener("click", iconMouseClick(emailIcon, "email"))
githubIcon.addEventListener("click", iconMouseClick(githubIcon, "github"))
slackIcon.addEventListener("click", iconMouseClick(emailIcon, "email"))
githubIcon.addEventListener("click", iconMouseClick(githubIcon, "github"))