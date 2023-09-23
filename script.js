$(document).ready(function() {
    // Define the URL of the API
    const apiUrl = 'https://dev-divyansh.github.io/Qdroid/qna.json';

    // Use jQuery's AJAX function to fetch data from the API
    $.ajax({
        url: apiUrl,
        method: 'GET',
        dataType: 'json',
        success: function(data) {

            // Once the data is successfully fetched, process and display it
            if (data && Array.isArray(data)) {
                const qaList = $('#qaList');
                
                // Loop through the data and create list items for each question and answer
                data.forEach(function(item) {
                    const listItem = $('<li>');
                    listItem.html('<strong>Q: ' + item.question + '</strong><br>A: ' + item.answer);
                    qaList.append(listItem);
                });
            }
        },
        error: function(error) {
            console.error('Error fetching data:', error);
        }
    });
});
