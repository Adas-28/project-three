const Click = () =>{
    var rate = Number(document.getElementById('rate').value);
    var quantity = Number(document.getElementById('quantity').value);
    var total = rate * quantity;
    var dist = document.getElementById('dist').value;

    var per = ( total * dist ) /100;
    var newtotal = total - per;

    document.getElementById('total').value = newtotal;
}