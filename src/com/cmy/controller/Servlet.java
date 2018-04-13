package com.cmy.controller;

import org.json.JSONException;
import org.json.JSONObject;

import javax.servlet.http.HttpServletRequest;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;

@javax.servlet.annotation.WebServlet(name = "Servlet")
public class Servlet extends javax.servlet.http.HttpServlet {

    protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        String json = readJSONString(request);
        JSONObject jsonObject = null;
        String responseText = null;
        try {
            jsonObject = new JSONObject(json);
            responseText = "帐号 " + jsonObject.getString("exprs");
            System.out.println("@@@"+responseText);
        } catch (JSONException e) {
            e.printStackTrace();
            response.setCharacterEncoding("UTF-8");
            response.setContentType("text/xml");
            response.getWriter().print(responseText);
        }
    }
    private String readJSONString(HttpServletRequest request) {
        StringBuffer json = new StringBuffer();
        String line = null;
        try {
            BufferedReader reader = request.getReader();
            while ((line = reader.readLine()) != null) {
                json.append(line);
            }
        } catch (Exception e) {
            System.out.println(e.toString());
            return json.toString();
        }
        return  json.toString();
    }
}
