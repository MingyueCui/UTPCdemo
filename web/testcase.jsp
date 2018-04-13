<%--
  Created by IntelliJ IDEA.
  User: cuimingyue
  Date: 2018/4/11
  Time: 下午8:21
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>测试用例补充</title>
</head>
<body>
<div><p>基于因果图与UTPC的生成测试用例的工具</p></div>

<div>
    <span class="fa fa-plus-circle" id="add_cause"></span>添加原因<br/>
    <ul id="cause_list">
    </ul>
</div>

<div>
    <span class="fa fa-plus-circle" id="add_c"></span>添加约束<br/>
    <ul id="ctype_list">
    </ul>
</div>

<div>
    <i class="fa fa-plus-circle" id="add_rs"></i>添加结果<br/>
    <ul id ="rs_list">
    </ul>
</div>

<div>
    <span class="fa fa-plus-circle" id="add_expr"></span>添加因果关系<span class="fa fa-times del-list" aria-hidden="true"></span><br/>
    <ul id="expr_list">
    </ul>
</div>
<div>
    <button id ="created">生成测试用例</button>
</div>
<div>
    <table class="table">
        <caption>测试用例</caption>
        <thead>
        <tr>
            <th>输入条件</th>
            <th>结果</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Tanmay</td>
            <td>Bangalore</td>
        </tr>
        </tbody>
    </table>
</div>
</body>
<link href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet" />
<link href="https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap-grid.css" rel="stylesheet">
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.js"></script>
<script src="js/style.js"></script>
<script src="js/controller.js"></script>
</html>
