module.exports = function (sequelize, DataTypes) {
    //creating burgers table 
    var Burgers = sequelize.define("Burgers", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false
        }, //end of burger_name column definition 
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        } //end of devoured

    }); //end of bugers table 

    //associate burgers table to customers
    Burgers.associate = function (models) {
        Burgers.belongsTo(models.Customers, {
            foreignKey: {
                allowNull: true
            }
        });
    };//end of associater

    return Burgers;
}; //