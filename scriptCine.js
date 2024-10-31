function showContent() {
    document.getElementById('content--cines').style.display = 'block';
    document.getElementById('map').style.display = 'none';
};

function showMap() {
    document.getElementById('content--cines').style.display = 'none';
    document.getElementById('map').style.display = 'block';
};

window.onload = function () {
    showContent();
};

