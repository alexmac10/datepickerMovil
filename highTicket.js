$(function () {
    DownLoadData.init(false);
    App.init();
    Plugins.init();
    DownLoadData.insertRequestIng();
    DownLoadData.insertDetailIng();
    Eventos.init();
});

//Manejador que resetea el modal cuando se sierra
var handleModalClose = function () {
    $('#modal-message').on('hidden.bs.modal', function () {
        $('.modal-title').empty();
        $('.modal-body').empty();
        $('#btnConfirm').empty().append('Aceptar').removeClass('hidden');
        $('#btnAbort').empty().append('Cancelar').removeClass('hidden');
    });
};

//Manjador de el boton recargar datos
var handleLoadData = function () {
    $('#btnLoadData').on('click', function () {
        DownLoadData.init(true);
        DownLoadData.insertRequestIng();
        DownLoadData.insertDetailIng();
    });
};

//Manejador de eventos de para la filas de la Solicitudes Levantadas y el modal para generar el ticket
var handleRowTable = function () {
    var table = $('#data-table').DataTable();

    $('#data-table tbody').on('click', 'tr', function () {
        var data = table.row(this).data();
        var datos = DownLoadData.downDetailsIng(data[0]);
        var historial = DownLoadData.downHistoryFolio(data[0]);
//        handleModal();
        var htmlhistory = '<div id="history" class="col-md-12 hidden">';
        $.each(historial, function (key, value) {
            $.each(value, function (key2, value2) {
                htmlhistory += value2 + '<br >';
            });
        });
        htmlhistory += '</div>';
        htmlhistory += '<div class="col-md-12 text-center hidden"><a href="javascript:;" class="btn btn-sm btn-white" id="closeHistory">Cerrar</a></div>';
        var html = '';
        html += '<form class="form-horizontal" data-parsley-validate="true" id="formNewTicket">';
        html += '     <div class="form-group">';
        html += '        <label class="control-label">LLenar el siguiente formulario para generar el ticket:</label>';
        html += '     </div>';
        html += '   <div class="form-group">';
        html += '       <label class="col-xs-6 col-md-2 control-label m-t-10 f-w-600">Folio</label>';
        html += '       <div class="col-xs-6 col-md-4 m-t-10">';
        html += '            <label class="control-label">#' + data[0] + '</label>';
        html += '       </div>  ';
        html += '       <label class="col-xs-6 col-md-2 control-label m-t-10 f-w-600">Tipo</label>';
        html += '       <div class="col-md-4 m-t-10">';
        html += '           <select class="default-select2 form-control selectTipo" style="width: 100%" name="tipo" required>';
        html += '              <option value="">Seleccionar ...</option>';
        html += '           </select>';
        html += '       </div>  ';
        html += '   </div>';
        html += '   <div class="form-group">';
        html += '       <label class="col-xs-6 col-md-2 control-label m-t-10 f-w-600">Creador</label>';
        html += '       <div class="col-xs-6 col-md-4 m-t-10">';
        html += '            <label class="control-label">' + data[5] + '</label>';
        html += '       </div>  ';
        html += '       <label class="col-xs-6 col-md-2 control-label m-t-10 f-w-600">Fecha de Creación</label>';
        html += '       <div class="col-xs-6 col-md-4 m-t-10">';
        html += '            <label class="control-label">' + data[6] + '</label>';
        html += '       </div>  ';
        html += '   </div>';
        html += '   <div class="form-group">';
        html += '      <label class="col-md-2 control-label m-t-10 f-w-600" >Asignador</label>';
        html += '      <div class="col-md-4 m-t-10">';
        html += '          <div class="input-group">';
        html += '              <select class="default-select2 form-control selectAsignador" style="width: 100%" name="asignador" required>';
        html += '                <option value="">Seleccionar ...</option>';
        html += '              </select>';
        html += '              <span class="input-group-addon" style="cursor: pointer;" id="popoverRecord"><i class="fa fa-search"></i></span>';
        html += '          </div>';
        html += '      </div>  ';
        html += '      <label class="col-md-2 control-label m-t-10 f-w-600" >Fecha de Asignación</label>';
        html += '      <div class="col-md-2 m-t-10">';
        html += '          <div class="input-group date" id="dateTimeAssign" data-date-format="dd-mm-yyyy" data-date-start-date="Date.default">';
        html += '               <input type="text" class="form-control" placeholder="fecha" readonly required/>';
        html += '               <span class="input-group-addon iconCalendarMovil">';
        html += '                   <i class="fa fa-calendar"></i>';
        html += '               </span>';
        html += '          </div>';
        html += '          <div id="calendarMovil" class="visible-xs hidden"></div>';
        html += '      </div>  ';
        html += '      <div class="col-md-2 m-t-10">';
        html += '          <div class="input-group bootstrap-timepicker">';
        html += '               <input id="timepicker" type="text" class="form-control" />';
        html += '               <span class="input-group-addon">';
        html += '                   <i class="fa fa-clock-o"></i>';
        html += '               </span>';
        html += '          </div>';
        html += '          <div></div>';
        html += '      </div>  ';
        html += '   </div>';
        html += '   <div class="form-group">';
        html += '      <label class="col-md-2 control-label m-t-10 f-w-600" >Sucursal</label>';
        html += '      <div class="col-md-4 m-t-10">';
        html += '            <select class="default-select2 form-control selectSucursal" style="width: 100%" name="sucursal" required>';
        html += '              <option value="">Seleccionar ...</option>';
        html += '            </select>';
        html += '      </div>  ';
        html += '      <label class="col-md-2 control-label m-t-10 f-w-600" >Ingeniero</label>';
        html += '      <div class="col-md-4 m-t-10">';
        html += '            <select class="default-select2 form-control selectIng" style="width: 100%" name="ingeniero" required>';
        html += '              <option value="">Seleccionar ...</option>';
        html += '            </select>';
        html += '      </div>  ';
        html += '   </div>';
        html += '   <div class="form-group">';
        html += '       <label class="col-md-2 control-label m-t-10 f-w-600">Descripción</label>';
        html += '      <div class="col-md-10 m-t-10">';
        html += '            <label class="control-label text-left">';
        html += datos[3];
        html += '            </label>';
        html += '      </div>  ';
        html += '   </div>';
        html += '   <div class="form-group">';
        html += '       <label class="col-md-2 control-label m-t-10 f-w-600">Resolución SD</label>';
        html += '      <div class="col-md-10 m-t-10">';
        html += '            <label class="control-label text-left">';
        html += datos[5];
        html += '            </label>';
        html += '      </div>  ';
        html += '   </div>';
        html += '</form>';
        html += '<div class="alert alert-success fade in m-b-15 hidden" id="updateUser">';
        html += '   <strong>Se cancelo con exito el ticket.</strong>';
        html += '   <span class="close" data-dismiss="alert">&times;</span>';
        html += '</div>';
        html += htmlhistory;
        //muestra el modal con el formulario
        $('.modal-title').empty().append('Generar Ticket');
        $('.modal-body').empty().append(html);
        $('#btnConfirm').empty().removeClass('hidden').append('Generar');
        $('#btnAbort').empty().removeClass('hidden').append('Cancelar');

        //Boton que muestra el ticket generado
        $('#btnConfirm').on('click', function () {

            $('#formNewTicket').parsley().validate();
            if ($('#formNewTicket').parsley().isValid() !== false) {
                html = '';
                html += '   <div class="col-md-12 text-center">';
                html += '       <h4 class="f-w-600">Numero de ticket generado</h4>';
                html += '   </div>';
                html += '   <div class="col-md-12 text-center">';
                html += '       <h3 class="f-w-600">489635</h3>';
                html += '   </div>';
                html += '   <div class="col-md-12 text-center">';
                html += '       <button type="button" class="btn btn-sm btn-success tracing" >Seguimiento</button>';
                html += '   </div>';
                $('.modal-body').empty().append(html);
                $('#btnConfirm').empty().addClass('hidden');
                $('#btnAbort').empty().append('Cerrar');
            }
        });

        //Cargando plugin select para el formulario
        handleSelect2();

        //Cargando contenidos del select del modal
        handleSelectModal(datos, data[5], data[2], data[3]);

        //Manejador para mostrar el historial del folio
        handleShowHistory();

        //Manejador de mostrar datapicker
        handleDatePickerTimepicker();

    });

    //Manejador del boton de seguimiento del ticket
    $('#modal-message').on('click', '.tracing', function () {
    });

};

//Llenar select del modal del folio
var handleSelectModal = function (datos, creador, solicitante, ingeniero) {
    //Carga los datos al select2 de Asignador
    var asignador = [];
    $.each(datos[0], function (key, value) {
        asignador[key] = {id: value.nombre, text: value.nombre};
    });

    $('.selectAsignador').select2({
        data: asignador
    });

    //Carga los datos al select2 de Sucursales y si la sucursal esta definida
    // la establece en el select.
    var selection;
    var sucursales = [];
    $.each(datos[1], function (key, value) {
        sucursales[key] = {id: value.id, text: value.alias};
        if (value.name === creador) {
            selection = value.id;
        } else if (value.name === solicitante) {
            selection = value.id;
            ;
        }
    });

    $('.selectSucursal').select2({
        data: sucursales
    }).val(selection).trigger('change');


    //Carga los datos al select2 del los ingenieros y si el ingeniero esta definido
    // la establece en el select.
    var ingenieros = [];
    var selectionIng;
    $.each(datos[2], function (key, value) {
        ingenieros[key] = {id: value.id, text: value.Nombre};
        if (value.nameInge === ingeniero) {
            selectionIng = value.id;
        }
    });

    $('.selectIng').select2({
        data: ingenieros
    }).val(selectionIng).trigger('change');

    //Carga los datos al select2 de Tipo
    var servicio = [];
    $.each(datos[4], function (key, value) {
        servicio[key] = {id: value.nombre, text: value.nombre};
    });

    $('.selectTipo').select2({
        data: servicio
    });

};

//Muestra y oculta el historial del folio para obtener el asignador
var handleShowHistory = function (historial) {
    $('#popoverRecord').on('click', function () {
        $('.modal-title').empty().append('Historial del folio');
        $('#history').toggleClass('hidden');
        $('#closeHistory').parent().toggleClass('hidden');
        $('#formNewTicket').toggleClass('hidden');
        $('#btnConfirm').toggleClass('hidden');
        $('#btnAbort').toggleClass('hidden');
    });

    $('#closeHistory').on('click', function () {
        $('.modal-title').empty().append('Generar Ticket');
        $('#history').toggleClass('hidden');
        $('#closeHistory').parent().toggleClass('hidden');
        $('#formNewTicket').toggleClass('hidden');
        $('#btnConfirm').toggleClass('hidden');
        $('#btnAbort').toggleClass('hidden');
    });
};

//Plugin para obtener la fecha y la hora
var handleDatePickerTimepicker = function () {
    $('#dateTimeAssign').datepicker();
    $('#calendarMovil').datepicker();
    $('#timepicker').timepicker();
    $('#dateTimeAssign').on('click','.iconCalendarMovil', function(){
        $('#calendarMovil').toggleClass('hidden');
    });
};

//Plugin para generar tablas reponsive
var handleDataTableResponsive = function () {
    "use strict";
    if ($('#data-table').length !== 0) {
        $('#data-table').DataTable({
            responsive: {
                details: false
            },
            language: {
                "sProcessing": "Procesando...",
                "sLengthMenu": "Mostrar _MENU_ registros",
                "sZeroRecords": "No se encontraron resultados",
                "sEmptyTable": "Ningún dato disponible en esta tabla",
                "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
                "sInfoPostFix": "",
                "sSearch": "Buscar:",
                "sUrl": "",
                "sInfoThousands": ",",
                "sLoadingRecords": "Cargando...",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sLast": "Último",
                    "sNext": "Siguiente",
                    "sPrevious": "Anterior"
                },
                "oAria": {
                    "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                    "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                }
            }
        });

        //ocultando columnas
        $('#data-table').DataTable().column(5).visible(false);
        $('#data-table').DataTable().column(6).visible(false);
    }

};

//plugin para crear selects 
var handleSelect2 = function () {
    $(".default-select2").select2();
    $(".multiple-select2").select2({placeholder: "Seleccionar opciones"});
};

//plugin modal bootstrap
var handleModal = function () {
    $('#modal-message').modal({
        backdrop: 'static'
    });
};

//Se encarga de cargar los eventos
var Eventos = function () {
    "use strict";
    return {
        //main function
        init: function () {
            handleRowTable();
            handleModalClose();
            handleLoadData();
        }
    };
}();

//Se encarga de cargar los plugins
var Plugins = function () {
    "use strict";
    return {
        //main function
        init: function () {
            handleDataTableResponsive();
//            handleDatePickerTimepicker();
        }
    };
}();

var DownLoadData = function () {
    "use strict";
    var solicitudesTecnico;
    var detallesTecnico;
    var history;
    return {
        init: function (update) {
            $.ajax({
                url: "url",
                method: 'post',
                async: false,
                data: {},
                dataType: 'json',
                beforeSend: function () {
                    if (update) {
                        //muestra el modal con el formulario
                        handleModal();
                        $('.modal-title').empty().append('Actualizando Solicitudes');
                        $('.modal-body').empty().append('<div class="col-md-12 text-center m-b-10">Espere un momento en que se recarga las solicitudes</div><div class = "col-md-12 text-center"><i class="fa fa-2x fa-spin fa-refresh "></i></div> ');
                        $('#btnConfirm').empty().addClass('hidden');
                        $('#btnAbort').empty().addClass('hidden');
                    }
                }
            }).done(function (data) {
                if (data[2].session === 0) {
                    $('.modal-title').empty().append('Session Expirada');
                    $('.modal-body').empty().append('<div class="col-md-12 text-center">Tu sessión ha expirado favor de volver a registrarte en el sistema.</div> ');
                    $('#btnConfirm').empty().removeClass('hidden').append('cerrar');
                    $('#btnAbort').empty().addClass('hidden');

                    $('#btnConfirm').on('click', function () {
                        window.location.href = "/adist/index.php";
                    });
                } else {
                    $('#modal-message').modal('hide');
                    if (data[0].length === 0 && data[1].length === 0) {
                        solicitudesTecnico = null;
                        detallesTecnico = null;
                    } else {
                        solicitudesTecnico = data[0];
                        detallesTecnico = data[1];
                    }
                }

            });
        },
        insertRequestIng: function () {
            var fila = 0;
            var html = '';
            if (solicitudesTecnico === null) {
                // se muestra la leyenda cuando no hay solicitudes
                $('#ingenieros').empty().append('<div class="row m-b-30"><div class="col-md-12 text-center"><h3>NO HAY SOLICITUDES PENDIENTES POR LEVANTAR</h3></div></div>');
            } else {
                //Agregando  y creando filas para el panel
                $.each(solicitudesTecnico, function (key, value) {

                    //Creando los paneles de los ingenieros
                    if (fila >= 0 && fila < 4) {
                        if (fila === 0) {
                            html += '<!-- Empezando fila -->';
                            html += '<div class="row hidden-xs">';
                        }

                        html += '   <div class="col-md-3 col-sm-6">';
                        html += '       <div class="widget widget-stats bg-blue-darker button-substatus">';
                        html += '           <div class="stats-icon"><i class="fa fa-user"></i></div>';
                        html += '               <div class="stats-info">';
                        html += '                   <h4>' + value.tecnico + '</h4>';
                        html += '                   <p>' + value.folios + '</p>';
                        html += '               </div>';
                        html += '               <div class="stats-link">';
                        html += '                   <a href="javascript:;">';
                        html += '                       Solicitudes del ingeniero';
                        html += '                   </a>';
                        html += '               </div>';
                        html += '           </div>';
                        html += '       </div>';
                        fila++;
                        if (fila === 4) {
                            html += '</div>';
                            html += '<!-- Finalizando fila -->';
                            fila = 0;
                        }
                    }
                });

                //Agrega cada fila en panel
                $('#ingenieros').empty().append(html);
            }
        },
        insertDetailIng: function () {
            if (detallesTecnico === null) {
                $('#showTable').addClass('hidden');
            } else {
                $('#showTable').removeClass('hidden');
                var table = $('#data-table').DataTable();
                table.clear().draw();
                //Agregando contenido a la tabla de solicitudes
                $.each(detallesTecnico, function (key, value) {
                    table.row.add([value.folio, value.asunto, value.solicitante, value.tecnico, value.estatus, value.creador, value.fecha]).draw();
                });
            }
        },
        downDetailsIng: function (folio) {
            var resultado;
            $.ajax({
                url: "url",
                method: 'post',
                async: false,
                data: {folio: folio},
                dataType: 'json',
                beforeSend: function () {
                    handleModal();
                    $('.modal-title').empty().append('Descargando datos');
                    $('.modal-body').empty().append('<div class="col-md-12 text-center m-b-10">Espere un momento por favor.</div><div class = "col-md-12 text-center"><i class="fa fa-2x fa-spin fa-refresh "></i></div> ');
                    $('#btnConfirm').empty().addClass('hidden');
                    $('#btnAbort').empty().addClass('hidden');
                }
            }).done(function (data) {
                resultado = data;
            });
            return resultado;
        },
        downHistoryFolio: function (folio) {
            $.ajax({
                url: "url",
                method: 'post',
                async: false,
                data: {folio: folio},
                dataType: 'json',
            }).done(function (data) {
                history = data;
            });
            return history;
        }
    }
}();
