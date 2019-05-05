let viewTabs = document.getElementById('viewTabs')

viewTabs.onclick = function() {
    //show the saved tabs? but how??
    let tabs = document.createElement("div")

    chrome.storage.sync.get(function(result) {
        console.log(result)
        for (let key in result) {
            let tab = result[key]
            console.log(tab.title)
            console.log(tab.url)

            // let newTab = document.createElement('a')
            // let linkText = document.createTextNode(tab.title)
            // newTab.appendChild(linkText)
            // //a.title = "my title text"
            // newTab.href = tab.url
            // tabs.appendChild(newTab)
        }
    })
    
}