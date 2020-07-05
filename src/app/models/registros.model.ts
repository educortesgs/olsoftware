export class registrosModel{
    id: string;
    nombre: string;
    apellido: string;
    cc: number;
    rol: string;
    estado: boolean;
    pass: string;
    tel: number;
    email: string;
    constructor(){
        this.estado = true;
    }
}