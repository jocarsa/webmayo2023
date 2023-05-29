<?php
$row = 1;
if (($handle = fopen("https://docs.google.com/spreadsheets/d/e/2PACX-1vQXljt4KQhIusqy0ljWi0NnH5pKGrY35Ejds8IX5wrtl9LdFUO2boB6arCY7WiwVwAzgqdWSBJYmYHG/pub?output=csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
        $num = count($data);
        echo "<p> $num fields in line $row: <br /></p>\n";
        $row++;
        for ($c=0; $c < $num; $c++) {
            echo $data[$c] . "<br />\n";
        }
    }
    fclose($handle);
}
?>
