import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthComponent } from "./auth.component";
import { HccaComponent } from "./hcca.component";
@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [AuthComponent, HccaComponent]
})
export class HccaModule { }
