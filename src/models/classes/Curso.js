class User {
    constructor(codigo = '', lastname = '', gender = '', email = '', phone = 0, password = '', confirmpassword = '', job = '', tardiness = 0) {
        this.codigo = codigo;
        this.nombre = lastname;
        this.seccion = gender;
        this.inicio = email;
    }
}

export default User;