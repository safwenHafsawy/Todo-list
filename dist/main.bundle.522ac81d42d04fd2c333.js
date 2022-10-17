(()=>{"use strict";const t=({currentTitle:t,currentDisc:e},s,i)=>{if(0===t.length)return void i.handleWarning();const a=function(t,e){const s=document.createElement("h3"),i=document.createElement("p"),a=document.createElement("div");return a.className="task",s.className="task-title",i.className="task-desc",s.innerText=t,i.innerText=e,a.append(s,i),a}(t,e);s.taskList.appendChild(a),s.changeBtnBehaviour(),s.handleNoTaskText(),i.handleWarning(1)},e=t=>{t.classList.add("completed")};const s=class{constructor(){this.taskTitle=document.getElementById("taskTitle"),this.taskDesc=document.getElementById("taskDescription"),this.submitBnt=document.getElementById("createTask"),this.clearBnt=document.getElementById("clearTask"),this.checkTasks=document.getElementById("ckeckTasks"),this.warning=document.getElementById("title-empty")}clearInputFields(){this.taskTitle.value="",this.taskDesc.value=""}handleWarning(t=0){0===t?(this.warning.classList.remove("hiddenWarning"),this.warning.classList.add("shownWarning")):1===t&&(this.warning.classList.remove("shownWarning"),this.warning.classList.add("hiddenWarning"))}},i=({currentTitle:t,currentDisc:e})=>("","",{currentTitle:"",currentDisc:""}),a=new class{constructor(){this.TaskDisplay=document.getElementById("today-tasks"),this.taskList=document.getElementById("task-list"),this.clearFinishedBtn=document.getElementById("clear-finished")}enableClearFinishedBtn(){this.clearFinishedBtn.classList.remove("disabledBtn"),this.clearFinishedBtn.classList.add("enabledBtn")}changeBtnBehaviour(t=0){0===t?(this.clearFinishedBtn.classList.remove("disabledBtn"),this.clearFinishedBtn.classList.add("showedBtn")):1===t&&(this.clearFinishedBtn.classList.remove("showedBtn"),this.clearFinishedBtn.classList.add("disabledBtn"))}handleNoTaskText(){null===this.taskList.firstChild?this.taskList.innerHTML='<h2 id="no-task">No Task yet ! Go ahead and add some</h2>':"no-task"===this.taskList.firstChild.id&&this.taskList.removeChild(this.taskList.firstChild)}removeFinishedTasks(){this.taskList.childNodes.forEach((t=>{"completed"===t.className.split(" ")[1]&&this.taskList.removeChild(t)})),0===this.taskList.childNodes.length&&(this.changeBtnBehaviour(1),this.handleNoTaskText())}},n=new s,d=document.getElementById("createTask");let c={currentTitle:"",currentDisc:""};document.addEventListener("click",(t=>{"task"===t.target.className&&e(t.target),"task-title"!==t.target.className&&"task-desc"!==t.target.className||e(t.target.parentNode)})),document.addEventListener("input",(t=>{"taskTitle"===t.target.id&&(c.currentTitle=t.target.value),"taskDescription"===t.target.id&&(c.currentDisc=t.target.value)})),d.addEventListener("click",(()=>{t(c,a,n),c=i(c),n.clearInputFields()})),a.clearFinishedBtn.addEventListener("click",(()=>{a.removeFinishedTasks()})),n.checkTasks.addEventListener("click",(()=>{window.location.hash="#today-tasks"})),n.clearBnt.addEventListener("click",(()=>{n.clearInputFields()}))})();