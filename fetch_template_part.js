// fetchTemplatePart.js

function fetchTemplatePart(templateName) {
  fetch(`vue_apps/${templateName}.html`)
      .then(response => response.text())
      .then(html => {
          // Insert the JavaScript content into the div that contains the script
          const scriptContainer = document.getElementById(templateName);
          scriptContainer.innerHTML = html;
      })
      .catch(error => console.error(`Error fetching HTML for ${templateName}:`, error));
}