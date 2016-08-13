chrome.contextMenus.create({
    title: "ニコ動へショートカット",
    "contexts": [　"selection"　],
    onclick: function(info, tab) {
	var link = info.selectionText ;
        chrome.tabs.create({
            url: "http://nico.ms/" + link
        });
    }
});
