function check() {
    var value = document.getElementById('data').value;
    // alert(value);
    var res = Math.sign(value);
    document.getElementById('res').InnerText='res';
}