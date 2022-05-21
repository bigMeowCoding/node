const http = require('http');
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '192.168.0.102',
    user     : 'root',
    password : '222',
    database : 'book',
    port:'3306'
});

connection.connect();

connection.query('SELECT * FROM book;', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].name,results[0].prize);
});
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });