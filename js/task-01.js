const allCategoriesRef = document.querySelectorAll('.item');
const itemTitleRef = document.querySelectorAll('li h2')



console.log(`Number of categories: ${allCategoriesRef.length}`);



itemTitleRef.forEach((item) => {
    console.log(`Category: ${item.textContent}`)
    console.log(`Elements: ${item.nextElementSibling.children.length}`)
})
