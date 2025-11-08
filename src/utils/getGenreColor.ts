import { GENRE_PALETTE } from "../data/palette";

export function getGenreColor(genre: string): string {
  if (!genre) return GENRE_PALETTE[0];

  const sum = genre.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  const index = sum % GENRE_PALETTE.length;
  return GENRE_PALETTE[index];
}
