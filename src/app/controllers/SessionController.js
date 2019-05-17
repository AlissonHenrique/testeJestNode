const { User} =require('../models')


class SessionControler {
  store(req, res) {
    const { email, user } = req.body
    const user = await findOne({where:{email}})
    if(!user){
      return res.status(400).json({message:'User not fount'})
    }
    if(!(user.checkPassword(password))){
      return res.status(401 ).json({message:'incorect password'})
    }
    return res.status(200).send();
  }
}

module.exports = new SessionControler();
