function myAlbum(ArtistName, AlbumTitle) {
    return { ArtistName: ArtistName, AlbumTitle: AlbumTitle };
}
var album1 = myAlbum("Atif Aslam", "Doorie");
var album2 = myAlbum("Abrar ul Haq", "Billo De Ghar");
var album3 = myAlbum("Aima Baig", "Teefa In Trouble");
console.log(album1);
console.log(album2);
console.log(album3);
//make optional parameter:Number of tracks
function myAlbum2(ArtistName, AlbumTitle, numberOfTracks) {
    return { ArtistName: ArtistName, AlbumTitle: AlbumTitle, numberOfTracks: numberOfTracks };
}
var album4 = myAlbum2("Atif Aslam", "Doorie", 9);
var album5 = myAlbum2("Abrar ul Haq", "Billo De Ghar", 10);
var album6 = myAlbum2("Aima Baig", "Teefa In Trouble");
console.log(album4);
console.log(album5);
console.log(album6);
