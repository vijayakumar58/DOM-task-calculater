var table=document.createElement("table");
table.classList.add("calculator");

var tr1=document.createElement("tr");
tr1.classList.add("trow1");

var th1=document.createElement("th");
th1.setAttribute("type","text")
th1.classList.add("thead1");

var th2=document.createElement("th");
th1.innerHTML="AC";
th2.classList.add("thead2");
tr1.append(th1,th2);

var tr2=document.createElement("tr");
tr2.classList.add("trow2");

var td1=document.createElement("td");
td1.innerHTML="1";
td1.classList.add("tdata1");

var td2=document.createElement("td");
td2.innerHTML="2";
td2.classList.add("tdata2");

var td3=document.createElement("td");
td3.innerHTML="3";
td3.classList.add("tdata3");

var td4=document.createElement("td");
td4.innerHTML="+";
td4.classList.add("tdata4");
tr2.append(td1,td2,td3,td4);

var tr3=document.createElement("tr");
tr3.classList.add("trow3");

var td5=document.createElement("td");
td5.innerHTML="4";
td5.classList.add("tdata5");

var td6=document.createElement("td");
td6.innerHTML="5";
td6.classList.add("tdata6");

var td7=document.createElement("td");
td7.innerHTML="6";
td7.classList.add("tdata7");

var td8=document.createElement("td");
td8.innerHTML="-";
td8.classList.add("tdata8");
tr3.append(td5,td6,td7,td8);

var tr4=document.createElement("tr");
tr4.classList.add("trow4");

var td9=document.createElement("td");
td9.innerHTML="7";
td9.classList.add("tdata9");

var td10=document.createElement("td");
td10.innerHTML="8";
td10.classList.add("tdata10");

var td11=document.createElement("td");
td11.innerHTML="9";
td11.classList.add("tdata11");

var td12=document.createElement("td");
td12.innerHTML="*";
td12.classList.add("tdata12");
tr4.append(td9,td10,td11,td12);

var tr5=document.createElement("tr");
tr5.classList.add("trow5");

var td13=document.createElement("td");
td13.innerHTML=".";
td13.classList.add("tdata13");

var td14=document.createElement("td");
td14.innerHTML="0";
td14.classList.add("tdata14");

var td15=document.createElement("td");
td15.innerHTML="=";
td15.classList.add("tdata15");

var td16=document.createElement("td");
td16.innerHTML="/";
td16.classList.add("tdata16");
tr5.append(td13,td14,td15,td16);
table.append(tr1,tr2,tr3,tr4,tr5);
document.body.append(table);