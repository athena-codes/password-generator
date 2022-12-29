function getPassword() {
    const chars = '01234567QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm!@#$%^&*(){}?:"><+_'
    let pwLength = 16
    let pw = ''

    // for loop to generate random password
    for (let i = 0; i < pwLength; i++) {
        let randomNum = Math.floor(Math.random() * chars.length)

        pw += chars.substring(randomNum, randomNum + 1)
        console.log(pw)
    }
    document.getElementById("password").value = pw 
}
