const links = document.querySelectorAll('.sidebar a');
const sections = document.querySelectorAll('.content');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    links.forEach(l => l.classList.remove('clicado'));
    link.classList.add('clicado');

    sections.forEach(sec => sec.classList.remove('ativo'));

    const targetId = link.getAttribute('href').substring(1);
    document.getElementById(targetId).classList.add('ativo');
  });
});
