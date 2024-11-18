const $main = document.getElementById('main');
const $introduceContainer = $main.querySelector(':scope > .container > .introduce')
const $skillContainer = $main.querySelector(':scope > .container > .skills')
const $projectContainer = $main.querySelector(':scope > .container > .project')
const $contactContainer = $main.querySelector(':scope > .container > .contact')

const $nav = document.getElementById('nav');
const $introduce = $nav.querySelector(':scope > .label > .introduce');
const $skills = $nav.querySelector(':scope > .label > .skills');
const $project = $nav.querySelector(':scope > .label > .project');
const $contact = $nav.querySelector(':scope > .label > .contact');

$introduce.onclick = () => {
    if ($introduce.checked) {
        $introduceContainer.classList.remove('hidden');
        $projectContainer.classList.add('hidden');
        $contactContainer.classList.add('hidden');
        $skillContainer.classList.add('hidden');
    } else {
        $introduceContainer.classList.remove('hidden');
        $skillContainer.classList.add('hidden');
        $projectContainer.classList.add('hidden');
        $contactContainer.classList.add('hidden');
    }
}
$skills.onclick = () => {
    if ($skills.checked) {
        $skillContainer.classList.remove('hidden');
        $introduceContainer.classList.add('hidden');
        $projectContainer.classList.add('hidden');
        $contactContainer.classList.add('hidden');
    } else {
        $skillContainer.classList.remove('hidden');
        $introduceContainer.classList.add('hidden');
        $projectContainer.classList.add('hidden');
        $contactContainer.classList.add('hidden');
    }
}
$project.onclick = () => {
    if ($project.checked) {
        $projectContainer.classList.remove('hidden');
        $introduceContainer.classList.add('hidden');
        $skillContainer.classList.add('hidden');
        $contactContainer.classList.add('hidden');
    } else {
        $projectContainer.classList.remove('hidden');
        $introduceContainer.classList.add('hidden');
        $skillContainer.classList.add('hidden');
        $contactContainer.classList.add('hidden');
    }
}
$contact.onclick = () => {
    if ($contact.checked) {
        $contactContainer.classList.remove('hidden');
        $introduceContainer.classList.add('hidden');
        $skillContainer.classList.add('hidden');
        $projectContainer.classList.add('hidden');
    } else {
        $contactContainer.classList.remove('hidden');
        $introduceContainer.classList.add('hidden');
        $skillContainer.classList.add('hidden');
        $projectContainer.classList.add('hidden');
    }
}
