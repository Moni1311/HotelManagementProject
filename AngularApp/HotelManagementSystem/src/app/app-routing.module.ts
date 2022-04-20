import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddComponent } from './add/add.component';
import { FetchComponent } from './fetch/fetch.component';
import { UpdateComponent } from './update/update.component';
import { ContactComponent } from './contact/contact.component';
import { DeleteComponent } from './delete/delete.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';



const routes: Routes = [{path : 'add-component',component : AddComponent},
{path : 'delete-component',component : DeleteComponent},
{path : 'fetch-component',component : FetchComponent},
{path : 'update-component',component : UpdateComponent},
{path : 'about-component',component : AboutComponent},
{path : 'contact-component',component : ContactComponent},
{path : 'gallery-component',component : GalleryComponent},
{path: '', redirectTo: 'home-component', pathMatch: 'full'},
{path : 'home-component',component : HomeComponent},
{path : 'services-component',component : ServicesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [AddComponent,FetchComponent,UpdateComponent,AboutComponent,ContactComponent,DeleteComponent, GalleryComponent,HomeComponent,ServicesComponent]