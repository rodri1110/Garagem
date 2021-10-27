import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  propriedades: Array<any>=[
    {
    "Nome": "Onix",
    "Cor": "Branca",
    "Combustivel": "Flex",
    "Valor": 49990,
    "Img": "assets/img/onix.png"
    },
    {
    "Nome": "Celta",
    "Cor": "Branca",
    "Combustivel": "Gasolina",
    "Valor": 39990,
    "Img": "assets/img/celta.png"
    },
    {
    "Nome": "Prisma",
    "Cor": "Branca",
    "Combustivel": "Flex",
    "Valor": 59990,
    "Img": "assets/img/prisma.png"
    },
    {
      "Nome": "Spin",
      "Cor": "Preta",
      "Combustivel": "Flex",
      "Valor": 69990,
      "Img": "assets/img/spin.png"
      },
      {
        "Nome": "Cruze",
        "Cor": "Preta",
        "Combustivel": "Gasolina",
        "Valor": 89990,
        "Img": "assets/img/cruze.png"
        },
        {
          "Nome": "Silverado",
          "Cor": "Amarela",
          "Combustivel": "Díesel",
          "Valor": 129990,
          "Img": "assets/img/silverado.png"
        }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
