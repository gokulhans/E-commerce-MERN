const bcrypt = require('bcrypt')
var db = require('./connection')


module.exports={
    doSignup:(userdata)=>{

        return new Promise(async(resolve,reject)=>{
            let user= await db.get().collection('users').findOne({email:userdata.email})
            if (user) {
                let response = {}
                response.signupstatus = false
                resolve(response)
            } else {
                userdata.pswd=await bcrypt.hash(userdata.pswd,10)
                db.get().collection('users').insertOne(userdata).then((response)=>{
                    response.signupstatus = true
                    response.type = userdata.type
                    resolve(response)
                })            
            }
        })
    }, 
    doLogin:(userdata)=>{
        return new Promise(async(resolve,reject)=>{
            let user= await db.get().collection('users').findOne({email:userdata.email}).then((response) => {
                return userobj = response
            })
            console.log(user);
            let response = {}
            if (user) {
                
                let validPassword = await bcrypt.compare(userdata.pswd,user.pswd)
                if(!validPassword){
                    console.log('login failed');
                    response.status = false
                    resolve(response)
                }else {
                    console.log('login success');
                    response.status = true
                    response.user = userobj
                    response.type = user.type
                    resolve(response)
                }
            }else{
                console.log('login failed');
                    response.status = false
                    resolve(response)
            }
            })  
    },
    deleteAccount:(data)=>{
        return new Promise(async(resolve,reject)=>{
            db.get().collection('users').removeOne({_id:data.id})
                    resolve('user deleted')
            })  
    },
}