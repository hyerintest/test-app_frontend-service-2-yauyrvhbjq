import {Component} from '@angular/core';
import {CommonService, ConfigService} from "./service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private configService: ConfigService,
              private commonService: CommonService
  ) {
  }

  ngOnInit() {
    this.getConfig();
  }

  async getConfig() {
    await this.commonService.requestCallback(
      this.configService.config.getConfigJSONFile()
    ).then((res: any) => {
      this.configService.apiPath = res.APP_SUB_PATH
    });
  }
}
