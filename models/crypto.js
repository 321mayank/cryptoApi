
module.exports = (sequelize, DataTypes) => {
    const crypto = sequelize.define("crypto", {
        name: {
            type: DataTypes.STRING
        },
        last: {
            type: DataTypes.STRING
        },
        buy: {
            type: DataTypes.STRING
        },
        sell: {
            type: DataTypes.STRING
        },
        volume: {
            type: DataTypes.STRING
        },
        base_unit: {
            type: DataTypes.STRING
        },
     
    
    })

    return crypto
}