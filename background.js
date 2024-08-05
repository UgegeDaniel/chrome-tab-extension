chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.query({}, (tabs) => {
    let urls = tabs.map(tab => tab.url);
    console.log(urls);
    chrome.storage.local.set({openTabUrls: urls}, function() {
      console.log('URLs saved');
    });
  });
});
