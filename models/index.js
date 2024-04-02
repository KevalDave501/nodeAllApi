const {Sequelize} = require('sequelize')

const sequelize = new Sequelize("keval_library", "root", '', {
    host: 'localhost',
    dialect: "mysql"
})

const check = () => {
    try{
        sequelize.authenticate();
        console.log("Connected")
    }
    catch(err){
        console.log("Not Connected")
    }
}
check();

module.exports = sequelize;