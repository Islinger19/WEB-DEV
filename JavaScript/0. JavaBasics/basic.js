console.log("Hello World!!!!!");
//if-else
if (1 + 1 == 2) {
    console.log("1+1=2");
}
let random = Math.random();
if (random < 0.5) {
    console.log("YOUR NUMBER IS LESS THAN 0.3!!!!");
    console.log(random);
}
else if (random < 0.5) {
    console.log("YOUR NUMBER IS LESS THAN 0.5!!!!");
    console.log(random);
}
else {
    console.log("YOUR NUMBER IS LESS THAN 1!!!!");
    console.log(random);
}


const dayOfWeek = prompt('ENTER A DAY').toLowerCase();

if (dayOfWeek === 'monday') {
    console.log("UGHHH I HATE MONDAYS!")
} else if (dayOfWeek === 'saturday') {
    console.log("YAY I LOVE SATURDAYS!")
} else if (dayOfWeek === 'friday') {
    console.log("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!")
} else {
    console.log("MEH")
}



const password = prompt("please enter a new password");

// Password must be 6+ characters
if (password.length >= 6) {
    // Password cannot include space
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password!");
    } else {
        console.log("Password cannot contain spaces!")
    }
} else {
    console.log("PASSWORD TOO SHORT! Must be 6+ characters")
}

if (password.length >= 6 && password.indexOf(' ') == -1) {
    console.log("Valid Password!");

} else {
    console.log("PASSWORD TOO SHORT! Must be 6+ characters")
}

console.log(!false)