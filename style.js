// Page Navigation
function showPage(pageId, button) {

    // Hide all pages
    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    // Show selected page
    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    // Remove active from buttons
    const buttons = document.querySelectorAll(".sidebar button");

    buttons.forEach(function(btn) {
        btn.classList.remove("active");
    });

    // Add active to clicked button
    if (button) {
        button.classList.add("active");
    }
}


// AI Suggestion
function getAISuggestion() {

    const suggestions = [
        "Your attendance is good. Continue maintaining it above 90%.",
        "You can improve your DBMS marks by practicing SQL queries.",
        "Based on your performance, Full Stack Web Development can be a useful career area.",
        "Try completing one programming practice problem every day.",
        "Your academic performance is improving. Keep maintaining consistency."
    ];

    const randomIndex =
        Math.floor(Math.random() * suggestions.length);

    const result =
        document.getElementById("aiResult");

    if (result) {
        result.innerHTML =
            "🤖 AI Suggestion: " +
            suggestions[randomIndex];
    }
}


// Attendance Check
function checkAttendance() {

    const attendance = 92;

    if (attendance >= 90) {
        alert("Excellent! Your attendance is " + attendance + "%.");
    }
    else if (attendance >= 75) {
        alert("Your attendance is " + attendance + "%. Maintain it carefully.");
    }
    else {
        alert("Your attendance is low. Please attend classes regularly.");
    }
}


// Marks Result
function calculateResult() {

    const marks = [93, 88, 83, 78];

    let total = 0;

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    const average = total / marks.length;

    alert(
        "Total Marks: " +
        total +
        "\nAverage: " +
        average.toFixed(2) +
        "%"
    );
}


// Complaint
function submitComplaint() {

    const complaint =
        document.getElementById("complaint");

    if (!complaint || complaint.value.trim() === "") {
        alert("Please enter your complaint.");
        return;
    }

    alert("Complaint submitted successfully!");

    complaint.value = "";
}


// Appointment
function bookAppointment() {

    alert(
        "Hospital appointment request submitted successfully!"
    );
}


// Library Book
function borrowBook(bookName) {

    alert(
        "📚 " +
        bookName +
        " has been added to your library."
    );
}


// Notification
function showNotification(message) {

    alert("🔔 " + message);
}


// Logout
function logout() {

    const confirmLogout =
        confirm("Are you sure you want to logout?");

    if (confirmLogout) {
        alert("Logged out successfully.");
        window.location.reload();
    }
}


// Search Function
function searchData() {

    const input =
        document.getElementById("searchInput");

    const value =
        input.value.toLowerCase();

    const rows =
        document.querySelectorAll("table tbody tr");

    rows.forEach(function(row) {

        const text =
            row.innerText.toLowerCase();

        if (text.includes(value)) {
            row.style.display = "";
        }
        else {
            row.style.display = "none";
        }
    });
}


// Welcome Message
window.addEventListener("load", function() {

    console.log(
        "UniManage AI loaded successfully!"
    );

});