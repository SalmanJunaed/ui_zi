const text = document.querySelector('.circleText p');
text.innerHTML = text.innerText.split('').map(
    (char, i) =>
        `<span style="transform:rotate(${i* 17}deg)">${char}</span>`
).join('');