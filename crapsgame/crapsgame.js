// HTML Element IDs
const crapsUsernameInput = "craps-username-input"
const crapsRegistrationPane = "craps-registration-pane"
const crapsMainSection = "craps-main-section"


function registerCrapsPlayer () {
    let crapsUsername = document.getElementById("craps-username-input").value

    // username validation check
    let firstCharIsDigitRegex = /^[0-9]|[^a-zA-Z0-9_]/g 
    if (crapsUsername.length < 5 || firstCharIsDigitRegex.test(crapsUsername)) {
        alert("Username must be at least 5 charaters long, alphanumeric and underscore only, no spaces and cannot start with a number")
    } else {
        removeRegistrationPane()
        showMainGAmeSection()
    }
}

function removeRegistrationPane () {
    document.getElementById(craps-registration-pane).style.display = "none"
}

function showMainGAmeSection () {
    document.getElementById(crapsMainSection).style.display = "block"
}     