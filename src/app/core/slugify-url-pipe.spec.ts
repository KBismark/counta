import { SlugifyUrlPipe } from './slugify-url-pipe';

describe('SlugifyUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new SlugifyUrlPipe();
    expect(pipe).toBeTruthy();
  });
});
