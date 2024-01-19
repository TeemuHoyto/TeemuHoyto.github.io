/**
 * Function fetches HTML from a template part file and inserts it into a div that has the ID of the template name.
 * 
 * @param {*} templateName 
 * @param {*} folder 
 */

function fetchTemplatePart(templateName, folder) {
  fetch(`${folder}/${templateName}.html`)
    .then(response => response.text())
    .then(html => {
      // Insert the JavaScript content into the div that contains the script
      const scriptContainer = document.getElementById(templateName);
      scriptContainer.innerHTML = html;
    })
    .catch(error => console.error(`Error fetching HTML for ${templateName}:`, error));
}