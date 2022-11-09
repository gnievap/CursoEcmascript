function newUser(name, age, country){
    //la var.local name es igual al parámetro o a su valor por defaul 'Gabs'
    var name = name || 'Gabs';  
    var age = age || 34;
    var country = country || 'MX';
    console.log(name, age, country);
}

newUser();
newUser('Gings', 7, 'MX');

function newAdmin(name = 'Vamp', age=32, country='CA' ){
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 28, 'PE');