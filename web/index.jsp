<%--
  Created by IntelliJ IDEA.
  User: cuimingyue
  Date: 2018/4/10
  Time: 下午8:06
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.js"></script>
    <title>test for idea</title>
  </head>
  <body>
  <button id="test">click now!</button>
  <script>
    $("#test").click(function () {
        $.ajax({
            type: "post",
            url: "Servlet",


            data : {
                taxcode : "nihao",
                mobilenum : "1234"
            },
            timeout : 50000,

            success: function (data) {
                var jsonData = JSON.parse(data);
                if(jsonData.test === "ok"){
                    alert("ok");
                } else {
                    alert(jsonData.msg);
                }

            },
            error: function(msg) {
                console.log(msg);
            }
        });
    })
  </script>
  </body>
</html>
