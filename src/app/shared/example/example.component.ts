import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ValidateService } from 'src/app/core/validate.service';
import { Buffer } from 'buffer';

@Component({
  selector: 'example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.sass']
})
export class ExampleComponent implements OnInit {
  dato: string = "";
  valido: boolean = true;
  objeto: any;
  constructor(private active: ActivatedRoute, private valid: ValidateService) {

  }
  ngOnInit(): void {
    this.dato = this.active.snapshot.paramMap.get("data") ?? "";
    if (this.valid.valid(this.dato)) {
      let jwtpartido: string[] = this.dato.split(".");
      let base: string = Buffer.from(jwtpartido[1], 'base64').toString("utf8");
      let json: any = JSON.parse(base);
      this.objeto = JSON.parse(json.v);
    } else {
      this.valido = false;
    }
  }
}
