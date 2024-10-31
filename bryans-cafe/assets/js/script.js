document.addEventListener("DOMContentLoaded", () => {
  document.getElementById(
    "private-policy"
  ).innerHTML = `<a class="privacy_policy" href="privacy.html">Privacy Policy</a> `;

  document.getElementById(
    "footer-text"
  ).innerText = `© ${new Date().getFullYear()} Bryan's Café | All Rights Reserved `;

  // Form submission handler
  const enquiryForm = document.getElementById("enquiry-form");
  enquiryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("form-response").style.display = "block";
    enquiryForm.reset();
  });

  // Load XML for menu and branch information

  fetchXMLData("../data/branches.xml", displayBranchInfo);
});

// Fetch XML data and process
function fetchXMLData(url, callback) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, "application/xml");
      callback(xmlDoc);
    });
}

// Display branch info from XML
function displayBranchInfo(xml) {
  const branchContainer = document.getElementById("branch-info");
  const branches = xml.getElementsByTagName("branch");
  Array.from(branches).forEach((branch) => {
    const address = branch.getElementsByTagName("address")[0].textContent;
    const contact = branch.getElementsByTagName("contact")[0].textContent;
    const hours = branch.getElementsByTagName("hours")[0].textContent;
    const mapLink = branch.getElementsByTagName("map")[0].textContent;

    const branchDiv = document.createElement("div");
    branchDiv.innerHTML = `<p>${address}</p>
                               <p>Contact: ${contact}</p>
                               <p>Hours: ${hours}</p>
                               <a href="${mapLink}" target="_blank">View on Map</a>`;
    branchContainer.appendChild(branchDiv);
  });
}
