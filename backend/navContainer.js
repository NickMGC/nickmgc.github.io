function addNavContainer() {
    const navItems = [['Home', 'index.html'], ['Projects', 'projects.html'], ['Socials', 'socials.html'], ['Games', 'games.html'], ['Toys', 'toys.html']];

    document.body.insertAdjacentHTML('afterbegin', `
        <header class='nav-container'>
            ${navItems.map(item => item[1] === (location.pathname.split('/').pop() || 'index.html') ? item[0] : `<a href='${item[1]}'>${item[0]}</a>`).join(' | ')}
        </header>
    `);
}

document.addEventListener('DOMContentLoaded', addNavContainer);