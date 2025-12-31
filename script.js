function openSearch() {
    document.getElementById('searchOverlay').style.display = 'flex';
}

function closeSearch() {
    document.getElementById('searchOverlay').style.display = 'none';
}

function filterBanks() {
    let input = document.getElementById('bankSearch').value.toLowerCase();
    let list = document.getElementById('bankList');
    let li = list.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        let txtValue = li[i].textContent || li[i].innerText;
        li[i].style.display = txtValue.toLowerCase().indexOf(input) > -1 ? "" : "none";
    }
}
