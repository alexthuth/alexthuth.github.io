fetch('navbar/ele_navbar.html')
    .then(response => response.text())
    .then(data => document.getElementById('ele_navbar').innerHTML = data);