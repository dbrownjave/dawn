var activeTabId = "tab1"
var activeTabContentId = ""

$( document ).ready(function() {
    const activeTab = $(`#${activeTabId}`).get(0)
    activeTabContentId = activeTab.getAttribute('aria-controls')
    const activeTabContent = $(`#${activeTabContentId}`).get(0)
    activeTabContent.className = "tab-panel-active"
});


function onTabChange(selectedTab) {
$(`#${activeTabContentId}`).get(0).className = "tab-panel"
 activeTabId = selectedTab.getAttribute('id')
 activeTabContentId = selectedTab.getAttribute('aria-controls')
 const activeTabContent = $(`#${activeTabContentId}`).get(0)
 activeTabContent.className = "tab-panel-active"
}
