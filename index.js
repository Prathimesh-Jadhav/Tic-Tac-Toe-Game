const buttons = document.querySelectorAll('.griditems');
const reset = document.querySelector('.reset');

let player1 = true;

const win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

buttons.forEach(function (butt) {
    butt.addEventListener('click', (e) => {
        if (player1 == true) {
            e.target.innerText = "X";
            player1 = false;
        }
        else {
            e.target.innerText = "O";
            player1 = true;
        }

        butt.disabled = 'true';

        win.forEach(function (arr) {

            let pos1 = buttons[arr[0]].innerText;
            let pos2 = buttons[arr[1]].innerText;
            let pos3 = buttons[arr[2]].innerText;

            if (pos1 != '' && pos2 != '' && pos3 != '') {
                if (pos1 === pos2 && pos2 === pos3) {
                    document.querySelector('.winner').innerHTML = `\" ${pos1} won the match \"`;
                }
            }

        }
        )

    })
})

reset.addEventListener('click', () => {
    buttons.forEach(function (button) {
        button.innerHTML = "";
        button.removeAttribute('disabled');
        document.querySelector('.winner').innerHTML = ``;
        // button.disabled=''
    })
})





