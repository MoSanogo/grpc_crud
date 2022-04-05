const {client}=require('./client');
const {v4} =require("uuid");

module.exports=function (app){
    app.get('/', (req,res)=>{
        client.getAllNews({}, (error, news) => {
          if (error) throw error;
          res.send(news);
        });
    
       });
    app.get("/:id",(req,res)=>{
        
        const id=req.params.id;
        if(!id) res.status(404).send("request id must not be null.")
                  client.getNews(
            {
              id,
            },
            (error, news) => {
              if (error) res.status(500).end(error.message);
              res.send(news);
            }
              );
        

       });

       app.post("/",(req,res)=>{
           
           const {title,body,postImage}=req.body ||{};
           console.log(req)
           client.addNews(
          {
            id:v4(),
            title,
            body,
            postImage
          },
          (error, news) => {
            if (error) res.status(400).end(error.message);
          res.status(201).send({ data: news});
         }
              );
       });
 
       app.patch("/:id",(req,res)=>{
           const id=req.params.id;
        if(!id) res.status(400).end("bad request");
        const {title,body,postImage}=req.body;
        client.editNews(
              { 
                id,
                title,
                body,
                postImage
            },
        (error, news) => {
          if (error) res.status(500).end(error.message);
          res.send(news);
        }
      );
       });
      
       app.delete("/:id",(req,res)=>{
        const id=req.params.id;
        if(!id) res.status(400).end("bad request");
        client.deleteNews(
        {
          id,
        },
        (error, news) => {
          if (error) res.status(500).end(error.message);
          res.status(200).send({id});
        }
      ); 
       });
   

}