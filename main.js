let mail= document.querySelector('#email');
let valido = document.getElementById('emailOK');
let btn =document.querySelector('button');
let  icono = document.querySelector('.err');
btn.style.cursor='not-allowed';
mail.addEventListener('input', ()=> {
campo = event.target;
if (mail.value.length==0) {
btn.style.cursor='not-allowed';
valido.innerText = "Please Provide a email";
} else {
btn.style.cursor='pointer';
console.log("esta lleno");
}
emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
btn.addEventListener('click', ()=>{
  if (emailRegex.test(campo.value)  ) {
    btn.type="submit"
    valido.innerText = "Success";
    icono.style.opacity='0';
  } else {
    valido.innerText = "Please Provide a valid email";
    icono.style.opacity='1';
        }
})
});    