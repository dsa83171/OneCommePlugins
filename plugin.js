let sklive_Array = [];
//sklive貼圖網址
fetch('https://live.sk-knower.com/lib/iconjsonp.php?channel=你的twitchID', {
    method: 'GET',
})
    .then((res) => res.json())
    .then((data) => {
        sklive_Array = data;
    })
    .catch((err) => {
        console.log(err);
    });

//每秒抓一次，直到拿到data停止
const timerId = setInterval(() => {
    if (sklive_Array.length > 0 ) clearInterval(timerId);
}, 1000);


module.exports = {
  name: 'Get SKlive Image Plugin', // @required plugin name
  uid: 'com.onecomme.plugin-get-sklive-image', // @required unique plugin id
  version: '1.0.0', // @required semver version
  author: 'ds83171', // @required author name
  url: 'https://aaa.com', // @optional link (ex. documentation link)
  permissions: ['filter.comment'], // @required　https://onecomme.com/docs/developer/websocket-api/#%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%81%AE%E7%A8%AE%E9%A1%9E%E3%81%A8%E3%83%87%E3%83%BC%E3%82%BF
  defaultState: {},
  /**
   * コメントフィルタ
   * @param {Comment} comment 
   * @param {Service} service 
   * @param {UserNameData | null} userData 
   * @returns Promise<Comment | false>
   */
  filterComment(comment, service, userData) {
    var str = comment.data.comment;
		//圖片網址預覽
		if(str.match(/\[s\].*\[e\]/g)){
			str = str.replaceAll("[s]", "<img src=\"");
			str = str.replaceAll("[e]", "\">");
		}
		

		//撈原本sklive的貼圖
		for ( var i = 0; i < sklive_Array.length; i++){
			var regex = new RegExp("^"+sklive_Array[i]['alt']+"$","gi"); // regex = /^貼圖指令$/gi 
			str = str.replaceAll(regex, "<img src=\"" + sklive_Array[i]['src'] +"\" >");
		}

    comment.data.comment = str;
    return str;
  },
}