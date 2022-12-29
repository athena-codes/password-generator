function getPassword() {
    const chars = '01234567QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm!@#$%^&*(){}?:"><+_'
    let pwLength = 16
    let pw = ''

    // for loop to generate random password
    for (let i = 0; i < pwLength; i++) {
        let randomNum = Math.floor(Math.random() * chars.length)

        pw += chars.substring(randomNum, randomNum + 1)
    }
    document.getElementById("password").value = pw

    msgDiv.innerText = ''

}

const clearBtn = document.getElementById('clear')
const input = document.getElementById('password')

// clears input
clearBtn.addEventListener("click", () => {
   input.value = ''
   msgDiv.innerText = ''

})

const inputBox = document.getElementById('input-box')
const copyBtn = document.getElementById('copy-btn')
const msgDiv = document.createElement('div')
msgDiv.innerText = ''

// copies new password to clipboard
copyBtn.addEventListener('click', () => {
  input.select()
  document.execCommand('copy')
  msgDiv.innerHTML = `<br>
  Password copied to clipboard!`
  copyBtn.append(msgDiv)

  if (input.value === '') {
    msgDiv.innerHTML = ''
  }
})
