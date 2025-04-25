const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.getElementById("akanForm").addEventListener("submit", function (event){
  event.preventDefault()
   const day = parseInt(document.getElementById("day").value);
   const month = parseInt(document.getElementById("month").value);
   const year = parseInt(document.getElementById("year").value);
   const gender = document.getElementById("gender").value;
//validate inputs
if (!day || !month || !year || !gender) {
  alert("Please fill out all fields.");
  return;
}
//create a date object
const birthDate = new Date(`${year}-${month}-${day}`);

if (isNaN(birthDate)) {
  alert("Invalid date entered.");
  return;
}
const dayIndex = birthDate.getDay(); // 0 = Sunday, 6 = Saturday

    const akanName = gender ==="female" ? femaleNames[dayIndex] : maleNames[dayIndex];
    
    const dayName = daysOfWeek[dayIndex];
    document.getElementById("akanNameDisplay").innerText = 
      `You were born on a ${dayName}, and your Akan name is ${akanName}.`;
})

