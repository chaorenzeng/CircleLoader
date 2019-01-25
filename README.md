## CircleLoader

#### 环形loading插件
1.原生JS，不依赖jquery,zepto  
2.前端学习交流群：739574382

#### 案例展示
![查看演示](https://github.com/chaorenzeng/CircleLoader/blob/master/js/CircleLoader/CircleLoader.gif)

#### 快速使用
1.引用 CircleLoader.js  CircleLoader.css  
2.参考以下HTML结构文档
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<link rel="stylesheet" type="text/css" href="js/CircleLoader/CircleLoader.css"/>
	</head>
	<body>
	</body>
</html>
<script src="js/CircleLoader/CircleLoader.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">
	var loader = new CircleLoader();
	loader.show();
</script>
```
#### 文档说明
##### 参数
参数名      |默认值 | 说明
--          |  --   | --
left        |  48%  | 左边距离
top         |  40%  | 顶部距离
width       |  50px | 环形宽度
height      |  50px | 环形高度
lineWidth   |  12%  | 环点宽度
lineHeight  |  12%  | 环点高度
lineRadius  |  0%   | 环点半径
lineBgColor |#337ab7| 环点颜色
index       |  1    | 层叠位置
display     | false | 是否显示
css_link    |  null | 插件样式路径
> css_link参数默认为null时，页面需引入CircleLoader.css  
若页面不引入CircleLoader.css时，可配置css_link参数获取样式

##### 方法
方法名      | 说明
--          |  --
show        |  显示loading
hide        |  隐藏loading

##### 代码示例(ajax请求前显示loading)
```js
<script src="js/CircleLoader/CircleLoader.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">
	var loader = new CircleLoader({
	    lineWidth: "20%",
	    lineHeight: "2%",
	    lineRadius: "10%",
	    css_link: "js/CircleLoader/CircleLoader.css"
	});
    loader.show();
    var ajaxRequest = $.ajax({
        type: 'POST',
        timeout: 20000,
        url: "http://xxxx/api/",
        data: {},
        success: function (data) {},
        error: function (jqXHR, textStatus, errorThrow) {},
        complete: function (XMLHttpRequest, status) {
            loader.hide();
            if (status == 'timeout') {
                ajaxRequest.abort();    // 超时后中断请求
                alert("网络超时，请刷新重试");
            }
        }
    });
</script>
```

