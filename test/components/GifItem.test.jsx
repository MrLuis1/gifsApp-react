import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('GifItem Component', () => {
  const title = 'luffy';
  const url = 'https://luffy.com/png';
  
  test('Snapshot match test', () => {
    const { container } = render( <GifItem title={ title } url={ url } /> )
    expect( container ).toMatchSnapshot();
  });

  test('Render the image from the url', () => {
    render(<GifItem title={ title } url={ url } />);
    // screen.debug(); Nos permite obtener el marcado html, con el metodo screen podemos verificar diversas etiquetas html y sus atributos

    // expect( screen.getByRole('img').src ).toBe( url );
    // expect( screen.getByRole('img').alt ).toBe( title );

    // ! De esta forma que se hace abajo se puede simplificar en caso de que se requiera hacer pruebas a varios atributos del elemento
    const { src, alt } = screen.getByRole('img');
    expect( src ).toBe( url );
    expect( alt ).toBe( title );
  });

  test('show Title in the component', () => {
    render(<GifItem title={ title } url={ url } />);
    expect( screen.getByText( title ) ).toBeTruthy();
  })
})