document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.local.get('openTabUrls', function(data) {
    let tabsList = document.getElementById('tabsList');
    data.openTabUrls.forEach(function(url) {
      let li = document.createElement('li');
      li.textContent = url;
      tabsList.appendChild(li);
    });
  });
});
