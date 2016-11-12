app.listen(process.env.NODE_PORT || 3000, process.env.NODE_IP || 'localhost',
function () {
   console.log('App Listening on port 3000');
});
