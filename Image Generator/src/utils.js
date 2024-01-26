const UNSPLASH_API =
  "https://api.unsplash.com/photos/?client_id=Jlid1aJiwWuiPsUlyNfmTbAKQGnUn_S8XSAEerxPNUQ";

function randomNum(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

export { UNSPLASH_API, randomNum };
