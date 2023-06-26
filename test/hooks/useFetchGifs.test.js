import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('test in useFetchGifs.test', () => {
  const category = 'One Piece';

  test('return initial state', () => {

    const { result } = renderHook( () => useFetchGifs(category) )
    const { images, isLoading } = result.current

    expect( images.length ).toBe(0);
    expect( isLoading ).toBeTruthy();

  });

  test('return images array and the prop isLoading must be true', async () => {
    const { result } = renderHook( () => useFetchGifs(category) )
    
    await waitFor(
      () => expect( result.current.images.length ).toBeGreaterThan( 0 ),
      { timeout: 1000 }
    );

    const { images, isLoading } = result.current

    expect( images.length ).toBeGreaterThan(0);
    expect( isLoading ).toBeFalsy();
  });

})