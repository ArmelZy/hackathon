import {Component, OnInit} from '@angular/core';
import {PostPayload} from "../add-announce/post-payload";
import {ActivatedRoute} from "@angular/router";
import {AddAnnounceService} from "../add-announce/add-announce.service";

@Component({
  selector: 'app-announce',
  templateUrl: './announce.component.html',
  styleUrls: ['./announce.component.sass']
})
export class AnnounceComponent implements OnInit {
  post: PostPayload;
  permaLink: Number;
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(private router: ActivatedRoute, private addAnnounceService: AddAnnounceService) {
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.permaLink = params['id'];
    });

    this.addAnnounceService.getPost(this.permaLink).subscribe((data:PostPayload) => {
      this.post = data;
    },(err: any) => {
      console.log('Failure Response');
    })
  }
}
