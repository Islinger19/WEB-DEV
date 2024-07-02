const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchterm = (form.elements.query.value);
    const res = await axios.get(` https://api.tvmaze.com/search/shows?q=${searchterm}`)
    makeImg(res.data)
    form.elements.query.value = "";
});

const makeImg = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement("img");
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }
}