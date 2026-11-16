const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8"
  });

  res.end(`
    <h1>OBAME MOUÉKOUKOU</h1>
    <h2>L'union des intelligences artificielles</h2>
    <p>Bienvenue dans une nouvelle génération d'IA.</p>
  `);
});

server.listen(3000, () => {
  console.log("OBAME MOUÉKOUKOU est lancé !");
});
