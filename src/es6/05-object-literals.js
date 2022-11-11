// enhanced object literals

function newUser( user, age, country, uId ){
    return {
        user,
        age,
        country,
        id: uId // Propuesta original de ECMAscript 5
    }
}

console.log(newUser("gndx", 34, "MX", 1));