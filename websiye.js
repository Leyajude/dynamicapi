const accessKey = 'xRhEt0DitxZjTfXsK_HxqavZ0RioNeesLksSH9-yLOA'; // Replace with your Unsplash Access Key

function searchImages() {
    const searchInput = document.getElementById('searchInput').value;

    fetch(`https://api.unsplash.com/search/photos?query=${searchInput}&client_id=${accessKey}&per_page=12`)
        .then(response => response.json())
        .then(data => {
            displayImages(data.results);
        })
        .catch(error => console.error('Error fetching images:', error));
}

function displayImages(images) {
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.urls.regular;
        imgElement.alt = image.alt_description;
        imageContainer.appendChild(imgElement);
    });
}
