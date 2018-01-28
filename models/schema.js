

module.exports = function(sequelize, Datatypes){
	var burger = sequelize.define("burger", {
		burger_name: {
			type: Datatypes.STRING,
			allowNull: false,
			validate: { len: [1] }
		},
		devoured: {
			type: Datatypes.BOOLEAN,
			default: false			
		}
	});
	return burger;
};

