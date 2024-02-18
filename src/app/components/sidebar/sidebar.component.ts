import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-red', class: '' },
  { path: '/icons', title: 'Evenement', icon: 'ni-calendar-grid-58 text-red', class: '' }, // Changé pour une icône d'événement
  { path: '/maps', title: 'Offre', icon: 'ni-bullet-list-67 text-red', class: '' }, // Changé pour une icône de localisation, supposant que 'Offre' peut être lié à des lieux
  { path: '/user-profile', title: 'Reclamation', icon: 'ni-support-16 text-red', class: '' }, // Changé pour une icône de support/reclamation
  { path: '/tables', title: 'Utilisateurs', icon: 'ni-badge text-red', class: '' }, // Changé pour une icône représentant des utilisateurs/badge
  { path: '/tables', title: 'Evaluation Stage', icon: 'ni-ruler-pencil text-red', class: '' }, // Changé pour une icône d'évaluation ou d'éducation
  { path: '/tables', title: 'Etudiant', icon: 'ni-hat-3 text-red', class: '' }, // Changé pour une icône représentant un étudiant/chapeau de graduation
  { path: '/tables', title: 'Encadrant', icon: 'ni-single-copy-04 text-red', class: '' } // Changé pour une icône qui peut représenter un mentor/encadrant
  // { path: '/login', title: 'Login', icon: 'ni-key-25 text-red', class: '' },
  // { path: '/register', title: 'Register', icon: 'ni-circle-08 text-red', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
