---js
{
  title: "How to build a Grid system in JavaScript",
  tags: ["design"],
}
---

While making a [connect four] in JavaScript I thought it would be great to build 
a two-dimensional grid system that could easily be reused.

**Definition of a grid**

One could simply say that it is made of cells that are organized into rows where
each each cells holds information about its location on a coordinate plane.

Here is a basic ``Grid`` class that can hold rows:

``grid.js``
```javascript
class Grid {

  constructor() {
    this._rows = {}
  }

  /**
   * @readonly
   * @type {object}
   */
  get rows() {
    return this._rows
  }

}
```

The `Row` in question which itself is made of a location relative to the
coordinate plane that is the `Grid`.

``row.js``
```javascript
class Row {

  /**
   * @param {number} x
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
   * @type {number}
   */
  get x() {
    return this._x
  }

}
```

As you can see ``Row`` is in fact an abstraction of ``x`` in our grid. Just like
 the ``Grid`` class holds rows our ``Row`` class holds cells. 

From here the next step would be to add cells to the grid, so let's create a met
hod inside our ``Grid`` class that'll do just that.

**Adding cells to our grid**

``grid.js``
```javascript
/**
 * @param {number} x
 * @param {number} y
 * @returns {Cell}
 */
addCell(x, y) {
  const cell = new Cell(x, y)
  if(!this.rows[cell.x]) {
    this.rows[cell.x] = new Row(cell.x)
  }
  cell._row = this.rows[cell.x]
  this.rows[cell.x].cells[cell.y] = cell
}
```

Now we can do something like:
``demo.js``
```javascript
const grid = new Grid()
grid.addCell(0, 0)
```

How about the cells?

**Cell**

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

Usage:

``demo.js``
```javascript
const grid = new Grid()
grid.addCell(0, 0)
```

And finally, a 4x4 grid:

**4x4 grid**

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

Here's the library made out of this grid system: 
https://github.com/thoughtsunificator/grid.

[connect four]: https://github.com/thoughtsunificator/userinterface.js-puissance4 
