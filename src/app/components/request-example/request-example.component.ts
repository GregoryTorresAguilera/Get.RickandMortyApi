import { RequestService } from './services/request.service';
import { CharacterInterface, CharacterResponseInterface } from './models/Character';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-example',
  templateUrl: './request-example.component.html',
  styleUrls: ['./request-example.component.scss']
})
export class RequestExampleComponent implements OnInit {
  public characterList: CharacterInterface[] = []

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.requestService.getCharacters().subscribe((data: CharacterResponseInterface) => {
      const results: CharacterInterface[] = data.results.map(({ id, name, status, image }) => ({
        id, name, status, image
      }));
      this.characterList = results
    }
    )
  }
}

