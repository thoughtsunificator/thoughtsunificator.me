---js
{
  title: "How to build a Grid system in JavaScript",
  tags: ["tutorial"],
  date: "2021-10-29"
}
---


While making my [connect four](https://github.com/thoughtsunificator/userinterface.js-puissance4) in JavaScript I thought it would be great to build a reusable and scalable grid system.

That's what I'm sharing with you today.

So first, let's go through the basics, exactly how can we define a grid system?

We could say that a grid is made of cells that are organized into columns.

## Grid

So let's start from here and make a ``Grid`` class that will hold our columns:

``grid.js``
```javascript
class Grid {

  constructor() {
    this._columns = {}
  }

  /**
   * @readonly
   * @type {object}
   */
  get columns() {
    return this._columns
  }

}
```

Here, my ``columns`` variable type is an ``object`` but you could also use an ``array``.

## Column

Now that we have our grid class ready, let's create a ``Column`` class:

``column.js``
```javascript
class Column {

  /**
   * @param {integer} x
   */
  constructor(x) {
    this._x = x
    this._cells = {}
  }

  /**
   * @readonly
   * @type {object}
   */
  get cells() {
    return this._cells
  }

  /**
   * @readonly
   * @type {integer}
   */
  get x() {
    return this._x
  }

}
```

As you can see ``Column`` is in fact an abstraction of ``x`` in our grid. Just like the ``Grid`` class holds columns our ``Column`` class holds cells.

From here the next step would be to add cells to the grid, so let's create a method inside our ``Grid`` class that'll do just that.

## Adding cells to our grid

``grid.js``
```javascript
/**
 * @param {number} x
 * @param {number} y
 * @returns {Cell}
 */
addCell(x, y) {
  const cell = new Cell(x, y)
  if(!this.columns[cell.x]) {
    this.columns[cell.x] = new Column(cell.x)
  }
  cell._column = this.columns[cell.x]
  this.columns[cell.x].cells[cell.y] = cell
}
```

Now we can do something like:
``demo.js``
```javascript
const grid = new Grid()
grid.addCell(0, 0)
```

Now that we're good with the column part let's dive into the cell part.

## Cell

``cell.js``
```javascript
class Cell {

  /**
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    this._x = x
    this._y = y
  }

  /**
   * @readonly
   * @type {number}
   */
  get x() {
    return this._x
  }

  /**
   * @readonly
   * @type {number}
   */
  get y() {
    return this._y
  }

}
```

``demo.js``
```javascript
const grid = new Grid()
grid.addCell(0, 0)
```

Let's build a 4x4 grid then.

## 4x4 grid

``demo.js``
```javascript
const size = 4
const grid = new Grid()
for(let x = 0; x < size; x++) {
  for(let y = 0; y < size; y++) {
    grid.addCell(x, y)
  }
}
```

There are lots more that we could do but let's save it for later...

Also, check out the library I made out of this grid system: https://github.com/thoughtsunificator/grid.
