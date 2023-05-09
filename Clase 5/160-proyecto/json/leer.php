<?php
echo '{
    "articulos":[';
if (($handle = fopen("https://docs.google.com/spreadsheets/d/e/2PACX-1vQXljt4KQhIusqy0ljWi0NnH5pKGrY35Ejds8IX5wrtl9LdFUO2boB6arCY7WiwVwAzgqdWSBJYmYHG/pub?output=csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
    echo '
        {
            "titulo":"'.$data[0].'",
            "imagen":"'.$data[1].'",
            "fecha":"'.$data[2].'",
            "texto":"'.str_replace("/","",nl2br($data[3])).'aa",
            "codigovideo":"'.$data[4].'"
        },
    ';
    }
    fclose($handle);
}

echo '{}]}';
?>
