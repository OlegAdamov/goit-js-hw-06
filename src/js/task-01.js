
const refs = {
    ulCategories: document.querySelector('#categories'),
    itemsOfCategories: document.querySelectorAll('#categories > li.item'),
}

const numberOfCategories = refs.ulCategories.children;
    console.log('Number of categories: ', numberOfCategories.length);

refs.itemsOfCategories.forEach(elem => {
    console.log(`Category: ${elem.querySelector('h2').textContent}`)
    console.log(`Elements: ${elem.querySelectorAll('li').length}`)
})

