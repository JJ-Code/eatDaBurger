module.exports = function (sequelize, DataTypes) {
    var Customers = sequelize.define("Customers", {
        // Giving the Customer model a name of type STRING
        name: DataTypes.STRING
    });

    Customers.associate = function (models) {
        // Associating Customer with Posts
        // When an Customer is deleted, also delete any associated Posts
        Customers.hasMany(models.Burgers, {
            onDelete: "cascade"
        });
    };

    return Customers;
};
