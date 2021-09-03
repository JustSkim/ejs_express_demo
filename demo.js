const express = require("express");
const ejs = require("ejs");
const app = express();
app.get("/", (req, res) => {
    // 创建用于渲染的数据
    var data = {
        siteName: "张培跃",
        siteUrl: "http://www.zhangpeiyue.com"
    }
    // 创建模板内容
    var template =
        "<a href='<%=siteUrl%>'>" +
        "<%=siteName%>" +
        "</a>";
    // 通过ejs.render将数据放到模板中，转为HTML数据
    let html = ejs.render(template, data);
    // 将数据在浏览器进行展现
    res.send(html);
})
app.listen(8080, function () {
    console.log("开启服务成功！")
})