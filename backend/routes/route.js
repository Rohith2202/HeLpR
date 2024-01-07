const express=require('express');
const router = express.Router();
router.post("/post",async (req,res)=>{
    const title=req.body.title;
    const text=req.body.text;
    const locality=req.body.locality;
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    const data=new PostModel({title:title,text:text,curr_date:currentDate,locality:locality})
    await data.save()
    res.json("DONT")
})

router.post("/post/add/:id",async (req,res)=>{
    const id=req.params.id 
    const description=req.body.description
    const price=req.body.price 
    const result= await PostModel.updateOne({_id:id},
        {$push:{comments:{$each:[{description:description,price:price}]}}}
        )
    res.json("HEYY")
})


router.get("/post/:id",(req,res)=>{
    PostModel.findById(req.params.id).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.json(err)
    })

})

router.get("/",(req,res)=>{
    PostModel.find({}).then((data)=>{
        data={data}
        res.send(data)
    }).catch((err)=>{
        res.json(err)
    })
})
module.exports=router;