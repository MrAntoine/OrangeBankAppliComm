<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="https://fonts.googleapis.com/css?family=Roboto:200,400,500,600,700" rel="stylesheet">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <link rel="stylesheet" href="css/app.css">
  <title>Document</title>
</head>
<body>
  <div id="app">
  </div>
  <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>