const socket = io("http://localhost:3000");

// document.getElementById("btn").addEventListener("click", () => {
//     alert("Hello");
// });

let btn = document.getElementById("send");

btn.onclick = () => {
    let val = document.querySelector('input').value;
    console.log(val);
    socket.emit('chat message', {
        message : val,
    });
};

console.log("hello world");

socket.on('message', data => {
    let p = document.createElement("p");
    p.innerHTML = data.message;
    document.body.appendChild(p);
});
