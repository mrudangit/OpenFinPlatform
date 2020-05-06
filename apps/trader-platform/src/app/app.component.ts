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
  items: MenuItem[];

  async saveSnapshotToServer() {
    console.log('Send SnapShot To Server');
    // async code here.
    // Send a snapshot to the server, store it locally somewhere, etc.
  }

  overrideCallback(Provider: any)  {
    // Extend default behavior
    console.log(Provider.toString());
    class MyOverride extends Provider {

      async getSnapshot() {
        // Call super to access vanilla platform behavior
        const snapshot = await super.getSnapshot();
        // Perform any additional logic needed
        await this.saveSnapshotToServer();
        return { ...snapshot, answer: 42 };
      }
    }
    // Return instance with methods to be consumed by Platform
    return new MyOverride();
  }



  constructor() {
    if(typeof fin !== 'undefined') {

      fin.Platform.init({ overrideCallback :this.overrideCallback });
      //fin.Platform.init();
    }
  }

  ngOnInit(): void {
    this.items= [
      {
        label: 'Videos', icon: 'pi pi-fw pi-video',
        items: [
          [
            {
              label: 'Video 1',
              items: [{label: 'Video 1.1'}, {label: 'Video 1.2'}]
            },
            {
              label: 'Video 2',
              items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}]
            }
          ],
          [
            {
              label: 'Video 3',
              items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}]
            },
            {
              label: 'Video 4',
              items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}]
            }
          ]
        ]
      },
      {
        label: 'Users', icon: 'pi pi-fw pi-users',
        items: [
          [
            {
              label: 'User 1',
              items: [{label: 'User 1.1'}, {label: 'User 1.2'}]
            },
            {
              label: 'User 2',
              items: [{label: 'User 2.1'}, {label: 'User 2.2'}]
            },
          ],
          [
            {
              label: 'User 3',
              items: [{label: 'User 3.1'}, {label: 'User 3.2'}]
            },
            {
              label: 'User 4',
              items: [{label: 'User 4.1'}, {label: 'User 4.2'}]
            }
          ],
          [
            {
              label: 'User 5',
              items: [{label: 'User 5.1'}, {label: 'User 5.2'}]
            },
            {
              label: 'User 6',
              items: [{label: 'User 6.1'}, {label: 'User 6.2'}]
            }
          ]
        ]
      },
      {
        label: 'Events', icon: 'pi pi-fw pi-calendar',
        items: [
          [
            {
              label: 'Event 1',
              items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}]
            },
            {
              label: 'Event 2',
              items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]
            }
          ],
          [
            {
              label: 'Event 3',
              items: [{label: 'Event 3.1'}, {label: 'Event 3.2'}]
            },
            {
              label: 'Event 4',
              items: [{label: 'Event 4.1'}, {label: 'Event 4.2'}]
            }
          ]
        ]
      },
      {
        label: 'Settings', icon: 'pi pi-fw pi-cog',
        items: [
          [
            {
              label: 'Setting 1',
              items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
            },
            {
              label: 'Setting 2',
              items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
            },
            {
              label: 'Setting 3',
              items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
            }
          ],
          [
            {
              label: 'Technology 4',
              items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
            }
          ]
        ]
      }
    ]
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
}
