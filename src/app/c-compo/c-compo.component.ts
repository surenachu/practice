import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-c-compo",
  templateUrl: "./c-compo.component.html",
  styleUrls: ["./c-compo.component.css"]
})
export class CCompoComponent implements OnInit {
  // sting interpolation
  name: string = "Surendranath";
  aim: any = "Angular Developer";

  whataim() {
    return this.aim;
  }

  // property binding
  changebehaviour = false;

  // event binding
  tapbehaviour = "you have to click";
  insideinputbox = "";
  constructor() {
    // property binding
    setTimeout(() => {
      this.changebehaviour = true;
    }, 3000);
  }

  ngOnInit() {}

  // event binding
  onlcickbehaviour() {
    this.tapbehaviour = "great! you have clicked";
  }

  updatewhentype(arg) {
    this.insideinputbox = arg.target.value;
  }
}
