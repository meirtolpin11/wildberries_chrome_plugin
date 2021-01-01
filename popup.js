
var query = { active: true, currentWindow: true };

function callback(tabs) {
  	var currentTab = tabs[0]; // there will be only one in this array
  
	chrome.tabs.create({
	    url: "https://www.wildberries.ru/catalog/" + currentTab.url.split("card=")[1].split("&")[0] + "/detail.aspx?targetUrl=MI",
	    active: true
	});

}

chrome.tabs.query(query, callback);
