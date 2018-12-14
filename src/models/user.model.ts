export class User {
    public id: string; 
    public nombre: string; 
    public edad: string;
    public genero: string;
    public email: string;
    public password: string; 
    public estatura: string;  
    public peso: string;  
    public nivelActividad: string; 

    constructor(
        id:string, 
        nombre:string, 
        edad:string,
        genero:string,
        email:string, 
        password: string, 
        estatura:string, 
        peso: string,
        nivelActividad: string)
    {
        this.id = id; 
        this.nombre = nombre;
        this.edad = edad; 
        this.genero = genero; 
        this.email = email; 
        this.password = password;
        this.estatura = estatura;
        this.peso = peso; 
        this.nivelActividad = nivelActividad;
    }
}