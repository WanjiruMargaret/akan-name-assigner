function akanGenerator() {
    const form = document.getElementById("form"); // Make sure this is your form element
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get values
        let year = document.getElementById("year").value;
        let month = document.getElementById("month").value;
        let day = document.getElementById("dob").value;
        let isMale = document.getElementById("male-input").checked;
        let isFemale = document.getElementById("female-input").checked;

        // Validate inputs
        if (day < 1 || day > 31 || month < 1 || month > 12) {
            alert("Please enter a valid day or month.");
            return;
        }

        // Calculate day of the week
        let date = new Date(`${year}-${month}-${day}`);
        let dayIndex = date.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6

        let daysOfWeek = [
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ];
        let maleAkanNames = [
            "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
        ];
        let femaleAkanNames = [
            "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
        ];

        // Display result
        if (isMale) {
            document.getElementById('result').textContent =
                `You were born on a ${daysOfWeek[dayIndex]}, your Akan Name is ${maleAkanNames[dayIndex]}.`;
        } else if (isFemale) {
            document.getElementById('result').textContent =
                `You were born on a ${daysOfWeek[dayIndex]}, your Akan Name is ${femaleAkanNames[dayIndex]}.`;
        } else {
            alert("Please select a gender.");
        }

        document.getElementById('display').textContent = "This is your Akan Name";
        document.getElementById('result').style.fontSize = "18px";
    });
}

