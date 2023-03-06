const view = {
    field: document.querySelector('.field'),
    cellLIst: document.querySelectorAll('.cell'),
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

const generation = {
    pattern: '0681594327597283416342671589934157268278936145156842973729318654813465792465729831',
    arr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    randomizer() {
        return Math.random() * this.arr.length
    },

    getPart() {
        return this.arr.splice((this.randomizer()), 1)
    },

    getField() {
        for (let j = 0; j < 9; j++) {
            this.arr.push(...this.getPart());
        }

        for (let i = 1; i < 82; i++) {
            if (Math.random() * 10 > 5) {
                this.cellLIst[i - 1].textContent = this.arr[this.pattern.substr(i, 1) - 1];
            } else {
                this.cellLIst[i - 1].textContent = '';
            }

            if (this.cellLIst[i - 1].textContent !== '') {
                this.cellLIst[i - 1].classList.add('no-events');
            }
        }
    },

    checkField() {

    },

    __proto__: view,
}

generation.getField();

