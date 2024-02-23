const express = require("express");

const app = express();


//middleware
app.use(express.json());
// post --> JSON -->{"key":"value"} --> FormData() -->express.json()
//03-02-2024

/*1.Routing
    i. Route Paths
      Regular Expressions
        a? --> a is optional
        + --> b+ --> 1 or more --> b, bb, bbb, bbbb
        * --> b* --> b followed by anything --> b, bc, bad
     
        app.get("/Use?rs",(req,res)=>{
          res.status(200).json({data:"hello world"});
        });

    ii. Routing Parameters
    iii. Routing Handlers  -- Middleware

      app.get("/user/:id",(req,res) => {
        let id = req.params.id;
        if(parseInt(id)){

        }
      })

      //Next
      //Middleware

      app.get(
        "/user/:id",
    --> (req, res, next) => {
        let id = req.params.id;
        if(parseInt(id)) {
        next();
        } else {
        res.json({data: "Need an integer"});
        }
    --> }, 
        (req,res) => {
        res.json({...req.params});
        }
        );
     

        Another way of writing

         const middleware = function(req, res, next){
          let id = req.params.id;
          if(parseInt(id)) {
          next();
          } else {
          res.json({data: "Need an integer"});
          }
        }
        app.get("/user/:id",middleware,(req,res) => {
          res.json({...req.params});
          });


      
    

      *This is not a good practice because it is not right to allow the id to enter before checking it.
      *If only integer id is allowed then we need to check if the id is an integer value before allowing thhe id to enter 
      *ParseInt checks if the id is integer after the id enters
      *(Eg: Thief entering the house)
      *We can use middleware or handlers to overcome this

    a. App level -> dumping everything to one page 
    b.Module level -> modularize
*/

/*
http://localhost:3000 / something
This something is router
*/

//get,post,put,patch,delete -- function -- ("path", (req,res) => {})

//html --> button --> allUser --->

// user click button  --> allUser --> header --> type of request, origin, type of data 

/*
app.get("/allUser",(req,res)=>{
  console.log(req.body,req.header);
});
*/

// status code --> 20X, 40X, 50X --> 200

/*
app.get("/allUser",(req,res)=>{
  res.status(201).json({data:[{ name: "skilllab", dept:"cs"}]})
});
*/




/*
2.Middlewares
  i. Built-in
  ii. App Level -- Global
  iii. Router Level -- Modular

  eg: Exprees.json (in-built middleware)  -- pluggin
*/


/*Parameters
app.get("/user/:id",(req,res)=>{
  res.json({...req.params});
})

Here id is the parameter
Anything followed by a colon is parameter

-->If u want to use many parameters the use - or .
    app.get("/bookings/:from-:to",(req,res)=>{
      res.json({...req.params});
    })

-->To restrict the id only to integers 
    app.get("/user/:id(\\d+)",(req,res)=>{
      res.json({...req.params});
    })

-->To restrict to 10 digits
    app.get("/user/:id(\[0-9\])",(req,res)=>{
      res.json({...req.params});
    })


-->To restrict to only characters
    app.get("/user/:id(\[A-Z\])",(req,res)=>{
       res.json({...req.params});
    })

*/

          app.post("/form",(req, res) => {
            let body = req.body;
            res.json({...body});
          })




app.listen(3000, ()=>{
  console.log("Running node at http://localhost:3000");
})