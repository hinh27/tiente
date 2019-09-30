function converst() {
    var  amount = Number(document.getElementById("amount").value)   ;
    var Form_Currency= document.getElementById("chuyendoi1").value;
    var To_Currency = document.getElementById("chuyendoi2").value;
    var x = 0;
    if(Form_Currency=="USD" && To_Currency=="VNĐ" ){
        x = amount*23000 + "VNĐ";
    }
    else {
        if(Form_Currency=="VNĐ" && To_Currency=="USD" ){
            x=amount/23000 + "USD";
        }
        else {
            x ="Nhập lại"
        }
    }
    document.getElementById("result").innerText = x;
}