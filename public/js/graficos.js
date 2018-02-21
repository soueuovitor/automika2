$(function(){        

	
    /* Bar dashboard chart */
    Morris.Bar({
        element: 'grafico-marcas',
        data: [
            { y: 'qwertyuiop+', a: marcaA()},
            { y: 'rwdczxc', a: marcaB()}
        ],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Numero de veiculos'],
        barColors: ['#33414E'],
        gridTextSize: '10px',
        hideHover: true,
        resize: true,
        gridLineColor: '#E5E5E5',
        xLabelMargin: 10
    });

});

