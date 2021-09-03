const express = require("express");
const ejs = require("ejs");
const app = express();
app.get("/", (req, res) => {
    // 创建用于渲染的数据
    var data = {
        siteName: "张培跃",
        siteUrl: "http://www.zhangpeiyue.com"
    }
    /*
    // 创建模板内容
    var template =
        "<a href='<%=siteUrl%>'>" +
        "<%=siteName%>" +
        "</a>";
    // 通过ejs.render将数据放到模板中，转为HTML数据
    let html = ejs.render("template", data);
    // 将数据在浏览器进行展现
    res.send(html);
    上面是将模板写在js脚本中的写法，下面我们用外部引入模板的方式
    */
    // 将数据在浏览器进行展现
    res.render("one.ejs",data)
})
app.listen(8080, function () {
    console.log("开启服务成功！")
})


/*
代码解析
ejs.render()方法：用于将数据（data）在指定的模板（template）中进行展示，生成HTML
<%= 数据的属性 %>：用于将数据的属性在模板中进行输出
注意：数据的类型需要是对象

res.render(path,data)：将ejs模板渲染成html页面后返回给浏览器。path默认为views文件夹下的文件，data为对象类型。
模板扩展名为.ejs
*/