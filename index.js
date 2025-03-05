import express from "express";
import path from 'path'
import bodyParser from "body-parser";
import Post from "./models/Post.js";
import { engine } from "express-handlebars";
import { where } from "sequelize";

const app = express();
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'public')));



//Config
    //template engine
    app.engine("handlebars", engine({ defaultLayout: "main" }));
    app.set('view engine', 'handlebars')
    app.set('views', path.join(__dirname, 'views')); 
 //body-parser config
 
 app.use(bodyParser.urlencoded({extended: false}))
 app.use(bodyParser.json())

//Rotas

app.get('/', function(req,res){
    Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
        res.render('home', { posts: posts.map(post => post.toJSON()) })
    }).catch(function(error){
        res.status(500).send("Erro ao buscar posts: " + error)
    })
})

app.get('/cad', function (req,res){
    res.render('formulario')
    
})
app.post('/add', function (req,res){
   Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
   }).then(function(){
    res.redirect('/')
   }).catch(function(erro){
    res.send("houve um erro: "+erro)
   })
    
})
 
 app.get('/deletar/:id', function(req,res){
    Post.destroy({where: {'id': req.params.id}}).then(function(){
        res.send("Postagem deletada com sucesso!")
    }).catch(function(erro){
        res.send("Esta postagem nao existe!")
    })
 })

app.listen(8081, function(){
    console.log("servidor rodando na url http://localhost:8081")
});