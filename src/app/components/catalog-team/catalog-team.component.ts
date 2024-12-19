import { Component, OnInit } from '@angular/core';
import { TeamCategory } from 'src/app/models/player';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-catalog-team',
  templateUrl: './catalog-team.component.html',
  styleUrls: ['./catalog-team.component.css']
})
export class CatalogTeamComponent implements OnInit {

  categories: TeamCategory[] = [];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamService.getCategories().subscribe((data) => (this.categories = data));
  }

}
