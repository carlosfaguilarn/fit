export class User {
    public id: string; 
    public name: string; 
    public edad: string;
    public email: string;
    public password: string; 
    public estatura: string;  
    public peso: string;  
    public actividad: string; 

    constructor(id:string, name:string, edad:string,email:string, password: string, estatura:string, peso: string,actividad: string){
        this.id = id; 
        this.name = name;
        this.edad = edad; 
        this.email = email; 
        this.password = password;
        this.estatura = estatura;
        this.peso = peso; 
        this.actividad = actividad;
    }
}