import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Comic } from '@core/models/comic.model';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'cm-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss']
})
export class CatalogItemComponent implements OnInit {
  @Input()
  comic!: Comic;

  constructor(public catalogService: CatalogService) { }

  ngOnInit(): void {
  }



  comicClicked(){
    console.warn('hola')
    this.catalogService.setSelected$(this.comic);

  }

}
