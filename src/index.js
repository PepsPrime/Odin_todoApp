import './styles.css'

// Todo item class

class Item {
  // track nb of items
  static nbOfItem = 0
  #project
  #title
  #description
  #dueDate
  #priority
  #id
  #type
  static itemArray = []

  constructor (title, description, dueDate, priority,project,type) {
    this.#title = title
    this.#description = description
    this.#dueDate = dueDate
    this.#priority = priority
    this.#project = project
    this.#id = Item.nbOfItem
    // define if task is checklist or default (without checkboxes)
    this.#type = type
    Item.nbOfItem++
    Item.itemArray[this.#id] = this
  }

  // getters and setters
  static getNbOfItem () {
    console.log(Item.nbOfItem)
  }
  
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

  getProject () {
    console.log(this.#project)
  }
  
  setProject (projectName) {
    this.#project = projectName
  }
  
  getId () {
    console.log(this.#id)
  }
  
  static createItem (title, description, dueDate, priority,project="Default",type="Default") {
    let newItem = new Item(title, description, dueDate, priority,project,type)
    console.log(Item.nbOfItem)
  }

  static deleteItem(id) {
    Item.itemArray[id] = null
    Item.itemArray.splice(id,1)
    // update id to match index in itemArray
    Item.itemArray.filter((element) => element.#id > id ).map((element,index) => element.#id = index)
    Item.nbOfItem--
  }
}

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
