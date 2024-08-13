import express from 'express'

const router = express.Router();


router.post('/api/user/signout',(req,res)=>{
  req.session=null;
  res.status(200).send({signoutSuccess:true});
})

export {router as signoutRouter};