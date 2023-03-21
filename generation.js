const view = {
	field: document.querySelector('.field'),
	cellLIst: document.querySelectorAll('.cell'),
	digits: document.querySelector('.btn-list'),
	startBtn: document.querySelector('.new-game-btn'),
	selectedCell: null,

	toggleClassField(event) {
		const { target } = event;

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
			generation.findEmpty();
			generation.validField();
		}
	},

	init() {
		this.field.addEventListener('click', this.toggleClassField.bind(this));
		this.digits.addEventListener('click', this.changeValueField.bind(this));
	},
}


const generation = {
	pattern: '0681594327597283416342671589934157268278936145156842973729318654813465792465729831',
	arr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
	rows: [],
	row: null,
	boxRow: null,
	boxCol: null,

	randomizer() {
		return Math.random() * this.arr.length;
	},

	getPart() {
		return this.arr.splice((this.randomizer()), 1);
	},

	getField() {
		for (let j = 0; j < 9; j++) {
			this.arr.push(...this.getPart());
		}

		for (let i = 1; i < 82; i++) {
			// this.cellLIst[i - 1].style.background = 'white';

			if (i % 9 === 1) this.row = [];

			if (Math.random() * 10 > 5) {
				this.cellLIst[i - 1].textContent = this.arr[this.pattern.substr(i, 1) - 1];
				this.row.push(this.cellLIst[i - 1]);

			} else {
				this.cellLIst[i - 1].textContent = '';
				this.row.push(this.cellLIst[i - 1]);
			}

			if (this.cellLIst[i - 1].textContent !== '') {
				this.cellLIst[i - 1].classList.add('no-events');
			} else {
				this.cellLIst[i - 1].classList.remove('no-events');
			}

			if (i % 9 === 0) {
				this.rows.push(this.row);
				this.row = null;
			}
		}
	},

	findEmpty() {
		for (let r = 0; r < 9; r++) {
			for (let c = 0; c < 9; c++) {
				if (this.rows[r][c].classList[1] === 'active') {
					return [r,c]
				}
			}
		}
	},

	highlightField: {
		marked(a,b) {
			this.rows[a][b].classList.add('marked');
		},
		unmarked(a, b){
			this.rows[a][b].classList.remove('marked');
		}
	},

	validField() {
		const [r,c] = this.findEmpty();

		//rows
		for (let i = 0; i < 9; i++) {
			if (this.rows[i][c].textContent === this.rows[r][c].textContent && i !== r) {
				this.highlightField.marked.bind(this)(i,c);
				this.highlightField.marked.bind(this)(r,c);
			}
		}

		//columns
		for (let i = 0; i < 9; i++) {
			if (this.rows[r][i].textContent === this.rows[r][c].textContent && i !== c) {
				this.highlightField.marked.bind(this)(r,i);
				this.highlightField.marked.bind(this)(r,c);
			}
		}

		//box
		this.boxRow = Math.floor(r / 3) * 3;
		this.boxCol = Math.floor(c / 3) * 3;

		for (let i = this.boxRow; i < this.boxRow + 3; i++) {
			for (let j = this.boxCol; j < this.boxCol + 3; j++) {
				if (this.rows[i][j].textContent === this.rows[r][c].textContent && i !== r && j !== c) {
					this.highlightField.marked.bind(this)(i,j);
					this.highlightField.marked.bind(this)(r,c);
				}
			}
		}
	},

	init() {
		this.startBtn.addEventListener('click', this.getField.bind(this));
	},

	__proto__: view,
}

generation.init();
view.init();




