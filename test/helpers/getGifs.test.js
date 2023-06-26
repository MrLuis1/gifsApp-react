import { getGifs } from "../../src/helpers/getGifs";

describe('test in GetGifs', () => {

  test('Return Gifs Array', async() => {

    const gifs = await getGifs('One Piece');
    // console.log(gifs)
    expect( gifs.length).toBeGreaterThan( 0 );
    expect( gifs[0] ).toEqual({
      id: expect.any( String ),
      title: expect.any( String ),
      url: expect.any( String )
  })
  });

})