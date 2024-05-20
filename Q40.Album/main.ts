function myAlbum(ArtistName:string,AlbumTitle:string){
    return {ArtistName , AlbumTitle}
}

let album1 =myAlbum("Atif Aslam" ,"Doorie");
let album2 =myAlbum("Abrar ul Haq" ,"Billo De Ghar");
let album3 =myAlbum("Aima Baig" ,"Teefa In Trouble");

console.log(album1)
console.log(album2)
console.log(album3)

//make optional parameter:Number of tracks

function myAlbum2(ArtistName:string,AlbumTitle:string ,numberOfTracks?:number){
    return {ArtistName , AlbumTitle ,numberOfTracks}
}

let album4 =myAlbum2("Atif Aslam" ,"Doorie" ,9);
let album5 =myAlbum2("Abrar ul Haq" ,"Billo De Ghar" ,10);
let album6 =myAlbum2("Aima Baig" ,"Teefa In Trouble");

console.log(album4)
console.log(album5)
console.log(album6)

