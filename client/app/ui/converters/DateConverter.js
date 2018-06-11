class DateConverter {

    static paraTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }

    static paraData(texto) {

        if (!/^\d{4}-\d{2}$/.test(texto))
            throw new error('Deve estar no formato aaaa-mm-dd');



        return new Date(...texto.split('-')
            .map((item, indice) => item - indice % 2));
    }

    constructor() {
        throw new error('Esta classe não pode ser instanciada!')
    }
}   