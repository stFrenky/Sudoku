const view = {
    field: document.querySelector('.field'),
    digits: document.querySelector('.btn-list'),
    selectedCell: null,

    toggleClassField(event) {
        const {target} = event;

        if (!target.classList.contains('cell')) return false;

        if (this.selectedCell) {
            this.selectedCell.classList.remove('active');
        }

        this.selectedCell = target;
        this.selectedCell.classList.add('active');
    },

    changeValueField(event) {
        if (event.target.classList.contains('btn')) {
            this.selectedCell.textContent = event.target.textContent;
        }
    },

    init() {
        this.field.addEventListener('click', this.toggleClassField.bind(this));
        this.digits.addEventListener('click', this.changeValueField.bind(this));
    }
}

view.init();

// const canvas = {
//     row: {
//         1: new Set(),
//         2: new Set(),
//         3: new Set(),
//         4: new Set(),
//         5: new Set(),
//         6: new Set(),
//         7: new Set(),
//         8: new Set(),
//         9: new Set(),
//     },
//     c: {
//         1: new Set(),
//         2: new Set(),
//         3: new Set(),
//         4: new Set(),
//         5: new Set(),
//         6: new Set(),
//         7: new Set(),
//         8: new Set(),
//         9: new Set(),
//     },
//     b: {
//         1: new Set(),
//         2: new Set(),
//         3: new Set(),
//         4: new Set(),
//         5: new Set(),
//         6: new Set(),
//         7: new Set(),
//         8: new Set(),
//         9: new Set(),
//     },
// }

