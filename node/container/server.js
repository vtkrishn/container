const http = require('http');
const es = require('elasticsearch');

var client= new es.Client({
        hosts: [ 'http://192.168.1.14:9200' ]
});

//client.cluster.health({}, (err, resp, status) => {
//      console.log(resp);
//});

function search(query) {
        return client.search({
                index: query
        });
}
http.createServer( (req, res) => {
        var t='j';
        search('bank')
        .then(result => {
                t=result.hits.total;
                console.log(t);
        })
        .catch(console.err);
        res.write('one' + t.toString());

        res.end();
}).listen(8080);
