const body = document.body;
var backupHomePage = body.innerHTML;

function favoriteItem() {
    const btnFavorite = document.querySelector('.btn-favorite');
    const iconFavorite = document.querySelector('.btn-favorite ion-icon');


    if (iconFavorite.getAttribute('name') == 'heart-outline') {
        btnFavorite.classList.add('--favorited')
        iconFavorite.setAttribute('name', 'heart')
        alert('Item adicionado aos Favoritos!')
    } else if (iconFavorite.getAttribute('name') == 'heart') {
        btnFavorite.classList.remove('--favorited')
        iconFavorite.setAttribute('name', 'heart-outline')
        alert('Item removido dos Favoritos!')
    }
}

function openItemPage() {
    body.innerHTML = ''
    createItemPage()
}
function closeItemPage() {
    body.innerHTML = backupHomePage
}

function createItemPage() {
    const containerView = document.createElement('div');
    const itemImg = document.createElement('img');
    const backBtn = document.createElement('button');

    backBtn.innerText = 'Voltar'
    backBtn.addEventListener('click', ()=> {
        closeItemPage();
    })

    containerView.append(backBtn)
    document.body.innerHTML = ''
    document.body.appendChild(containerView);
}
