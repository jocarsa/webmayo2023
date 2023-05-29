<?php
echo '{
    "articulos":[';
$archivo = file_get_contents("https://docs.google.com/spreadsheets/d/e/2PACX-1vQXljt4KQhIusqy0ljWi0NnH5pKGrY35Ejds8IX5wrtl9LdFUO2boB6arCY7WiwVwAzgqdWSBJYmYHG/pub?output=csv");
$array = array_map("str_getcsv", explode("\n", $archivo));

for($i = 1;$i<count($array);$i++){
    echo '
        {
            "titulo":"'.$array[$i][0].'",
            "imagen":"'.$array[$i][1].'",
            "fecha":"'.$array[$i][2].'",
            "texto":"'.$array[$i][3].'",
            "codigovideo":"'.$array[$i][4].'"
        },
    ';
}

$json = json_encode($array);
//print_r($json);

echo '{}]}';
?>
