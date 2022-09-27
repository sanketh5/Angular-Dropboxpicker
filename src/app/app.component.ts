import { Component } from '@angular/core';
declare function launchDropBoxPicker(): any;
declare var DropBoxFilesReference: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dropbox-picker';

  /* Setting the DropBoxFilesReference variable to "this" as it has to refer the current component. */
  ngOnInit() {
    DropBoxFilesReference = this;
  }

  /* Creating a list of links to the files that were selected in the dropbox picker. */
  receiveDropBoxFiles(files: any) {
    for (let file of files){
      let ul = document.getElementById("results");
      let li = document.createElement("li");
      let a = document.createElement('a');
      a.setAttribute('href',file['link']);
      a.setAttribute('target','_blank');
      a.innerHTML = "Click here";
      li.appendChild(a);
      ul?.appendChild(li);
    }
  }

  /* It launches the dropbox picker. */
  loadDropBox(){
    launchDropBoxPicker();
  }
}
