let saveTab = document.getElementById('saveTab')

saveTab.onclick = function() {
    //first find the current tab
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        console.log(tabs[0])
        let id = tabs[0].id

        let title = tabs[0].title
        let savedTab = {
          title: title,
          url: tabs[0].url
        }
        //send the tab's info to storage?
        chrome.storage.sync.set({[title]: savedTab}, function() {
          console.log('tab has been saved... I think')
        })
        
        //then close the tab with that id
        chrome.tabs.remove(id)
      })

    
}