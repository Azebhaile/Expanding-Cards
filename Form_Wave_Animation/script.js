const labels = document.querySelectorAll('.form-control label')
// this will give a node list of labels


labels.forEach(label =>{
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')


})