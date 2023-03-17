import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { AddCategory } from '../../src/components/AddCategory';


describe('Pruebas en AddCategory', () => {
    test('Debe de cambiar el valor de la caja de texto', () => {
        render( <AddCategory onNewCategory={() =>{}} /> );
        const input: HTMLInputElement = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: 'Saitama'} });
        expect( input.value ).toBe('Saitama');
    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={onNewCategory} /> );
        const input: HTMLInputElement = screen.getByRole('textbox');
        const form: HTMLFormElement = screen.getByRole('form');
        fireEvent.input( input, { target: { value: inputValue} });
        fireEvent.submit( form );
        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    });

    test('No debe de llamar onNewCategory si el input esta vacío', () => {
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={onNewCategory} /> );
        const form: HTMLFormElement = screen.getByRole('form');
        fireEvent.submit( form );
        expect( onNewCategory ).not.toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
    });
})