import {Component, OnInit} from '@angular/core';
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";
import {Observable} from "rxjs";
import {PostPayload} from "../../add-announce/post-payload";
import {AddAnnounceService} from "../../add-announce/add-announce.service";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit {

  posts: Observable<Array<PostPayload>>;
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig, private addAnnounceService: AddAnnounceService) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.posts = this.addAnnounceService.getAllPosts();
  }

}
