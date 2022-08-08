import { Autor } from '../entities/autor';

//el autor se pdoria pasar directamente con los values para no andar nombrandolos en cada Adpater
// pero lo dejo asi porque me parece mas legible y mas armado como un metodo generico.

export const autorAdapter = ({ name, lastname }: Autor): Autor => {
    return {
        name: name || '',
        lastname: lastname || '',
    };
};
