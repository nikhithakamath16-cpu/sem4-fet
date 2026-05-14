function checkPassword() {

    let password = "";
    let attempts = 0;

    do {

        password = prompt("Enter Password:");
        attempts++;

    } while(password !== "admin123" && attempts < 3);

    let text = "";

    while(attempts > 0) {

        text += "Attempt " + attempts + "<br>";
        attempts--;

    }

    if(password === "admin123") {
        text += "Login Successful";
    }
    else {
        text += "Access Denied";
    }

    document.getElementById("result").innerHTML = text;
}
