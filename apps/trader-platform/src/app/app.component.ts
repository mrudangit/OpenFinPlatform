import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
declare var fin:any;
@Component({
  selector: 'trader-desktop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Trader Platform';
  version = 0;



  constructor() {

  }

  ngOnInit(): void {

    console.log('App Component Initialized : Id : ', Date.now());


  }

   closePlatform($event: MouseEvent) {
     const app = fin.Application.getCurrentSync();

     app.quit().then((done) => {
       console.log('Closing Platform');
     })
  }


  async createNewPlatformWindow($event: MouseEvent) {

    const platform = fin.Platform.getCurrentSync();

    const window = platform.createWindow({
      layout: {
        content: [
          {
            type: 'stack',
            content: [
              {
                type: 'component',
                componentName: 'view',
                componentState: {
                  name: 'test_view_1',
                  url: 'https://cdn.openfin.co/docs/javascript/canary/Platform.html'
                }
              }
            ]
          }
        ]
      }
    });

    window.then((id) => {
      console.log('Identity : ', id);
    }).catch((e)=> {
      console.log('Error : ', e);
    });

  }

  async displayInfo($event: MouseEvent) {

    const platform = fin.Platform.getCurrentSync();
    const app = fin.Application.getCurrentSync();
    const wnd = fin.Window.getCurrentSync();


    console.log('Platform ........ ', platform);
    console.log('Application ........ ', app);
    console.log('Window ........ ', wnd);
    const opt = await app.getManifest();
    console.log('Manifest : ', opt);
    console.log('Options = ', opt.platform.context.version);
    this.version = opt.platform.context.version;
  }
}
