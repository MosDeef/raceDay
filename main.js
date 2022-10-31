// I like to think I could have come up with this code if you hadn't provided it, but we'll see
let raceNumber = Math.floor(Math.random() * 1000);

// a litte boolean to see when they came onboard
let earlyReg = true
let runnerAge = 18


// early birds get higher numbers
if (earlyReg == true && runnerAge > 18) {
    (raceNumber += 1000)
}
// slackers and children, less so
if (earlyReg == true && runnerAge > 18) {
        console.log(`You'll race at 9:30am ${raceNumber}`)
} else if (earlyReg == false && runnerAge > 18) {
    console.log(`You'll race at 11am ${raceNumber}`)
} else if (runnerAge < 18) {
    console.log(`You'll race at 12:30pm ${raceNumber}`)
} else if (runnerAge === 18) {
    console.log("Please see a race marshall for further instructions")
}
