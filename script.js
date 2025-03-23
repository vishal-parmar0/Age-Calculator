function calculateAge(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    let months = today.getMonth() - birthDate.getMonth();
    if (months < 0 || (months === 0 && dayDifference < 0)) {
        months += 12;
    }

    let days = today.getDate() - birthDate.getDate();
    if (days < 0) {
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
        months--;
    }

    return { age, months, days };
}

function calculateAgeInDays(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);
    const timeDifference = today.getTime() - birthDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
}

function handleCalculateAge() {
    const birthdate = document.getElementById("birthdate").value;

    if (!birthdate) {
        alert("Please enter your birthdate!");
        return;
    }

    const { age, months, days } = calculateAge(birthdate);
    const ageInDays = calculateAgeInDays(birthdate);

    document.getElementById("age").innerText = `${age} years, ${months} months, and ${days} days (${ageInDays} total days)`;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function logExamples() {
    const exampleDate = new Date();
    console.log(`Is 2024 a leap year? ${isLeapYear(2024)}`);
    console.log(`Days in February 2023: ${getDaysInMonth(2023, 1)}`);
    console.log(`Formatted date: ${formatDate(exampleDate)}`);
}

document.getElementById("calculateBtn").addEventListener("click", handleCalculateAge);

logExamples();