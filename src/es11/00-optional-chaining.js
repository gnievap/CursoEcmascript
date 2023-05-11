const users = {
    gabs: {
        country: 'MX'
    },
    vamp:{
        country: 'TR'
    }
}

console.log(users.gabs.country); // impresión de un usuario que existe
console.log(users?.dev?.country); // usuario que no existe