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
// contar total de veiculos dos varios tipos- inicio

var veiStock = 0;
var veiVendidos = 0;
for(var v of veiculos){
	if (v.ativo == 1){
		veiStock = veiStock + 1;
	}else{
		veiVendidos = veiVendidos + 1;
	}
}

// contar total de veiculos dos varios tipos- fim
	var marca1 = 0;
	var marca2 = 0;
	for(var v of veiculos){
		
		//Contar os veiculos de cada marca- inicio
		if (v.marca == "qwertyuiop+" ){
			
			marca1 = marca1 + 1;
		}else{
			marca2 = marca2 + 1;
		}
	}
	//Contar os veiculos de cada marca- fim
	//Ver gastos- inicio
	var gastos = 0;
	for(var v of veiculos){
		gastos = gastos + v.valor_compra;
		gastos = gastos + v.despesas;
		
	}

	//Ver gastos- fim
		//Ver ganhos- inicio
		var ganhos = 0;
		for(var v of veiculos){
			
			if (v.ativo == 0){
			
				ganhos = ganhos + v.valor_venda;
			
			}
		}
	
		//Ver ganhos- fim
				//Ver lucro- inicio
				var lucro = ganhos - gastos;
				
			
				//Ver lucro- fim


	

		

		
	response.set("Content-Type", "text/html");
	response.render('./index', {
		clientes : clientes,
		veiculos : veiculos,
		numeroClientes : numeroClientes,
		clientesAtivo : clientesAtivo,
		fClientes : fClientes,
		veiStock : veiStock,
		veiVendidos : veiVendidos,
		marca1 : marca1,
		marca2 : marca2, 
		gastos : gastos,
		ganhos : ganhos,
		lucro : lucro,
	})
})
});
});


module.exports = router;