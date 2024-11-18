async function data()
{
    let a = await fetch ('https://jsonplaceholder.typicode.com/comments');
    let b = await a.json();

    let answ = b.map((e)=>`
        <h1>${e.id}</h1>
        <h1>${e.name}</h1>
        <h1>${e.email}</h1>
    `).join(" ");

    document.querySelector('#output').innerHTML = answ;

}

data();