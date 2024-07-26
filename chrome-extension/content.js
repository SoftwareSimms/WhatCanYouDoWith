// Function to find and wrap concrete nouns
function highlightConcreteNouns() {
    const concreteNouns = ["apple", "banana", "car", "hammer"]; // Example nouns, this should be dynamic or from an API
    const regex = new RegExp(`\\b(${concreteNouns.join('|')})\\b`, 'gi');
  
    document.body.innerHTML = document.body.innerHTML.replace(regex, (match) => {
      return `<a href="https://your-frontend-url/search?query=${match}" target="_blank">${match}</a>`;
    });
  }
  
  // Run the function to highlight nouns on page load
  window.onload = highlightConcreteNouns;
  