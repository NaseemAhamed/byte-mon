import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { OsComponent } from './os/os.component';
import { FileTransferComponent } from './os/socket/file-transfer/file-transfer.component';
import { SocketComponent } from './os/socket/socket.component';

const routes: Routes = [
  { path: '', redirectTo: '/os', pathMatch: 'full' },
  {
    path: 'os',
    component: OsComponent,
    children: [
      {
        path: 'socket',
        component: SocketComponent,
        children: [{ path: 'file-transfer', component: FileTransferComponent }],
      },
    ],
  },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
