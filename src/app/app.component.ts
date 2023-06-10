import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, map} from 'rxjs';
import { Post, PostRecieved } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  posts!: Observable<Post[]>;

  constructor(private http: HttpClient) {};

  ngOnInit(): void {
    this.posts = this.http.get<PostRecieved[]>("https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json")
    .pipe(
      map((value) => { 
        return value.map(post => ({
          title: post.title.rendered,
          author: post._embedded.author[0].name,
          date: post.date,
          img: post.featured_media,
          postLink: post.link,
          authorLink: post._embedded.author[0].link
        }))
      })
    )
  }
}
