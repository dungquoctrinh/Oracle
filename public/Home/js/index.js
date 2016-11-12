var chatbox = $(".chatbox");

for (var i = 0; i < chatbox.length; i++) {
	if (chatbox[i].offsetHeight < chatbox[i].scrollHeight) {
		$(".chatbox").css({"overflow": "scroll"});
	} else {
		$(".chatbox").css({"overflow": "hidden"});
	}
}
