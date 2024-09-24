// const form = document.getElementById("donationsLoginForm")
// form.addEventListener('submit', ()=>{
//     let username = document.getElementById("key").value;
//     let password = document.getElementById("secret").value;

//     let xhr = new XMLHttpRequest()
//     xhr.open('GET', 'https://api.razorpay.com/v1/payments/', true, username, password)



//     xhr.onload = () =>{
//         if(xhr.status ==200){
//             document.getElementById('data').innerHTML = xhr.response
//         }
//     }

//     xhr.send()
//     console.log(xhr)


// })

const btn = document.getElementById("show");
btn.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/api/payments', true); // Call your proxy server

    xhr.onload = () => {
        if (xhr.status == 200) {
            document.getElementById('data').innerHTML = xhr.response;
        } else {
            console.error('Error:', xhr.statusText);
            document.getElementById('data').innerHTML = 'Error: ' + xhr.statusText;
        }
    };

    xhr.onerror = () => {
        console.error('Request failed');
    };

    xhr.send();
    console.log(xhr);
});
