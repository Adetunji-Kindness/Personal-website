//HTML Element IDs
const crapsUsernameInput = "craps-username-input"
const crapsRegistrationPane = "craps-registration-pane"
const crapsMainSection = "craps-main-section"



function registerCrapsPlayer () {
        let crapsUsername = document.getElementById("craps-username-input").value
        alert("Got: " + crapsUsername)
        removeRegistrationPane()
    }

function removeRegistrationPane () {
    document.getElementById("craps-registration-pane").style.display = "none"
}

function showMainGAmeSection () {

}    