import { NgModule } from "@angular/core";
import { RestDataSource } from "./rest.datasource";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "./auth.service";
@NgModule({
  imports: [HttpClientModule],
  providers: [RestDataSource, AuthService]
})
export class ModelModule { }
