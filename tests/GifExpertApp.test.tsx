import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { GifExpertApp } from '../src/GifExpertApp';



describe('Pruebas en GifExpertApp', () => {
    const newCategory = 'Saitama';
    test('Debe de agregar la nueva categoria', () => {
        render( <GifExpertApp /> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: newCategory }});
        fireEvent.submit( form );

        fireEvent.input( input, { target: { value: newCategory + '2' }});
        fireEvent.submit( form );
        
        expect( screen.getAllByRole('heading', { level: 3 }).length).toBe(3);
    });

    test('No debe agregar una categoria si ya existe', () => {
        
        render( <GifExpertApp /> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: newCategory }});
        fireEvent.submit( form );

        fireEvent.input( input, { target: { value: newCategory }});
        fireEvent.submit( form );
 
        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2);
    });

    
})