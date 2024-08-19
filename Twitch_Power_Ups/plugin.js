module.exports = {
  name: 'Twitch Power-Ups Plugin', // @required plugin name
  uid: 'com.onecomme.plugin-twitch-power-ups', // @required unique plugin id
  version: '1.0.0', // @required semver version
  author: 'ds83171', // @required author name
  url: 'https://github.com/dsa83171/OneCommePlugins', // @optional link (ex. documentation link)
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

    //改頭像解析度
		if(comment.data.profileImage.match(/jtvnw.*70x70/g)){
			comment.data.profileImage = comment.data.profileImage.replaceAll("70x70", "300x300");
		}

    //改貼圖twitch貼圖解析度112*112
		if(str.match(/jtvnw.*1\.0/g)){
			str = str.replaceAll("/default/light/1.0", "/default/light/3.0");
		}
    
		//貼圖特大化
		var emote_add = '<img src="https://static-cdn.jtvnw.net/automatic-reward-images/emote_add-2.png" class="gift-image" alt="">   <img';
		str = str.replaceAll(emote_add, "<img class='large_emote' ");
		
		//改邊框
		var comment_border = '<img src="https://static-cdn.jtvnw.net/automatic-reward-images/comments-2.png" class="gift-image" alt="">';

    /* effect_border2 可以改成 effect_border，有兩種邊框自行挑選 */
		str = str.replaceAll(comment_border, '<div class="effect_border2">');

    comment.data.comment = str;
    return comment;
  },
}