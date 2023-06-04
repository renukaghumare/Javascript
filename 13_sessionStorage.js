<!DOCTYPE html>
<html lang="en">
<head>
     <title>Session Storage</title>
</head>
<body>
    <h2> Session Storage </h2>
    <script>
        window.sessionStorage.setItem("name", "Elon");
        window.sessionStorage.setItem("country", "US");
        window.sessionStorage.setItem("pin", "4567");

        // Remove Item
        window.sessionStorage.removeItem("pin");

        //Get Item
        const nameItem = window.sessionStorage.getItem("country");
        console.log(nameItem);

    </script>

</body>
</html>