// Function to check if user is authenticated
function checkAuth() {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    return (token && user); // Only return boolean
}

// Function to protect routes that require authentication
function protectRoute() {
    if (!checkAuth()) {
        // Store the current URL to redirect back after login
        localStorage.setItem('redirectUrl', window.location.href);
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

// Function to update navigation based on auth status
function updateNavigation() {
    const userSection = document.getElementById('userSection');
    const loginSection = document.getElementById('loginSection');
    const userNameSpan = document.getElementById('userName');

    // Only proceed if these elements exist on the current page
    if (userSection && loginSection) {
        console.log('updateNavigation: userSection and loginSection found.');
        if (checkAuth()) {
            console.log('updateNavigation: User is authenticated.');
            const user = JSON.parse(localStorage.getItem('user'));
            userSection.style.display = 'flex'; // Use flex for proper alignment
            loginSection.style.display = 'none';
            console.log('updateNavigation: userSection set to flex, loginSection set to none.');
            if (userNameSpan) {
                userNameSpan.textContent = `Welcome, ${user.name}`;
            }
        } else {
            console.log('updateNavigation: User is NOT authenticated.');
            userSection.style.display = 'none';
            loginSection.style.display = 'flex';
            console.log('updateNavigation: userSection set to none, loginSection set to flex.');
        }
    } else {
        console.log('updateNavigation: userSection or loginSection NOT found on this page.');
    }
}

// Function to handle logout
function handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('redirectUrl');
    window.location.href = 'login.html';
}

// This DOMContentLoaded block remains in auth.js to handle the generic navbar logic
// and logout for pages using #logoutBtn (excluding cart.html which has special logic)
document.addEventListener('DOMContentLoaded', () => {
    updateNavigation(); // Update the generic navbar immediately on page load

    // General logout button listener for pages using #logoutBtn
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm('Are you sure you want to logout?')) {
                handleLogout();
            }
        });
    }
}); 