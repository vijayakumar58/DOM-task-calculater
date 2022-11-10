var table=document.createElement("table");
table.classList.add("calculator");

var tr1=document.createElement("tr");
tr1.classList.add("trow");

var th1=document.createElement("th");
var bh1=document.createElement("input");
bh1.classList.add("thead","th1");
bh1.setAttribute("type","text");
bh1.setAttribute("id","result");
th1.append(bh1);

var th2=document.createElement("th");
var bh2=document.createElement("input");
bh2.classList.add("thead");
bh2.setAttribute("type","button")
bh2.setAttribute("value","AC");
bh2.setAttribute("onclick","clearscreen()");
bh2.setAttribute("id","th2");
th2.append(bh2);
tr1.append(th1,th2);

var tr2=document.createElement("tr");
tr2.classList.add("trow");

var td1=document.createElement("td");
var bt1=document.createElement("input");
bt1.classList.add("tdata");
bt1.setAttribute("type","button");
bt1.setAttribute("value","1");
bt1.setAttribute("onclick","display('1')");
td1.append(bt1);

var td2=document.createElement("td");
var bt2=document.createElement("input");
bt2.classList.add("tdata");
bt2.setAttribute("type","button");
bt2.setAttribute("value","2");
bt2.setAttribute("onclick","display('2')");
td2.append(bt2);


var td3=document.createElement("td");
var bt3=document.createElement("input");
bt3.classList.add("tdata");
bt3.setAttribute("type","button");
bt3.setAttribute("value","3");
bt3.setAttribute("onclick","display('3')");
td3.append(bt3);


var td4=document.createElement("td");
var bt4=document.createElement("input");
bt4.classList.add("tdata");
bt4.setAttribute("type","button");
bt4.setAttribute("value","+");
bt4.setAttribute("onclick","display('+')");
bt4.setAttribute("id","tda");
td4.append(bt4);
tr2.append(td1,td2,td3,td4);

var tr3=document.createElement("tr");
tr3.classList.add("trow");

var td5=document.createElement("td");
var bt5=document.createElement("input");
bt5.classList.add("tdata");
bt5.setAttribute("type","button");
bt5.setAttribute("value","4");
bt5.setAttribute("onclick","display('4')");
td5.append(bt5);

var td6=document.createElement("td");
var bt6=document.createElement("input");
bt6.classList.add("tdata");
bt6.setAttribute("type","button");
bt6.setAttribute("value","5");
bt6.setAttribute("onclick","display('5')");
td6.append(bt6);

var td7=document.createElement("td");
var bt7=document.createElement("input");
bt7.classList.add("tdata");
bt7.setAttribute("type","button");
bt7.setAttribute("value","6");
bt7.setAttribute("onclick","display('6')");
td7.append(bt7);

var td8=document.createElement("td");
var bt8=document.createElement("input");
bt8.classList.add("tdata");
bt8.setAttribute("type","button");
bt8.setAttribute("value","-");
bt8.setAttribute("onclick","display('-')");
bt8.setAttribute("id","tda");
td8.append(bt8);
tr3.append(td5,td6,td7,td8);

var tr4=document.createElement("tr");
tr4.classList.add("trow");

var td9=document.createElement("td");
var bt9=document.createElement("input");
bt9.classList.add("tdata");
bt9.setAttribute("type","button");
bt9.setAttribute("value","7");
bt9.setAttribute("onclick","display('7')");
td9.append(bt9);

var td10=document.createElement("td");
var bt10=document.createElement("input");
bt10.classList.add("tdata");
bt10.setAttribute("type","button");
bt10.setAttribute("value","8");
bt10.setAttribute("onclick","display('8')");
td10.append(bt10);

var td11=document.createElement("td");
var bt11=document.createElement("input");
bt11.classList.add("tdata");
bt11.setAttribute("type","button");
bt11.setAttribute("value","9");
bt11.setAttribute("onclick","display('9')");
td11.append(bt11);

var td12=document.createElement("td");
var bt12=document.createElement("input");
bt12.classList.add("tdata");
bt12.setAttribute("type","button");
bt12.setAttribute("value","*");
bt12.setAttribute("onclick","display('*')");
bt12.setAttribute("id","tda");
td12.append(bt12);
tr4.append(td9,td10,td11,td12);

var tr5=document.createElement("tr");
tr5.classList.add("trow");

var td13=document.createElement("td");
var bt13=document.createElement("input");
bt13.classList.add("tdata");
bt13.setAttribute("type","button");
bt13.setAttribute("value",".");
bt13.setAttribute("onclick","display('.')");
bt13.setAttribute("id","tda");
td13.append(bt13);

var td14=document.createElement("td");
var bt14=document.createElement("input");
bt14.classList.add("tdata");
bt14.setAttribute("type","button");
bt14.setAttribute("value","0");
bt14.setAttribute("onclick","display('0')");
td14.append(bt14);

var td15=document.createElement("td");
var bt15=document.createElement("input");
bt15.classList.add("tdata");
bt15.setAttribute("type","button");
bt15.setAttribute("value","=");
bt15.setAttribute("onclick","calculate()");
bt15.setAttribute("id","tda");
td15.append(bt15);

var td16=document.createElement("td");
var bt16=document.createElement("input");
bt16.classList.add("tdata");
bt16.setAttribute("type","button");
bt16.setAttribute("value","/");
bt16.setAttribute("onclick","display('/')");
bt16.setAttribute("id","tda");
td16.append(bt16);

tr5.append(td13,td14,td15,td16);
table.append(tr1,tr2,tr3,tr4,tr5);
document.body.append(table);

function clearscreen(){
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}

function calculate(){
    var a = document.getElementById("result").value;
    var b = eval(a);
    document.getElementById("result").value = b;
}