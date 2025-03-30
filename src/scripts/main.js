'use strict';

const HEADING_TO_FIND = 'position';

function findColIndex(tableElement, str) {
  const theadCells = tableElement.querySelector('thead tr').children;

  for (let i = 0; i < theadCells.length; i++) {
    if (theadCells[i].textContent.toLowerCase() === str) {
      return i;
    }
  }

  return -1;
}

function copyColumn(element, index) {
  if (index === -1) {
    return;
  }

  const rows = element.querySelectorAll('tr');
  const colNumber = rows[0].cells.length;

  if (!(rows && colNumber)) {
    return;
  }

  for (const row of rows) {
    const lastElement = row.cells[colNumber - 1];
    const newElement = lastElement.cloneNode(true);

    newElement.textContent = row.cells[index].textContent;

    row.insertBefore(newElement, lastElement);
  }
}

const table = document.querySelector('table');
const headingIndex = findColIndex(table, HEADING_TO_FIND);

copyColumn(table, headingIndex);
