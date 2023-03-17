import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas en getGif', () => {
    const title = 'Titulo de prueba';
    const url = 'http://localhost/estoesprueba.com';
    test('Debe de hacer match con el snapshot', async () =>{
        const gifs = await getGifs('One Punch');
        expect( gifs.length ).toBeGreaterThan(0);
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        })
    });
})