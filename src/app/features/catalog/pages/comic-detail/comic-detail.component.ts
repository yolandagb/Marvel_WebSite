import { Component, Input, OnInit } from '@angular/core';
import { Comic } from '@core/models/comic.model';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'cm-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.scss']
})
export class ComicDetailComponent implements OnInit {

  comic! : Comic;


  constructor(public catalogService: CatalogService) { }

  ngOnInit(): void {
    this.catalogService.getSelected$().subscribe(
      (comic) => {
        if (comic !== null){
          this.comic = comic;
        };
      }
    )

  }

  addToCollection(){
    this.catalogService.addToCollection(this.comic);
  }

}
