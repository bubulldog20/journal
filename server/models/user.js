// email (store a string) and also have null = false
// password (store a string) and also have null = false

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('user', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            //The unique: true property is another optional property that means all data (in this case all emails) must be unique and you cannot have any duplicates. This is something you will often see used when a new user signs up to a website. 
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return User;
};
    