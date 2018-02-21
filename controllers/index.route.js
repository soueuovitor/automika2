const express = require('express');
const router = express.Router();
const modelClientes = require('../models/clientes.model');

router.get('/',global.secure('admin'), function(request, response){
	console.log(request.user);

	
	//console.log(request.isAuthenticated());
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
		
		

		
	response.set("Content-Type", "text/html");
	response.render('./index', {
		clientes : clientes,
		numeroClientes : numeroClientes,
		clientesAtivo : clientesAtivo,
		fClientes : fClientes
	})
})
});

module.exports = router;