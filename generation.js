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
    sudokuField: [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
    ],

    rows: [
        new Set(), new Set(), new Set(),
        new Set(), new Set(), new Set(),
        new Set(), new Set(), new Set(),
    ],

    columns: {
        1: new Set(),
        2: new Set(),
        3: new Set(),
        4: new Set(),
        5: new Set(),
        6: new Set(),
        7: new Set(),
        8: new Set(),
        9: new Set(),
    },

    blocks: {
        1: new Set(),
        2: new Set(),
        3: new Set(),
        4: new Set(),
        5: new Set(),
        6: new Set(),
        7: new Set(),
        8: new Set(),
        9: new Set(),
    },

    randomazier() {
        return (Math.random() * (9 - 1) + 1).toFixed()
    },

    __proto__: view,
}



        var field = '0681594327597283416342671589934157268278936145156842973729318654813465792465729831';
        var arr = Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
        for (
    var j = 0;
    j
        <
        9;j++
    ) arr.push(arr.splice((Math.random() * arr.length
    ), 1
    ))
    ;
        for (
    var i = 1;
    i
        <
        82;
    i++
    ) {
        if (i%9==1) document.write('<tr>');
        document.write( (Math.random()*10>5) ? '<td>'+arr[field.substr(i,1)-1] + '</td>' : '<td class="l"><input type="text" size="1" maxlength="1" onkeydown = "javascript: return ((event.keyCode>47)&&(event.keyCode<58))"></td>' );
        if (i%9==0) document.write('</tr>');
    }


