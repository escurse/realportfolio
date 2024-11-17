const $main = document.getElementById('main');
const $skillContainer = $main.querySelector(':scope > .container > .skills')

const $nav = document.getElementById('nav');
const $skills = $nav.querySelector(':scope > .label > .skills');

$skills.onclick = () => {
    if ($skills.checked) {
        $skillContainer.classList.remove('hidden');
    } else {
        $skillContainer.classList.add('hidden');
    }
}
