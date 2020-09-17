const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(express.static('resources'));
app.use(express.static('CSS'));
app.use(express.static('JS'));
app.use((req, res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'public/404.html'));
 });

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'public/index.html'));
});
app.get('/projects',(req,res) => {
    res.sendFile(path.join(__dirname,'public/projects.html'));
});
app.get('/contact',(req,res) => {
    res.sendFile(path.join(__dirname,'public/contact.html'));
});
app.get('/opinions',(req,res) => {
    res.sendFile(path.join(__dirname,'public/opinions.html'));
});
app.get('/tutorials',(req,res) => {
    res.sendFile(path.join(__dirname,'public/tutorials.html'));
});
app.get('/september20',(req,res) => {
    res.sendFile(path.join(__dirname,'public/september20.html'));
});
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));