fetch('navbar/ele_navbar.html')
    .then(response => response.text())
    .then(data => {
            document.getElementById('ele_navbar').innerHTML = data;
            document.getElementById('preloader').style.display = 'none';
            let navbarAndContent = document.querySelector('.navbar-and-content');
            navbarAndContent.classList.add('flex-layout');
            navbarAndContent.style.opacity = 1;
    })
    .catch(error => {
        console.error('Fetch error:', error);
    })