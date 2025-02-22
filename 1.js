let apiLink = 'https://api.github.com/users/hiteshchoudhary'

let apiReq = new XMLHttpRequest();

apiReq.open('GET', apiLink);

apiReq.onreadystatechange = function () {
    if (apiReq.readyState == 4) {
        let data = JSON.parse(this.responseText);
        console.log(data.
            followers)
    }
}

apiReq.send();

// image=document.querySelector(".image")
// image.