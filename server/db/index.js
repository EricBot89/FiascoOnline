const Sequelize = require('sequelize')
const fs = require('fs')

const log = async (data) => {
  const isBig = false
  try{
    fs.Stats('./sequelizelog.txt', (err, stats) => {
       if (err) throw err
       const {size} = stats
       if(size > 15000){
           isbig = true
       }
    })
  if(isBig){
      fs.unlink('./oldsequelizelog.txt')
      fs.rename('./sequelizelog.txt','./oldsequelizelog.txt')
  }
  fs.appendFile('./sequelizelog.txt', data, (err) => {
      if (err) throw err
      console.log('sequlize is loggin properly')
  })
}catch(err){
    console.log(err)
}
}

const db = new Sequelize('postgres://localhost:5432/fiascoapp', {
    logging: log
})

module.exports = db