# OneCommeGetSKLiveImage 
用OneComme 取得SKLive貼圖

## 使用方式

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
- 儲存後，開啟OneComme > 右上...> 擴充功能 > 將SKLive Image Plugin 開關打開
![alt text](https://i.imgur.com/Hs74Pgz.png)

- 完成。