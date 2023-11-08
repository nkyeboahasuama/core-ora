export const songsGenerator = (numOfSongs: number) => {
  let songArr = [];
  const imgUrl = `<div style={{height:"40px", width:"40px"}}>im</div>`;
  for (let i = 1; i <= numOfSongs; i++) {
    let songObj = {
      title: `Song ${i}`,
      artiste: `Artiste ${i}`,
    };
    songArr.push(songObj);
  }

  return songArr;
};
