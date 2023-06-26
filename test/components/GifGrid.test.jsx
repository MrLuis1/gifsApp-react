const { render, screen } = require("@testing-library/react")
import { GifGrid } from '../../src/components/GifGrid'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe('Test in GifGrid', () => {

  const category = 'One piece'

  test('Show Loading when the search is in process', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })

    render( <GifGrid category={ category } /> );
    expect(screen.getByText( 'Cargando...' ));
    expect(screen.getByText( category ));
  });

  test('Show items when the search is done (useFetchGifs)', () => {
    const gifs = [
      {
        id: 'abc',
        title: 'Luffy',
        url: 'https://giphy.com/gifs/Luffy'
      },
      {
        id: 'def',
        title: 'Goku',
        url: 'https://giphy.com/gifs/hoku'
      },
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    });

    render( <GifGrid category={ category } /> );
    expect( screen.getAllByRole('img').length ).toBeGreaterThan(0);
    expect( screen.getAllByRole('img').length ).toBe( 2 );

  });
})