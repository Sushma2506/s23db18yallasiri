// API for our resources
exports.api = function(req, res) {
    res.write('[');
    res.write('{"resource":"shoes", ');
    res.write(' "verbs":["GET","PUT", "DELETE"] ');
    res.write('}');
    res.write(']')
    res.send();
   };