var tablinks = document.getElementsByClassName("tab-links");
var contents = document.getElementsByClassName("contents");
var nav = document.getElementById("nav");

function openTab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (content of contents) {
        content.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function toggleIn() {
    nav.style.right = "0px";
}

function toggleOut() {
    nav.style.right = "-230px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzQ8mVlfgPZUW8OEfxIdYFcCDB_Ykn0noAR0dmk3my1HDa0ugdYLU2H0I6FJrp7lIbs/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementsByClassName("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"

        setTimeout(function() {
            msg.innerHTML = ""
        }, 5000)
        form.reset()
    
    })
      .catch(error => console.error('Error!', error.message))
  })

