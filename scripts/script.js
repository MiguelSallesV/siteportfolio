
const gifs = document.querySelectorAll('.gif__projeto');

function ativaGifs(gif) {
    gifs.forEach((gif) => {
    gif.addEventListener('mouseenter', () => {
        gif.src = gif.dataset.gif;
    })
    gif.addEventListener('mouseleave', () => {
        gif.src = gif.dataset.static
    })
})
}

ativaGifs(gifs);



