module.exports = {
	list(callback) {
		var sql = 'SELECT * from vendas';
		global.connection.query(sql, function (error, rows, fields) {
			if (error) throw error;
			callback(rows);
			
		});
	},

	dropdown(callback) {
		var sql = 'SELECT matricula, valor_venda from veiculos';
		global.connection.query(sql, function(error, rows, fields){
			if (error) throw error;
			callback(rows);
		});
	},
	read(matricula, callback) {
		var sql = "SELECT * from veiculos where matricula=?";
		global.connection.query(sql, [matricula], function (error, rows, fields) {
			if (error) throw error;
			callback(rows[0]);
		});
	},


	create(data, callback) {
		var sql = "INSERT INTO vendas (comprador, carro, preco) VALUES (?,?,?)";
		global.connection.query(
			sql, [data.comprador, data.carro, data.preco ],
			function (error, rows, fields) {
				if (error) throw error;
                callback(rows[0]);
			});
	},

	updatecarro(data, callback) {
		var sql = "UPDATE veiculos SET  ativo=0 WHERE matricula=?";
		global.connection.query(
			sql, [data.carro],
			function (error, rows, fields) {
				if (error) throw error;
				callback(rows[0]);
			});
	},

};