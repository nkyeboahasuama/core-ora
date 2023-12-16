export interface ITrack {
  name: string;
  artists: { name: string }[];
  preview_url: string;
  album: { images: { url: string }[] };
}
