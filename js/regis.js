const form = document.querySelector('#formRegistro')


form.addEventListener(('submit'), (e) =>{
    e.preventDefault();

    // CONSTANTES DOM

    const correo = document.querySelector('#email').value
    const pass = document.querySelector('#pass').value

    // USUARIO 

    const Users = JSON.parse(localStorage.getItem('users'))
    const UsersExi = Users.find(user => user.email === correo)

    if(UsersExi){
        alert('El correo ya existe')
    }else{
        Users.push({
            email: correo,
            pass : pass
        })
        console.log('El usuario se a registrado de manera satisfactoria')
        localStorage.setItem('users', JSON.stringify(Users))
        }
    }
)