<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="../lettercount/style.css">
    <title>Word/Letter Count</title>
</head>
<body>
<h1>Word/Letter Count</h1>

<script type=text/javascript src='../lettercount/lbtletters.js'></script>
    <section id='mainflex'>
        <div id='leftflex'>
            <form onsubmit='addpar(); return false;'>
                <textarea name='text' id='text' rows='40' cols='100' placeholder="Type in your input here. Then, click on Submit."></textarea>
                <br>
                <button class='button1' id='submit' name='submit' type='submit' value='submit' disabled>Submit</button>
            </form>
        </div>

        <div id='rightflex'>
            <h2>Results:</h2>
            <div id='letterswords'></div>
            <form onsubmit='clearpar(); return false;'>
                <button class='button2' id='submit2' name='submit2' type='submit' value='Clear'>Clear</button>
            </form>
        </div>

    </section>

    <script>
        document.querySelector('#text').onkeyup = function() {
            if (document.querySelector('#text').value === '') {
                document.querySelector('#submit').disabled = true;
            }
            else {
                document.querySelector('#submit').disabled = false;
            }
        }
    </script>