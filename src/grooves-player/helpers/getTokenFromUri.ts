export function getTokenFromUri(hash: string) {
  const access_token = hash.split("&")[0].slice(1).split("=")[1];
  return access_token;
}
