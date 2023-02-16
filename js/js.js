const adv_nine = document.getElementById("adv-nine")
const adv_nine_2 = document.getElementById("adv-nine-2")
const g_content = document.getElementById("g-content")
const exists = document.head.contains(g_content)

function active() {
    if (exists == false) {
        console.log('ESTÁ FALSO')
    } else {
        console.log('ESTÁ VERDADEIRO')
    }
}

active();