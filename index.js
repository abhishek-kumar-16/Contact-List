const express=require('express');
const path = require('path')      // path is an inbuilt module
 
const port=8000;

const db = require('./config/mongoose');
const Contact = require('./models/contact');

const app=express();




app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

app.get('/',async function(req,res){
  

  try {
    const articles = await Contact.find({ });
 
    return res.render('home',{
                     title: "Contact List",
                     contact_list: articles
                });
   
  } catch (err) {
    console.log(err);
  }




});


app.post('/create-contact',function(req,res){
       
    // contactList.push({
    //     name: req.body.name,
    //     phone: req.body.phone
    // })
    //           or
         //contactList.push(req.body);// the body is containing the exactly same object

        //  const newUser = new Contact({
        //     name: req.body.name,
        //     phone: req.body.phone
        // });
    
        // newUser.save().then(()=>{
        //     res.render('home');
        // }).catch((err)=>{
        //     console.log(err);
        // })



      Contact.create({
        name: req.body.name,
        phone: req.body.phone
      } );
 

      res.redirect('back');




})


app.get('/delete-contact/',async function(req,res){
    //console.log(req.query);
    let id=req.query.id;


    //var id = '5ebadc45a99bde77b2efb20e';
  



    
    let product = await Contact.findByIdAndDelete(id);
    res.redirect('back');
 
});


// app.get('/edit-contact/',async function(req,res){
//          let id=req.query.id;
         
// })






app.listen(port,function(err){
    if(err){
        console.log('error is running in the server',err);
    }

    console.log('My express server is running on port: ',port);
})