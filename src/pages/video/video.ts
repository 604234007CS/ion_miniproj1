import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiKeyProvider } from '../../providers/api-key/api-key';
import { DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {
  movieVideo:any=[];
  videos:any=[];
  movie:any;
  url = 'https://www.youtube.com/watch?v=';


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private movieAPi : ApiKeyProvider, public sanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
    this.movieVideo = this.navParams.data;
    this.movieAPi.getVideos(this.movieVideo).subscribe((movie_data:any=[])=>{
     console.log(this.movieVideo);
      this.videos=movie_data['results'];
      console.log(this.videos);
    });
}

getVideo(keyOpen){
  let dangerousVideoUrl = 'https://www.youtube.com/embed/' + keyOpen + '?rel=0&showinfo=0';
  return this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
}

}
