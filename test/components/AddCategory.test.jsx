import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('test in AddCategory component', () => {
  
  test('the value of the input need change', () => {
    render( <AddCategory onNewCategory={ () => {} } /> );
    const input = screen.getByRole('textbox');

    fireEvent.input( input, { target: { value: 'Luffy' } } );
    expect( input.value ).toBe( 'Luffy' )
  });

  test('call onNewCategory if the input have a value', () => {
    const inputValue = 'Luffy';
    const onNewCategory = jest.fn();

    render( <AddCategory onNewCategory={ onNewCategory } />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input( input, { target: { value: inputValue } });
    fireEvent.submit( form );


    expect( input.value ).toBe( '' );
    expect( onNewCategory ).toHaveBeenCalled();
    expect( onNewCategory ).toHaveBeenCalledTimes(1);
    expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
  });

  test('not execute the function if the value.length <= 0', () => {
    const onNewCategory = jest.fn();

    render( <AddCategory onNewCategory={ onNewCategory } />);

    const form = screen.getByRole('form');
    const input = screen.getByRole('textbox');
    
    fireEvent.submit( form );
    
    expect( input.value ).toBe('');
    expect( onNewCategory ).not.toHaveBeenCalled();
  });

})