module.exports = {

    getLore: (data) => {
        const content = `
<div class="card">
    <header>
        <h1>${data[3]}</h1>
    </header>
    <div class="subheader">
        <h3>Year: ${data[0]}</h3>
        <h3>Month: ${data[1]}</h3>
        <h3>Day: ${data[2]}</h3>
    </div>
    <article>
        <p>${data[6]}</p>
    </article>
    <footer>
        <p>${data[5]}</p>
    </footer>
</div>
        `;

        console.log(content)
    }

}