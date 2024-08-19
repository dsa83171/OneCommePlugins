# OneCommePlugin
- [Get SKLive Image](#get-sklive-image)
- [Twitch Power-Ups](#twitch-power-ups)
- [How to turn On Plugin](#how-to-turn-on-plugin)

## Get SKlive Image
用OneComme 取得SKLive貼圖

### 使用方式

- 下載後將資料夾放至 %AppData%\Roaming\onecomme\plugins
- 編輯plugin.js 最上方的程式碼:
```js
//sklive貼圖網址
fetch('https://live.sk-knower.com/lib/iconjsonp.php?channel=你的twitchID', {
    method: 'GET',
})
```
你的twitchID => 改成你的TwitchID。
用我的Twitchid當範例:
```js
//sklive貼圖網址
fetch('https://live.sk-knower.com/lib/iconjsonp.php?channel=ds83171', {
    method: 'GET',
})
```

## Twitch Power-Ups
把 Twitch 貼圖/頭像解析度提高，
支援小奇點的貼圖特大化、邊框特效。

### 使用方式
- 下載後將資料夾放至 %AppData%\Roaming\onecomme\plugins
- 開啟 style.css > 將css代碼全部複製 > 開啟 OBS的瀏覽器來源(聊天室) > 自訂CSS > 貼上
![copy css](https://i.imgur.com/K9kIHbE.png)


## How to turn On Plugin

1. OneComme 右上[‧‧‧]
2. 選擇擴充功能 
3. 點擊重新載入按鈕
4. 將你要的插件開關打開
![Plugin open](https://i.imgur.com/zpa4A2u.png)