import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from '@core/components/not-found-page/not-found-page.component';


const routes: Routes = [
  {
    path: 'catalog',
    loadChildren: () =>
      import('./features/catalog/catalog.module').then(
        (m) => m.CatalogModule
      ),
  },
  {
    path: 'collection',
    loadChildren: () =>
      import('./features/collection/collection.module').then(
        (m) => m.CollectionModule
      ),
  },
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
