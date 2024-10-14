<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Popup Animation Example</title>
    <style>
        #button {
            padding: 10px 20px;
            font-size: 16px;
            transition: transform 0.2s;
        }
        #button:hover {
            transform: scale(1.1);
        }
    </style>
</head>
<body>
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
        <button id="button">Hover over me!</button>
    </div>
</body>
</html>
