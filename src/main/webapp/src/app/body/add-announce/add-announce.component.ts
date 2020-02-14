import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PostPayload} from "./post-payload";
import {AddAnnounceService} from "./add-announce.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-announce',
  templateUrl: './add-announce.component.html',
  styleUrls: ['./add-announce.component.sass']
})
export class AddAnnounceComponent implements OnInit {
  addPostForm : FormGroup;
  postPayload: PostPayload;

  title = new FormControl('');
  content = new FormControl('');

  constructor(private addAnnounceService: AddAnnounceService, private router: Router) {
    this.addPostForm = new FormGroup({
      title: this.title,
      content: this.content
      }
    );
    this.postPayload = {
      title:'',
      content:'',
      id:'',
    }
  }

  ngOnInit(): void {
  }

  addPost() {
    this.postPayload.title = this.addPostForm.get('title').value;
    this.postPayload.content = this.addPostForm.get('content').value;

    this.addAnnounceService.addAnnounce(this.postPayload).subscribe(data => {
      console.log('Recruitment announce added successfully!');
      this.router.navigateByUrl('/');
    }, error => {
      console.log('Failure Response');
    });
  }
}
