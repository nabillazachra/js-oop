const loginClick = () => {
    document.getElementById("std-form").addEventListener("submit", login);
    function login(e) {
        e.preventDefault();
        alert('Berhasil login');  
        window.location.href = "form-page.html";  
    }
}

    function clickPlatform() {
        alert('Berhasil login');    
        window.location.href = "form-page.html";  
    }

