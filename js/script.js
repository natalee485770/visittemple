document.getElementById('search-button').addEventListener('click', function() {
    var query = document.getElementById('search-input').value;
    if (query) {
        alert('Search query: ' + query);
        // You can add your search functionality here
        // For example, redirect to a search results page:
        // window.location.href = '/search?query=' + encodeURIComponent(query);
    } else {
        alert('Please enter a search query.');
    }
});
