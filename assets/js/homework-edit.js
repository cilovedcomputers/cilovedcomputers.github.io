const homework = document.getElementById("homework");
const ebtn = document.getElementById("edit-button");
function edit() {
    homework.innerText = homework.innerHTML;
    homework.contentEditable = 'true';
    ebtn.setAttribute("onclick", "apply()");
    ebtn.innerHTML = '<img src="assets/img/ok.svg" alt="Edit" /><span>完成编辑</span>';
}
function apply() {
    homework.contentEditable = 'false';
    homework.innerHTML = homework.innerText;
    localStorage.setItem("hlp-current-homework", homework.innerHTML)
    if (homework.innerHTML == "") {
        homework.innerHTML = "[空]";
    }
    ebtn.setAttribute("onclick", "edit()");
    ebtn.innerHTML = '<img src="assets/img/edit.svg" alt="Edit" /><span>编辑作业</span>';
}