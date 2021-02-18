import { Component } from '@angular/core';
declare var fin:any;
@Component({
  selector: 'trader-desktop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platform-provider';

  constructor() {

    if(typeof fin !== 'undefined') {

      fin.Platform.init({ overrideCallback :this.overrideCallback });

    }

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


}
