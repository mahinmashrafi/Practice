function displayDateTime() {
    const currentDateTime = new Date();
    document.getElementById('dateTimeDisplay').innerText = currentDateTime.toString();
}
