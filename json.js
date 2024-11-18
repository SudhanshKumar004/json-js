async function fet()
{
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let b = await a.json();
    
   let ans =  b.map((e)=>`
        <h1>${e.id} </h1>
        <h1>${e.title} </h1>
    `).join(" ");

    document.querySelector('#demo').innerHTML = ans;
}

fet();


//API - Application programing interface;
//JSON -JavaScript object notation;
// json is used for generating fake api 
 