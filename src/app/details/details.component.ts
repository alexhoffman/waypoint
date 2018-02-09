import { Component, OnInit } from '@angular/core';
import { ResultsComponent } from '../results/results.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})



export class DetailsComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  results = {
    "creditline": {
      "label": "Credit Line",
      "value": "Gift of Gretchen and Richard Grant"
      },
      "invno": {
      "label": "Object number",
      "value": "1959.01.87"
      },
      "description": {
      "label": "Description",
      "value": "Arm chair with red seat in outdoor setting."
      },
      "medium": {
      "label": "Medium",
      "value": "oil on canvas"
      },
      "onview": {
      "label": "On View",
      "value": 1
      },
      "title": {
      "label": "Title",
      "value": "Chair outside"
      },
      "classification": {
      "label": "Classification",
      "value": "Fine Arts"
      },
      "people": {
      "label": "Artist / Maker / Culture",
      "value": "Richard Diebenkorn"
      },
      "primaryMedia": {
      "value": "http://emuseum5.gallerysystems.com/internal/media/dispatcher/118/resize%25253Aformat%25253Dthumbnail"
      },
      "displayDate": {
      "label": "Date",
      "value": "circirca 1958"
      },
      "width": {
      "label": "Width",
      "value": 61
      },
      "id": {
      "label": "Id",
      "value": 53
      },
      "dimensions": {
      "label": "Dimensions",
      "value": "71.1 Ã— 61 cm (28 Ã— 24 in.)"
      },
      "height": {
      "label": "Height",
      "value": 71.1
      }
  };

}
