// Wait until the DOM content is loaded before executing the code
document.addEventListener('DOMContentLoaded', function() {
  // Get references to the popup.html UI elements
  const searchInput = document.getElementById('search');
  const searchButton = document.getElementById('searchButton');
  const resultsDiv = document.getElementById('results');

  // Get the text from the search box
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get('search');

  // If there's text in the search box input, set it as the value of the search input and perform the search
  if (searchQuery) {
    searchInput.value = searchQuery;
    search();
  }

  // Add an event listener to the search button
  searchButton.addEventListener('click', search);

  // Add an event listener to the search input for the Enter key press
  searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      search();
    }
  });

  // Perform the search when the user clicks the search button
  async function search() {
    console.log('Search button clicked');
    try {
      // Get the search text and convert it to lowercase
      const searchText = searchInput.value.toLowerCase();
      // Get the link to the database JSON file
      const databaseLink = 'database.json'; // Update with the correct path to the database.json file

      // Fetch the data from the database JSON file
      const response = await fetch(databaseLink);
      const nounData = await response.json();

      // Filter the data to find the noun matching the search text
      const results = nounData.filter(function(db) {
        return db.noun.toLowerCase() === searchText;
      });

      // If results are found, display them in the results div
      if (results.length > 0) {
        // Clear previous results
        while (resultsDiv.firstChild) {
          resultsDiv.removeChild(resultsDiv.firstChild);
        }

        // Iterate over each use of the noun
        results[0].uses.forEach(function(use) {
          // Create a heading for the use
          const useHeading = document.createElement('h2');
          useHeading.textContent = use.use;
          resultsDiv.appendChild(useHeading);

          // Create a list for the associated recipes
          const recipeList = document.createElement('ul');
          use.recipes.forEach(function(recipe) {
            // Create a list item for each recipe
            const recipeItem = document.createElement('li');
            const recipeLink = document.createElement('a');
            recipeLink.textContent = recipe;
            recipeLink.href = recipe;
            recipeLink.target = '_blank';
            recipeItem.appendChild(recipeLink);
            recipeList.appendChild(recipeItem);
          });

          // Append the recipe list to the results div
          resultsDiv.appendChild(recipeList);
        });
      } else {
        // Display a message if no results are found
        resultsDiv.textContent = 'Nothing found in the database.';
      }
    } catch (error) {
      // Handle errors
      console.error('Error fetching data:', error);
      resultsDiv.textContent = 'An error occurred while searching the database. Please try again later.';
    }
  }
});
