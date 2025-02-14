const express = require('express');
require('./Config')
const app = express();
const Users = require('./users')
const contact = require('./Contact')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.post('/ragister',async(req,resp)=>{
    let data = new Users(req.body);
    let result = await data.save()
    result = result.toObject();
    delete result.password
    resp.send(result)
})

app.post('/login', async (req,resp)=>{
    const { email, password } = req.body; 
   let user = await Users.findOne(req.body);
   if(user){
        if(user.password === password){
            resp.send(user)
        }else{
            resp.send("Result Not Found")
        }
   }else{
       resp.send("Result Not Founds")
   }
})

app.post('/contactus',async(req,resp)=>{
    const data = new contact(req.body);
    const result = await data.save();
    resp.send(result)
})

app.listen(2000);

// const express = require('express');
// require('./Config')
// require('dotenv').config();
// const app = express();
// const Users = require('./users')
// const contact = require('./Contact')
// const cors = require('cors')


// app.use(express.json())
// app.use(cors())

// app.post('/ragister',async(req,resp)=>{
//     let data = new Users(req.body);
//     let result = await data.save()
//     result = result.toObject();
//     delete result.password
//     resp.send(result)
// })

// app.post('/login', async (req,resp)=>{
//     const { email, password } = req.body; 
//    let user = await Users.findOne(req.body);
//    if(user){
//         if(user.password === password){
//             resp.send(user)
//         }else{
//             resp.send("Result Not Found")
//         }
//    }else{
//        resp.send("Result Not Founds")
//    }
// })

// app.post('/contactus',async(req,resp)=>{
//     const data = new contact(req.body);
//     const result = await data.save();
//     resp.send(result)
// })

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//     console.log(`🚀 Server running on http://localhost:${PORT}`);
//   });