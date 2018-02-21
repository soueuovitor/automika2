const express = require('express');
const router = express.Router();
const modelClientes = require('../models/clientes.model');
const modelVeiculos = require('../models/veiculos.model');

router.get('/',global.secure('admin'), function(request, response){
	console.log(request.user);
	//console.log(request.isAuthenticated());
//Clientes-------------------------
	modelClientes.list(function (clientes) {
		var numeroClientes = clientes.length;
		var clientesAtivo = 0;
		var fClientes = 0;
		for(i = 0; i <  clientes.length; i++){
			if (clientes.ativo = 1){
				clientesAtivo = clientesAtivo + 1;
			}else{
				fClientes = fClientes + 1;
			}
		}
//Veiculos-----------------

modelVeiculos.list(function (veiculos) {
	var marca1 = 0;
	var marca2 = 0;
	for(var v of veiculos){
		console.log(v.marca);
		//Contar os carros de cada marca- inicio
		if (v.marca == "qwertyuiop+" ){
			
			marca1 = marca1 + 1;
		}else{
			marca2 = marca2 + 1;
		}
	}
	//Contar os carros de cada marca- fim

	//

		

		
	response.set("Content-Type", "text/html");
	response.render('./index', {
		clientes : clientes,
		veiculos : veiculos,
		numeroClientes : numeroClientes,
		clientesAtivo : clientesAtivo,
		fClientes : fClientes,
		marca1 : marca1,
		marca2 : marca2, 
	})
})
});
});


module.exports = router;