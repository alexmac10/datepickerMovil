namespace Clases;

class APIServiceDesck {

    private $URL;
    private $KEYAPI;
    private $FIELDS;

    function __construct() {
        $this->dataBaseConnet();
    }

    private function dataBaseConnet() {
        $db = new Clases\BaseDatosAdist();        
        $valor = $db->connectBD();
        echo $valor;
    }
}
