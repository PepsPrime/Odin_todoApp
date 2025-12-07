import './styles.css'

// Todo item class

class Item {
  // track nb of items
  static nbOfItem = 0
  #title
  #description
  #dueDate
  #priority

  constructor (title, description, dueDate, priority) {
    this.#title = title
    this.#description = description
    this.#dueDate = dueDate
    this.#priority = priority
    Item.nbOfItem++
  }

  // getters and setters
  getTitle () {
    console.log(this.#title)
  }
  setTitle (newTitle) {
    this.#title = newTitle
  }
  getDescription () {
    console.log(this.#description)
  }

  setDescription (newDescription) {
    this.#description = newDescription
  }

  getDueDate () {
    console.log(this.#dueDate)
  }

  setDueDate (newDueDate) {
    this.#dueDate = newDueDate
  }

  getPriority () {
    console.log(this.#priority)
  }

  setPriority (newPriority) {
    this.#priority = newPriority
  }
  
  static createItem (title, description, dueDate, priority) {
    let newItem = new Item(title, description, dueDate, priority)
    console.log(Item.nbOfItem)
    return newItem
  }

}


let test = Item.createItem('Urgent task title', 'I really must accomplish this task', '25 December 2025', 2)
let test2 = Item.createItem("a title","a desc","a date","what priority")
test.getTitle()
test.setTitle("Not so urgent title")
test.getTitle()
test2.getTitle()