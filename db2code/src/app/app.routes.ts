import { ReaderComponent } from './file-reader/reader/reader.component';
import { CodeDetailComponent } from './codes/code-detail/code-detail.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'detail', component: CodeDetailComponent },
    { path: 'reader', component: ReaderComponent }
];
