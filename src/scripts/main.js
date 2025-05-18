'use strict';

document.querySelector('.container').addEventListener('click', (e) => {
  const target = e.target;

  if (e.target.tagName !== 'BUTTON') {
    return;
  }

  const checkCounter = (amount, contrTarget) => {
    if (amount === 2 || amount === 10) {
      target.setAttribute('disabled', true);
    } else {
      target.removeAttribute('disabled');
      contrTarget.removeAttribute('disabled');
    }
  };

  const container = e.currentTarget;
  const table = container.querySelector('.field');
  const tableBody = container.querySelector('tbody');
  const tableRows = table.querySelectorAll('tr');
  const appendRow = container.querySelector('.append-row');
  const removeRow = container.querySelector('.remove-row');
  const appendColumn = container.querySelector('.append-column');
  const removeColumn = container.querySelector('.remove-column');
  let rowCounter = tableRows.length;
  let columnCounter = table.querySelector('tr').querySelectorAll('td').length;

  if (target.matches('.append-row')) {
    const newRow = document.createElement('tr');

    for (let i = 0; i < columnCounter; i++) {
      const fragment = document.createElement('td');

      newRow.append(fragment);
    }
    tableBody.append(newRow);
    checkCounter(++rowCounter, removeRow);
  }

  if (target.matches('.remove-row')) {
    tableBody.deleteRow(-1);
    checkCounter(--rowCounter, appendRow);
  }

  if (target.matches('.append-column')) {
    tableRows.forEach((row) => {
      const newTd = document.createElement('td');

      row.append(newTd);
    });
    checkCounter(++columnCounter, removeColumn);
  }

  if (target.matches('.remove-column')) {
    tableRows.forEach((row) => {
      row.firstElementChild.remove();
    });
    checkCounter(--columnCounter, appendColumn);
  }
});
