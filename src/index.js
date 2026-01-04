import './styles.css'
import { Item } from './modules/itemClass'



Item.createItem('Urgent task title', 'I really must accomplish this task', '25 December 2025', 2)
Item.createItem("a title","a desc","a date","what priority")
Item.itemArray[0].getTitle()
Item.itemArray[0].setTitle("Not so urgent title")
Item.itemArray[0].getTitle()
Item.itemArray[1].getTitle()
Item.itemArray[0].getProject()
Item.itemArray[0].setProject("Summer 2026")
Item.itemArray[0].getProject()
Item.getNbOfItem()
console.log(Item.itemArray)
Item.deleteItem(0)
console.log(Item.itemArray)


let nav = document.querySelectorAll(".navList > li")
let focusContainer = document.querySelector(".focusContainer")

nav.forEach((element) => {
    console.log(element.innerText)
    element.addEventListener("click", (e) => {
        console.log(e.target.id)
        })
    })
    