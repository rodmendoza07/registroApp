
function CatEventos() {
	var that = this;
	this.idioma = new IdiomaDataTables();
	this.columnasEventos =  [
			{ title: "Evento" },
			{ title: "Cliente" },
            { title: "Fecha" },
            { title: "Lugar" },
            { title: "Confirmados" },
            { title: "Cancelados"},
            { title: "Convocatoria"},
        ];
    this.datos = [
    				['Select Estrategia','Cisco Systems','2016-09-15','Crowne Plaza WTC','8 / 23','3 / 8','Iniciada vence 2016-09-15'],
    				['Select Estrategia','Cisco Systems','2016-09-15','Crowne Plaza WTC','8 / 23','3 / 8','Vencida el 2016-09-13'],
    				['Select Estrategia','Cisco Systems','2016-09-15','Crowne Plaza WTC','8 / 23','3 / 8','Sin iniciar'],
    				
    				
    			];

   	function limpiaDivs() {
   		$("#catEventos").empty();
   		$("#catContactos").empty();
   		$("#catUsuarios").empty();
   	}

    this.pintaTabla =  function () {
    	try {
    		
    		for (j = 0; j < that.datos.length; j++) {
    			
    			switch(that.datos[j][6]) {
    				case 'Vencida el 2016-09-13':
    					that.datos[j][6] = "<span class='label label-danger'>"
    							+ that.datos[j][6] + '</span>';
    					break;

    				case 'Sin iniciar':
    					that.datos[j][6] = "<span class='label label-info'>"
    							+ that.datos[j][6] + '</span>';
    					break;

    				case 'Iniciada vence 2016-09-15':
    					that.datos[j][6] = "<span class='label label-success'>"
    							+ that.datos[j][6] + '</span>';
    					break;
    			}	
    		}
    		
    		var espanol = that.idioma.espanol;
    		var table = $("#tableProxEventos").DataTable({
    			data: that.datos,
    			columns: that.columnasEventos,
    			"language": that.idioma.espanol,
    			"scrollX": true
    		});

    		$('#tableProxEventos tbody').on('click', 'tr', function () {
        		var data = table.row( this ).data();
        		that.dialogContactos();
        		//$('#dialogContactos').modal('show')
        		console.log("hola como estas");
   			});
    	}
    	catch (x) {
    		console.log("Error CatEventos.pintaTabla --- " + x);
    	}
    	
    }
	
	this.cargaUIEventos = function () {
		$("#idCatEventos").click(function () {
			limpiaDivs();
			$("#catEventos").css("display","inline");
			$("#catEventos").load("eventos.html", function() {
				that.ProxEventos();

			});
		});
	}

	this.ProxEventos = function () {
		$("#proximosEventos").append('<table id="tableProxEventos" class="table table-bordered table-hover table-striped" cellspacing="0" width="100%" style="cursor:pointer">');
		that.pintaTabla();
	}

	this.HistoricoEventos = function () {
		$("#historicoEventos").append('<table id="tableHistoricoEventos" class="table table-bordered table-hover table-striped" cellspacing="0" width="100%">');
	}

	this.dialogContactos = function () {
		$("#proximosEventos").append(

            '<div class="row" id="dialogContactos" title="Confirmar asistencia">'
            	+'<div class="col-md-12">'
            		+'<table id="confirmarAsistencia" class="table table-bordered table-hover table-striped" cellspacing="0" width="100%"></table>'
            	+'</div>'
            +'</div>'
		);
		$("#dialogContactos").dialog({
			autoOpen: false,
			height: 450,
			width: 600,
			modal: true,
			buttons: {
				"Confirmar asistencia": function () {},
				"Cancelar": function () {
					$("#dialogContactos").empty();
					$("#dialogContactos").dialog('destroy').remove()
				}
			},
			open: function(){
				that.pintaInvitados();
			},
			close: function () {
				$("#dialogContactos").empty();
				$("#dialogContactos").dialog('destroy').remove()
			},

		});

		$("#dialogContactos").dialog("open"); 
		
	}

	this.columnasInvitados = [
		{ title: '' },
		{ title: 'Nombre' },
		{ title: 'Puesto' },
		{ title: 'Empresa' },
	];

	this.datosAsistentes = [
		['Invitado 01','CEO','CTS'],
		['Invitado 02','CEO','CTS'],
		['Invitado 03','CEO','CTS'],
		['Invitado 04','CEO','CTS'],
		['Invitado 05','CEO','CTS'],
		['Invitado 06','CEO','CTS'],
		['Invitado 07','CEO','CTS'],
		['Invitado 08','CEO','CTS'],
		['Invitado 09','CEO','CTS'],
		['Invitado 10','CEO','CTS'],
		['Invitado 11','CEO','CTS'],
		['Invitado 12','CEO','CTS'],
		['Invitado 13','CEO','CTS'],
		['Invitado 14','CEO','CTS'],
		['Invitado 15','CEO','CTS'],
		['Invitado 16','CEO','CTS'],
		['Invitado 17','CEO','CTS'],
		['Invitado 18','CEO','CTS'],
		['Invitado 19','CEO','CTS'],
		['Invitado 20','CEO','CTS'],
	];

	this.pintaInvitados = function () {
		try {
			console.log("original --- " + that.datosAsistentes);
			var dasistentes = that.datosAsistentes;
			console.log("auxiliar --- " + dasistentes);
			var chkConfirmar ="";
			for (var i = 0; i <dasistentes.length; i++) {
				chkConfirmar = '<div class="checkbox">'
				+'<label><input type="checkbox" value="">Option 1</label>'
				+'</div>';
				console.log(chkConfirmar);
				dasistentes[i].splice(0,0,chkConfirmar);
				
			}
			console.log("splice --- " + dasistentes);
		} 
		catch(x) {
			console.log("Error CatEventos.pintaInvitados --- " + x);
		}
	}
}