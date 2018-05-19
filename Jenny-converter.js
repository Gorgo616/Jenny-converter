<script>
function init()
{
    var jen = document.getElementById("jen");
    var pai = document.getElementById("pai");
    var yen = document.getElementById("yen");
    var usd = document.getElementById("usd");
}

function jenfunc()
{
    pai.value = parseFloat(jen.value) * 500;
    yen.value = parseFloat(jen.value) * 0.9;
    usd.value = parseFloat(jen.value) / 94.815;}

function paifunc()
{
    jen.value = parseFloat(pai.value) * 0.002;
    yen.value = parseFloat(jen.value) * 0.9;
    usd.value = parseFloat(jen.value) / 94.815;
}

function yenfunc()
{
    jen.value = parseFloat(yen.value) / 0.9;
    pai.value = parseFloat(jen.value) * 500;
    usd.value = parseFloat(yen.value) / 105.35;
}

function usdfunc()
{
    jen.value = parseFloat(usd.value) * 94.815;
    pai.value = parseFloat(jen.value) * 500;
    yen.value = parseFloat(usd.value) * 105.35;
}

init();
</script>
<form id="form_currency">
Ｊ<input type="text" id="jen" size="15" value="" oninput="jenfunc()" onkeypress="return event.charCode >= 48 && event.charCode <= 57 || event.keyCode == 08 || event.keyCode == 09 || event.charCode == 44 || event.charCode == 46 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46 || event.ctrlKey === true || event.metaKey === true"></input>
<label for="jen"> (Jenny)</label> <br />
Ｐ<input type="text" id="pai" size="15" value="" oninput="paifunc()" onkeypress="return event.charCode >= 48 && event.charCode <= 57 || event.keyCode == 08 || event.keyCode == 09 || event.charCode == 44 || event.charCode == 46 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46 || event.ctrlKey === true || event.metaKey === true"></input>
<label for="pai"> (Pail)</label> <br />
¥ <input type="text" id="yen" size="15" value="" oninput="yenfunc()" onkeypress="return event.charCode >= 48 && event.charCode <= 57 || event.keyCode == 08 || event.keyCode == 09 || event.charCode == 44 || event.charCode == 46 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46 || event.ctrlKey === true || event.metaKey === true"></input>
<label for="yen"> (Japanese yen)</label> <br />
$ <input type="text" id="usd" size="15" value="" oninput="usdfunc()" onkeypress="return event.charCode >= 48 && event.charCode <= 57 || event.keyCode == 08 || event.keyCode == 09 || event.charCode == 44 || event.charCode == 46 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46 || event.ctrlKey === true || event.metaKey === true"></input>
<label for="usd"> (U.S. dollar)</label></form>
<style>.btn {background-color: #4CAF50; /* Green */ border-radius: 8px; color: white; padding: 5px 16px; display: inline-block; font-size: 12px;}</style>
<button type="reset" class="btn" form="form_currency" value="Reset">Clean</button>
