import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InputComponent} from './input/input.component';
import {OutputComponent} from './ouput/output.component';
import {ContentComponent} from './content/content.component';
import {InputOutputComponent} from "./input-output.component";

const routes: Routes = [
    {
        path: "",
        component: InputOutputComponent
    },
    {
        path: "input",
        component: InputComponent
    },
    {
        path: "output",
        component: OutputComponent
    },
    {
        path: "content",
        component: ContentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InputOutputRoutingModule {
}
