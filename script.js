let quote = document.querySelector("#quote");
let author = document.querySelector("#author");

let api_url = "http://quotable.io/random";

fetch(api_url)
	.then(res => res.json())
	.then(data => {
		quote.innerHTML = '"' + data.content + '"';
		author.innerHTML = "-" + data.author;
	});

