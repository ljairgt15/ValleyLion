import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamCategory } from 'src/app/models/player';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  category: TeamCategory | undefined;

  constructor(private route: ActivatedRoute, private teamService: TeamService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.teamService.getCategoryById(id).subscribe((data) => (this.category = data));
  }

}
