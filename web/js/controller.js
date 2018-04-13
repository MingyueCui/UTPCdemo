$(function () {
    $("#created").click(function () {
        var json = '{"exprs":{';
        var expr_list = document.getElementById('expr_list').children;
        var c_list = document.getElementById('ctype_list').children;
        for(var i=0;i<expr_list.length;i++){
            var expr_id = expr_list[i].getAttribute('name');
            var expr = document.getElementById(expr_id).value;
            if(i === expr_list.length-1){
                json += '"' + expr_id + '":' + '"' + expr + '"}';
            } else {
                json += '"' + expr_id + '":' + '"' + expr + '",';
            }
        }
        json +=',"constrains":[';
        for(var i=0;i<c_list.length;i++){
            var name = c_list[i].getAttribute('name');
            var num = name.replace('ctype_','');
            var obj = document.getElementById('type_'+num);
            var options=obj.value;
            var literals = '["';
            obj = document.getElementsByName("literals_"+num);
            var check_val = [];
            for(k in obj){
                if(obj[k].checked) {
                    check_val.push(obj[k].value);
                }
            }
            for(var j = 0;j<check_val.length;j++){
                if(j===0){
                    literals += check_val[j]+'",'
                } else if(j === check_val.length-1 ){
                    literals += '"'+check_val[j]+'"]';
                } else {
                    literals += '"'+check_val[j]+'",';
                }
            }
            if(i === c_list.length-1){
                json += '{"type":"'+options+'","literals":'+literals+'}]';
            } else {
                json += '{"type":"'+options+'","literals":'+literals+'},';
            }
        }
        json += '}';
        console.log(json);
        $.ajax({
            type: "post",
            url: "Servlet",
            data: json,
            timeout: 50000,

            success: function (data) {
                alert("ok!");

            },
            error: function (msg) {
                console.log(msg);
            }
        });
    })
});