const userModel=require("./RegisterModel")

let add=(req,res)=>{

    let validation=""
    if(!req.body.name){
        validation="Enter your UserName please."
    }
    if(!req.body.email){
        validation+=" Enter your Email please."
    }
    if(!req.body.contect){
        validation+=" Enter your Contact please."
    }
    if(!!validation){
        res.send({
            success:false,
            message:validation,
            status:202
        })
    }
    else{


        userModel.findOne({name:req.body.name}).then(async(OldUser)=>{

            if(OldUser){
                res.send({
                    success: false,
                    message: "Alreay Exist",
                    status: 202
                })
            }
            else{
                const NewUser = new userModel()
                const totalUser = await userModel.countDocuments()

                NewUser.autoId = totalUser+1,
                    NewUser.name = req.body.name,
                    NewUser.email = req.body.email,
                    NewUser.password = req.body.password,
                    NewUser.contect = req.body.contect,
                    NewUser.save().then((USER) => {
                        res.send({
                            success: true,
                            message: USER,
                            status: 201
                        })
                    }).catch(() => {
                        res.send({
                            success: false,
                            message: "User is not added",
                            status: 200
                        })
                    })
            }
        }).catch()

        
    }
}


// let login=async(req.res)=>{


// }



module.exports={
    add
}