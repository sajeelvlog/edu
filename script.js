// Sample student data by class
const studentData = {
  "10th_meta": [
    { name: "Muhammed Fadhi" }, { name: "Adhidev PC" }, { name: "Pragil T" },
    { name: "Muhammed Labeeb MT" }, { name: "Salahuden Ayoobi" }, { name: "Faharees P" },
    { name: "Ananthu Krishna" }, { name: "Muhammed Didhar PM" }, { name: "Shibil Ahammed" },
    { name: "Muhammed Ajnas" }, { name: "Muhammed Jinshad" }, { name: "Adhil Arfan" },
    { name: "Muhammed Anas" }, { name: "Muhammed Lefin" }, { name: "Afshan Nabil" },
    { name: "Aban" }, { name: "Muhammed Hanan" }, { name: "Muhammed Sufiyan" },
    { name: "Nasih Ameen" }, { name: "Muhammed Nihad" }, { name: "Muhammed Adil K" },
    { name: "Ayisha Zahwa" }, { name: "Fathima Fiza" }, { name: "Asheega Salim" },
    { name: "Warda Fathima" }, { name: "Ayisha Swafa" }, { name: "Ayisha Shemin" },
    { name: "Ayisha Sherin" }, { name: "Rayana CK" }, { name: "Rana Fathima" },
    { name: "Hadiya C" }
  ],
  "10th_zeta": [
    { name: "Muhammed Shehin TP" }, { name: "Muhammed Sinan MP" }, { name: "Nabeel Mehran" },
    { name: "Shadil C" }, { name: "Muhammed Adhil KK" }, { name: "Muhammed Razin" },
    { name: "Muhammed Ajmal" }, { name: "Muhammed Abyan" }, { name: "Muhammed Sinan M" },
    { name: "Muhammed Najil" }, { name: "Muhammed Nafjan" }, { name: "Muhammed Athif" },
    { name: "Muhammed Shahab" }, { name: "Aamir Abdulla" }, { name: "Muhammed Shahal" },
    { name: "Fabis Rahman" }, { name: "Muhammed Shadil" }, { name: "Muhammed Shamnad" },
    { name: "Minha Shadha" }, { name: "Marjana Parvy" }, { name: "Ayisha Safa" },
    { name: "Rimsha Fathima" }, { name: "Lamia Jasmine" }, { name: "Hiba Mariyam" },
    { name: "Ayisha Hanna KC" }, { name: "Fathima Safa MK" }, { name: "Naja Fathima MM" },
    { name: "Naja Fathima K" }, { name: "Naja Nasrin E" }, { name: "Zoha VP" }
  ],
  "10th_beta": [
    { name: "Adhav T" }, { name: "Aman Fadhi" }, { name: "Muhammed Midlaj" },
    { name: "Muhammed Ihsan" }, { name: "Aagney" }, { name: "Muhammed Nihad" },
    { name: "Hadi Hanan" }, { name: "Amina Diya" }, { name: "Midha" },
    { name: "Fidula Mariyam" }, { name: "Diya Mehrin" }, { name: "Hiba Fathima" },
    { name: "Anshifa" }, { name: "Fathima Febin" }, { name: "Amna Fathima" },
    { name: "Dilna V" }, { name: "Shifna Shirin" }, { name: "Hiba Fathima K" },
    { name: "Ayisha Haslamiya" }, { name: "Dilshana" }, { name: "Sinan VP" },
    { name: "Muhammed Savad" }, { name: "Muhammed Aflah" }, { name: "Abdul Sajad" },
    { name: "Fathima Diya K" }, { name: "Devanivedya CK" }, { name: "Theertha P" },
    { name: "Muhammed Shihad" }, { name: "Fathima CK" }, { name: "Muhammed Hashim" },
    { name: "Muhammed Raslan" }, { name: "Fathima Hamna" }, { name: "Faris Sabah" }
  ],
  "9th": [
    { name: "Muhammed Midhlaj" }, { name: "Muhammed Aflah" }, { name: "Anfas K" },
    { name: "Muhammed Shan" }, { name: "Ameen T V P" }, { name: "Muhafil E" },
    { name: "Muhammed Sinan P" }, { name: "Muhammed Shad" }, { name: "Muhammed Adinan P" },
    { name: "Muhammed Nihal K" }, { name: "Dishanand" }, { name: "Aman Ahammed" },
    { name: "Muhammed Rihan" }, { name: "Aashiq Ali" }, { name: "Muhammed Liyan" },
    { name: "Hafid" }, { name: "Adhil Rahman" }, { name: "Muhammed Faheem" },
    { name: "Faheem K" }, { name: "Aslam P" }, { name: "Afnan Ali" },
    { name: "Muhammed Sinan PP" }, { name: "Adhikrishna" }, { name: "Fathima Iba Hashra" },
    { name: "Hudha Fathima" }, { name: "Aisha Zenna" }, { name: "Fathima Haneen M" },
    { name: "Fathima Nida V P" }, { name: "Baiza Fathima E" }, { name: "Ayisha Henen" },
    { name: "Minha Fathima" }, { name: "Hajara Nourin" }, { name: "Hina Roushid" }
  ],
  "8th": []
};

function populateStudentsDropdown(className, selectId) {
  const studentSelect = document.getElementById(selectId);
  studentSelect.innerHTML = '<option value="">Select Student</option>';

  const students = studentData[className] || [];
  students.forEach(student => {
    const option = document.createElement("option");
    option.value = student.name;
    option.text = student.name;
    studentSelect.appendChild(option);
  });
}

document.getElementById("classSelect")?.addEventListener("change", function () {
  populateStudentsDropdown(this.value, "studentSelect");
});

document.getElementById("dashClassSelect")?.addEventListener("change", function () {
  populateStudentsDropdown(this.value, "dashStudentSelect");
});

function filterClassDisplay(className) {
  const displayArea = document.getElementById("classDisplayArea");
  const searchBox = document.getElementById("individualSearch");

  if (className === 'individual') {
    searchBox.style.display = 'block';
    displayArea.innerHTML = '';
    return;
  }

  searchBox.style.display = 'none';
  const students = studentData[className] || [];

  if (students.length === 0) {
    displayArea.innerHTML = '<p>No students found.</p>';
    return;
  }

  let html = '<table><tr><th>Name</th></tr>';
  students.forEach(s => {
    html += `<tr><td>${s.name}</td></tr>`;
  });
  html += '</table>';
  displayArea.innerHTML = html;
}

function searchIndividualStudent() {
  const name = document.getElementById("searchName").value.toLowerCase();
  let found = [];

  Object.keys(studentData).forEach(classKey => {
    studentData[classKey].forEach(s => {
      if (s.name.toLowerCase().includes(name)) {
        found.push(`${s.name} (${classKey})`);
      }
    });
  });

  const displayArea = document.getElementById("classDisplayArea");
  if (found.length === 0) {
    displayArea.innerHTML = '<p>No matching students found.</p>';
  } else {
    displayArea.innerHTML = '<ul>' + found.map(f => `<li>${f}</li>`).join('') + '</ul>';
  }
}
document.getElementById("feeForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const student = document.getElementById("studentSelect").value;
  const className = document.getElementById("classSelect").value;
  const month = document.getElementById("MonthSelect").value;
  const date = document.getElementById("paymentDate").value;
  const amount = document.getElementById("amount").value;

  const data = {
    name: student,
    class: className,
    month: month,
    date: date,
    amount: amount,
    pending: "",       // Leave blank for now
    status: "Paid"
  };

  fetch("https://script.google.com/macros/s/AKfycbzI-Zgyn1JzBKRI_lalNfKLeKk32hVWV8nS8w0_Yemc7lCB9JeN9iCXQ-jv_SGhwS_TXg/exec", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
  .then(res => res.text())
  .then(response => {
    alert("✅ Fee successfully stored in Google Sheet!");
  })
  .catch(err => {
    console.error("❌ Error sending to Google Sheets:", err);
    alert("Failed to send data. Try again.");
  });
});