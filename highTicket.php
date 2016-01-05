<?php
session_start();
if (!isset($_SESSION['k_username'])) {
    ?>
    <script type="text/javascript">
        var url = location.pathname;
        window.location = "/adist/index.php";
    </script>    
    <?php
    exit();
}
?> 
<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
    <!--<![endif]-->
    <head>
        <meta charset="utf-8" />
        <title>ADIST | Alta ticket</title>
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
        <meta content="" name="description" />
        <meta content="" name="author" />

        <!-- ================== COMIENZA BASE DE ESTILOS CSS  ================== -->
        <link href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
        <link href="../assets/plugins/jquery-ui/themes/base/minified/jquery-ui.min.css" rel="stylesheet" />
        <link href="../assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="../assets/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
        <link href="../assets/css/animate.min.css" rel="stylesheet" />
        <link href="../assets/css/style.min.css" rel="stylesheet" />
        <link href="../assets/css/style-responsive.min.css" rel="stylesheet" />
        <link href="../assets/css/theme/default.css" rel="stylesheet" id="theme" />
        <!-- ================== FINALIZA BASE DE ESTILOS CSS ================== -->

        <!-- ================== EMPEZANDO ARCHIVOS CSS DE LA PAGINA================== -->
        <link href="../assets/plugins/DataTables/css/data-table.css" rel="stylesheet" />
        <link href="../assets/plugins/bootstrap-datepicker/css/datepicker.css" rel="stylesheet" />
        <link href="../assets/plugins/bootstrap-datepicker/css/datepicker3.css" rel="stylesheet" />
        <link href="../assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css" rel="stylesheet"/>
        <link href="../assets/plugins/select2/dist/css/select2.min.css" rel="stylesheet" />        
        <link href="../assets/plugins/parsley/src/parsley.css" rel="stylesheet" />
        <link href="css/highTicket.css" rel="stylesheet"/>
        <!-- ================== FINALIZANDO ARCHIVOS CSS DE LA PAGINA ================== -->

        <!-- ================== COMIENZA BASE JS ================== -->
        <script src="../assets/plugins/jquery/jquery-1.9.1.min.js"></script>
        <script src="../assets/plugins/jquery/jquery-migrate-1.1.0.min.js"></script>
        <script src="../assets/plugins/jquery-ui/ui/minified/jquery-ui.min.js"></script>
        <script src="../assets/plugins/bootstrap/js/bootstrap.min.js"></script>
        <!--[if lt IE 9]>
                <script src="assets/crossbrowserjs/html5shiv.js"></script>
                <script src="assets/crossbrowserjs/respond.min.js"></script>
                <script src="assets/crossbrowserjs/excanvas.min.js"></script>
        <![endif]-->
        <script src="../assets/plugins/slimscroll/jquery.slimscroll.min.js"></script>
        <script src="../assets/plugins/jquery-cookie/jquery.cookie.js"></script>
        <!-- ================== FINALIZANDO BASE JS ================== -->

        <!-- ================== COMIENZA BASE JS ================== -->
        <script src="../assets/plugins/pace/pace.min.js"></script>
        <!-- ================== FINALIZANDO BASE JS ================== -->

        <!-- ================== EMPEZANDO ARCHIVOS JS DE LA PAGINA================== -->
        <script src="../assets/plugins/DataTables/js/jquery.dataTables.js"></script>
        <script src="../assets/plugins/DataTables/js/dataTables.responsive.js"></script>
        <script src="../assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
        <script src="../assets/plugins/select2/dist/js/select2.min.js"></script>
        <script src="../assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js"></script>
        <script src="../assets/plugins/parsley/dist/parsley.js"></script>
        <script src="../assets/plugins/parsley/src/i18n/es.js"></script>
        <script src="../assets/js/apps.min.js"></script>
        <script src="js/highTicket.js"></script>
        <!-- ================== FINALIZANDO ARCHIVOS JS DE LA PAGINA ================== -->

    </head>
    <body class="pace-top">
        <!-- Empezando #page-loader -->
        <div id="page-loader" class="fade in"><span class="spinner"></span></div>
        <!-- Finalizando #page-loader -->
        <!-- Empezando pagina-contenedor -->
        <div id="page-container" class="fade page-sidebar-fixed page-header-fixed">
            <!-- Empezando Cabezera -->
            <div id="header" class="header navbar navbar-default navbar-fixed-top">
                <!-- Empezando contenedor-fluido -->
                <div class="container-fluid">
                    <!-- Empezando mobile sidebar expand / collapse button -->
                    <div class="navbar-header">
                        <a href="dashboard" class="navbar-brand"><span class="fa fa-desktop"></span> ADIST V 2.0</a>
                        <button type="button" class="navbar-toggle" data-click="sidebar-toggled">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                    <!-- Finalizando mobile sidebar expand / collapse button -->

                    <!-- Empezando cabecera de navegacion derecha -->
                    <ul class="nav navbar-nav navbar-right">
                        <!--Empezando barra de busqueda-->
                        <li>
                            <!--se eliminio barra de buquedea ya por el momento no se utiliza-->
                        </li>
                        <!--Finalizando barra de busqueda-->
                    </ul>
                    <!-- Finalizando cabecera de navegacion derecha -->
                </div>
                <!-- Finalizando contenedor-fluido -->
            </div>
            <!-- Finalizando cabezera -->

            <!-- Empezando #sidebar -->
            <div id="sidebar" class="sidebar">
                <!-- Empezando sidebar scrollbar -->
                <div data-scrollbar="true" data-height="100%">
                    <!-- Empezando sidebar usuario -->
                    <ul class="nav">
                        <li class="nav-profile">
                            <div class="image">
                                <a href="javascript:;"><img src="<?php echo $_SESSION['url']; ?>" alt="" /></a>
                            </div>
                            <div class="info">
                                <?php echo $_SESSION["k_username"]; ?>                                
                            </div>
                        </li>
                    </ul>
                    <!-- Finalizando sidebar usuario -->

                    <!-- Empezando sidebar menu nav -->
                    <ul class="nav" id="menuPrincipal">
                        <!-- Empezando sidebar boton oculatar menu nav -->
                        <li id="hideMenu"><a href="javascript:;" class="sidebar-minify-btn" data-click="sidebar-minify"><i class="fa fa-angle-double-left"></i></a></li>
                        <!-- Finalizando sidebar boton oculatar menu nav -->


                        <!-- Link para la version Adist 2.0 -->
                        <li class="has-sub" id="adistV2">
                            <a href="/adist">
                                <i class="fa fa-laptop"></i>
                                <span>Regresar</span>
                            </a>
                        </li>
                        <!-- Finalizando Link para la version Adist 2.0 -->

                        <!--Empezando titulo del menu nav-->
                        <li class="nav-header">Menu Principal</li>
                        <!--Finalizando titulo del menu nav-->

                        <!--Empezando opciones del menu nav-->
                        <!--aqui se mostraran la ocpines del menu principal segun el perfil que tengan-->

                        <li class="has-sub active">
                            <a href="highTicket.php"> 
                                <i class="fa fa-ticket"></i>
                                <span>Solicitudes Cinemex</span>
                            </a>                                  
                        </li>
                        <!--                        <li class="has-sub">
                                                    <a href="tracingTicket.php"> 
                                                        <i class="fa fa-eye"></i>
                                                        <span>Seguimiento</span>
                                                    </a>      
                                                </li>-->
                        <!--Finalizando opciones del menu nav-->
                    </ul>
                    <!-- Finalizando sidebar menu nav -->
                </div>
                <!-- Finalizando sidebar scrollbar -->
            </div>
            <div class="sidebar-bg"></div>
            <!-- Finalizando #sidebar -->

            <!-- Empezando #contenido -->
            <div id="content" class="content">

                <!-- Empezando titulo de la pagina -->
                <h1 class="page-header">Alta <small>de tickets</small> </h1>
                <!-- Finalizando titulo de la pagina -->

                <!-- Empezando row -->
                <div class="row">
                    <!-- end col-12 -->
                    <div class="col-md-12">                        
                        <!--Iniciando Panel de solicitudes levantas cinemex-->
                        <div class="panel panel-inverse" data-sortable-id="index-1">                            
                            <div class="panel-body">
                                <div class="col-md-12 text-center m-b-20 hidden-xs">
                                    <h4 class="f-w-700">INGENIEROS</h4>
                                </div>

                                <div id="ingenieros">

                                </div>

                                <!-- Empezando fila 4 -->
                                <div class="row" >
                                    <div class="col-md-4 col-md-offset-4 text-center">                                        
                                        <button type="button" class="btn btn-sm btn-success" id="btnLoadData">Recargar Datos</button>
                                    </div>
                                </div>
                                <!-- Finalizando fila 4 -->

                                <!--Separdor-->
                                <div class="underline m-b-15 m-t-15"></div>

                                <!--Empezando fila 5-->                                
                                <div class="row" id="showTable">
                                    <div class="col-md-12 text-center">
                                        <h4 class="f-w-700">Solicitudes Levantadas</h4>
                                    </div>
                                    <div class="col-md-12">
                                        <table id="data-table" class="table table-hover table-striped table-bordered responsive nowrap" width="100%">
                                            <thead>
                                                <tr>
                                                    <th class="all">Folio SD</th>
                                                    <th class="not-mobile">Asunto</th>
                                                    <th class="not-mobile">Solicitante</th>
                                                    <th class="all">Técnico</th>
                                                    <th class="not-mobile">Estatus</th>
                                                    <th class="not-mobile">Creador</th>
                                                    <th class="not-mobile">Fecha</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            </tbody>
                                        </table>
                                    </div>    
                                </div>
                                <!--Finalizando fila 5-->
                            </div>
                        </div>
                        <!--Finalizando Panel de solicitudes levantas cinemex-->
                    </div>
                    <!-- end col-12 -->
                </div>
                <!-- Finalizando row -->
            </div>
            <!-- Finalizando #contenido -->

            <!-- Empezando boton scroll para regresar a la parete superior de la pagina -->
            <a href="javascript:;" class="btn btn-icon btn-circle btn-success btn-scroll-to-top fade" data-click="scroll-top"><i class="fa fa-angle-up"></i></a>
            <!-- Fin de  boton scroll -->
        </div>
        <!-- Finalizando pagina-contenedor -->

        <!--cuadro de dialogo-->
        <div class="modal modal-message fade" id="modal-message">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close hidden" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 class="modal-title"></h4>
                    </div>
                    <div class="modal-body">
                    </div>
                    <div class="modal-footer">
                        <a href="javascript:;" class="btn btn-sm btn-white" data-dismiss="modal" id="btnAbort">Cancelar</a>
                        <a href="javascript:;" class="btn btn-sm btn-primary" id="btnConfirm">Aceptar</a>
                    </div>
                </div>
            </div>
        </div>
        <!--fin de cuadro de dialogo-->
</html>



