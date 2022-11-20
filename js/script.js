xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","xml/conteudo.xml",false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;
x = xmlDoc.getElementsByTagName("content");


function title1(){
    
    for(i = x.length-1; i >= 0; i--){
        document.write(x[i].getElementsByTagName("title1")[0].childNodes[0].nodeValue);
    }
}

function text1(){
    for(i = x.length-1; i >= 0; i--){
        document.write(x[i].getElementsByTagName("text1")[0].childNodes[0].nodeValue);
    }
}

function text2(){
    for(i = x.length-1; i>=0; i--){
        document.write(x[i].getElementsByTagName("text2")[0].childNodes[0].nodeValue);
    }
}

function text3(){
    for(i = x.length-1; i>=0; i--){
        document.write(x[i].getElementsByTagName("text3")[0].childNodes[0].nodeValue);
    }
}

function text4(){
    for(i = x.length-1; i>=0; i--){
        document.write(x[i].getElementsByTagName("text4")[0].childNodes[0].nodeValue);
    }
}

function title2(){
    for(i = x.length-1; i>=0; i--){
        document.write(x[i].getElementsByTagName("title2")[0].childNodes[0].nodeValue);
    }
}

function text5(){
    for(i = x.length-1; i>=0; i--){
        document.write(x[i].getElementsByTagName("text5")[0].childNodes[0].nodeValue);
    }
}

function text6(){
    for(i = x.length-1; i>=0; i--){
        document.write(x[i].getElementsByTagName("text6")[0].childNodes[0].nodeValue);
    }
}

function title3(){
    for(i = x.length-1; i>=0; i--){
        document.write(x[i].getElementsByTagName("title3")[0].childNodes[0].nodeValue);
    }
}

function cardtitle1(){
    for(i = x.length-1; i>=0; i--){
        document.write(x[i].getElementsByTagName("cardtitle1")[0].childNodes[0].nodeValue);
    }
}

function cardtext1(){
    for(i = x.length-1; i>=0; i--){
        document.write(x[i].getElementsByTagName("cardtext1")[0].childNodes[0].nodeValue);
    }
}

function cardtitle2(){
    for(i = x.length-1; i>=0; i--){
        document.write(x[i].getElementsByTagName("cardtitle2")[0].childNodes[0].nodeValue);
    }
}

function cardtext2  (){
    for(i = x.length-1; i>=0; i--){
        document.write(x[i].getElementsByTagName("cardtext2")[0].childNodes[0].nodeValue);
    }
}

function cardtitle3(){
    for(i = x.length-1; i>=0; i--){
        document.write(x[i].getElementsByTagName("cardtitle3")[0].childNodes[0].nodeValue);
    }
}

function cardtext3(){
    for(i = x.length-1; i>=0; i--){
        document.write(x[i].getElementsByTagName("cardtext3")[0].childNodes[0].nodeValue);
    }
}


function cardtitle4(){
    for(i = x.length-1; i>=0; i--){
        document.write(x[i].getElementsByTagName("cardtitle4")[0].childNodes[0].nodeValue);
    }
}

function cardtext4(){
    for(i = x.length-1; i>=0; i--){
        document.write(x[i].getElementsByTagName("cardtext4")[0].childNodes[0].nodeValue);
    }
}

function cardtitle5(){
    for(i = x.length-1; i>=0; i--){
        document.write(x[i].getElementsByTagName("cardtitle5")[0].childNodes[0].nodeValue);
    }
}

function cardtext5(){
    for(i = x.length-1; i>=0; i--){
        document.write(x[i].getElementsByTagName("cardtext5")[0].childNodes[0].nodeValue);
    }
}

function cardtitle6(){
    for(i = x.length-1; i>=0; i--){
        document.write(x[i].getElementsByTagName("cardtitle6")[0].childNodes[0].nodeValue);
    }
}

function cardtext6(){
    for(i = x.length-1; i>=0; i--){
        document.write(x[i].getElementsByTagName("cardtext6")[0].childNodes[0].nodeValue);
    }
}

function footercreators(){
    for(i = x.length-1; i>=0; i--){
        document.write(x[i].getElementsByTagName("footercreators")[0].childNodes[0].nodeValue);
    }
}

function footername1(){
    for(i = x.length-1; i>=0; i--){
        document.write(x[i].getElementsByTagName("footername1")[0].childNodes[0].nodeValue);
    }
}

function footername2(){
    for(i = x.length-1; i>=0; i--){
        document.write(x[i].getElementsByTagName("footername2")[0].childNodes[0].nodeValue);
    }
}

function footername3(){
    for(i = x.length-1; i>=0; i--){
        document.write(x[i].getElementsByTagName("footername3")[0].childNodes[0].nodeValue);
    }
}

function footertext1(){
    for(i = x.length-1; i>=0; i--){
        document.write(x[i].getElementsByTagName("footertext1")[0].childNodes[0].nodeValue);
    }
}