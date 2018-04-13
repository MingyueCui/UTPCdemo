$(function() {
    var cause_num = 0;
    var exp_result = 0;
    var cons_num = 0;
    $(document).on('click', '.del', function (e) {
        $(e.target).parent().remove();
    })

    $(document).on('click', '#add_cause', function (e) {
        cause_num++;
        $("#cause_list").append(" <li name = \"C" + cause_num + "\">原因<span>C" + cause_num + "</span>:<input type=\"text\"  id=\"C" + cause_num + "\">" +
            "<span class=\"fa fa-times del\" aria-hidden=\"true\"></span></li>");
    })

    $(document).on('click', '#add_c', function (e) {
        cons_num++;
        var plain_text = "<li name='ctype_"+cons_num+"'>选择约束类型: <select id='type_"+cons_num+"'> <option value=\"E\">排异约束</option> <option value=\"I\">" +
            "包容约束</option> <option value=\"R\">要求约束</option><option value=\"O\">唯一约束</option></select>" +
            "字句：";
        var list = document.getElementById('cause_list').children;
        for (var i = 0; i < list.length; i++) {
            var cause = list[i].getAttribute('name');
            if (i == 0) {
                plain_text += "<input type=\"checkbox\" value=\""+cause+"\" name=\"literals_"+cons_num+"\">"+cause;
            } else {
                plain_text += "<input type=\"checkbox\" value=\""+cause+"\" name=\"literals_"+cons_num+"\">"+cause;
            }
        }
        plain_text += "<span class=\"fa fa-times del\" aria-hidden=\"true\"></span>\n" + "</li>";
        $("#ctype_list").append(plain_text);
    })

    $(document).on('click', '#add_rs', function (e) {
        exp_result++;
        $("#rs_list").append(" <li name = \"Ef" + exp_result + "\">结果<span>Ef" + exp_result + "</span>:<input type=\"text\"  id=\"Ef" + exp_result + "\">" +
            "<span class=\"fa fa-times del\" aria-hidden=\"true\"></span></li>");
    })

    $(document).on('click', '#add_expr', function (e) {
        var plain_text = '';
        var list = document.getElementById('rs_list').children;
        for (var i = 0; i < list.length; i++) {
            var expr = "expr_"+list[i].getAttribute('name');
            if (i === 0) {
                plain_text = "<li name=\""+expr+"\">"+expr+"=:<input type=\"text\" id=\""+expr+"\"></li>";
            } else {
                plain_text += "<li name=\""+expr+"\">"+expr+"=:<input type=\"text\" id=\""+expr+"\"></li>";
            }
        }
        $("#expr_list").append(plain_text);
    })

    $(document).on('click','.del-list',function (e) {
        var list = document.getElementById('expr_list').children;
        while(list.length>0){
            document.getElementById('expr_list').removeChild(list[0]);
            list = document.getElementById('expr_list').children;
        }
    })
})