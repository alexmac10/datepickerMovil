namespace Clases;

define('_HOST_', "localhost");
define('_USER_', "");
define('_PASW_', "");
define('_BASEDATOS_', "");

class BaseDatosAdist {

    private $MYSQLI;

    function __construct() {

    }

    public function connectBD() {
        $mysqli = new mysqli("localhost", "usertest_usr", "adist01", "adist_usertest");
        if ($mysqli->connect_errno) {
            return 'Fallo al conectar a la base de datos :';
        } else {
            return 'conectado';
        }
    }

}
