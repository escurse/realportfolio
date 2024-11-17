const $main = document.getElementById('main');
const $containers = $main.querySelector(':scope > .container > .nav')

const $nav = document.getElementById('nav');
const $skills = $nav.querySelector(':scope > .label > .skills');

$skills.onclick = () => {
    if ($skills.checked) {
        $containers.classList.remove('hidden');
    } else {
        $containers.classList.add('hidden');
    }
}
