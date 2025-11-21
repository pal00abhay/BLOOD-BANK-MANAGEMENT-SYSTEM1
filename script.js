// Save donor data to LocalStorage
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("donorForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const donor = {
                name: document.getElementById("name").value,
                age: document.getElementById("age").value,
                blood: document.getElementById("bloodGroup").value,
                mobile: document.getElementById("mobile").value,
                city: document.getElementById("city").value
            };

            let donors = JSON.parse(localStorage.getItem("donors") || "[]");
            donors.push(donor);
            localStorage.setItem("donors", JSON.stringify(donors));

            alert("Donor Registered Successfully!");
            form.reset();
        });
    }
});

// Search donors
function searchDonors() {
    let blood = document.getElementById("searchGroup").value;
    let resultBox = document.getElementById("result");

    let donors = JSON.parse(localStorage.getItem("donors") || "[]");
    let filtered = donors.filter(d => d.blood === blood);

    if (filtered.length === 0) {
        resultBox.innerHTML = "<p>No donors found.</p>";
        return;
    }

    let html = "<h3>Matching Donors:</h3>";
    filtered.forEach(d => {
        html += `
            <div class="card">
                <p><strong>Name:</strong> ${d.name}</p>
                <p><strong>Blood Group:</strong> ${d.blood}</p>
                <p><strong>City:</strong> ${d.city}</p>
                <p><strong>Mobile:</strong> ${d.mobile}</p>
            </div>
        `;
    });

    resultBox.innerHTML = html;
}
