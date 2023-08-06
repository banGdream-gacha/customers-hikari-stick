# customers-hikari-sticks
一个简易创建荧光棒摇晃动画的项目，是仿制的BanG Dream抽卡动画的一部分，使用原生JS<br>
您可以查看 [这里](https://bangdream-gacha.github.io/customers-hikari-stick/) 以测试荧光棒生成的效果
<b>P.S.如您需完整体验BanG Dream抽卡模拟器，请访问 [这里](https://bangdream-gacha.animedb.cn/)</b>
### 💡 How to import?
仅需要将 [hikari-sticks.css](https://github.com/banGdream-gacha/customers-hikari-sticks/blob/main/hikari-stick.css) 和 [hikari-sticks.js](https://github.com/banGdream-gacha/customers-hikari-sticks/blob/main/hikari-stick.js) 引入您需要添加荧光棒摇晃动画的HTML文档，然后在HTML文档中添加以下内容：

```HTML
<div class="customers"></div>
```
即可开始使用！
### 🛠️ How to use?
<b>首先，您需要实例化HikariStick类，像下面这样：</b>

```JavaScript
let HS = new HikariStick();
```
注意：在实例化类时，您可以传入一个布尔值，当其为“true”时，会在每次创建四星/五星时改变之前的颜色排序。<br><br>
<b>之后，您可以通过下面的方式调用方法：</b>

```JavaScript
HS.functionName();
```
<b>以下是可以调用的方法及相关说明：</b><br><br>
<b>function: createCustomers()</b><br>
用于创建荧光棒摇晃动画

| 必须参数 | 类型 | 描述 |
| --- | --- | --- |
| rank | Number | BanG Dream游戏角色的星级 |

<b>function: removeCustomers()</b><br>
用于移除荧光棒摇晃动画

<b>function: pauseCustomers()</b><br>
用于暂停播放荧光棒摇晃动画

<b>function: continueCustomers()</b><br>
用于继续播放荧光棒摇晃动画

### 📄 License
本项目使用<b>GPL v3</b>协议，如您需要使用本项目，请遵守<b>GPL v3</b>协议的相关要求，如：<b>确保软件自始至终都以开放源代码形式发布</b>

<hr>

Made with ♡ by [ZiAzusa](https://github.com/ZiAzusa) for [BanG Dream Gacha](https://github.com/banGdream-gacha/) Organization.
