function registerCourse(){

    let courses = [];
    let choice;
    let count = 1;

    do{

        choice = prompt(
            "Enter Course " + count +
            "\nType stop to finish"
        );

        if(choice != null &&
           choice.trim() !== "" &&
           choice.toLowerCase() !== "stop"){

            courses.push(choice);
            count++;
        }

    }while(choice !== null &&
           choice.toLowerCase() !== "stop");

    let i = 0;

    let result =
        "<h3>Registered Courses</h3>";

    while(i < courses.length){

        result +=
            "Course " + (i+1) +
            ": " + courses[i] + "<br>";

        i++;
    }

    if(courses.length === 0){

        result = "No Courses Registered";

    }

    document.getElementById("output").innerHTML =
        result;
}
