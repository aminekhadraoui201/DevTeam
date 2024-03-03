import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OffreService } from '../offre.service';
import { Offre } from '../offre.module';


@Component({
  selector: 'app-afficher-offre',
  templateUrl: './afficher-offre.component.html',
  styleUrls: ['./afficher-offre.component.css']
})
export class AfficherOffreComponent implements OnInit {
  offres: Offre[];
  message: string;
  Keywords: string;
  validateForm: FormGroup;
  showModify: boolean = false;
  

  constructor(private offreService: OffreService, private route: ActivatedRoute, private router: Router
 , private fb: FormBuilder) { }
 
  ngOnInit(): void {
    this.loadOffres();
    this.initializeForm();
  }

  loadOffres(): void {
    this.offreService.getOffres().subscribe(
      (data: Offre[]) => {
        this.offres = data;
      },
      error => {
        console.error('Error fetching offres:', error);
      }
    );
  }
  initializeForm(){
    this.validateForm = this.fb.group({
      titre: [null, [Validators.required]],
      description: [null, [Validators.required]],
      skills: [null, [Validators.required]],
      duree: [null, [Validators.required]]

    })
  }

  removeOffre(id_offre: number): void {
    this.offreService.removeOffre(id_offre).subscribe(
      () => {
        this.loadOffres(); // Recharge les offres après la suppression
      },
      error => {
        console.error('Erreur lors de la suppression de l\'offre :', error);
      }
    );
  }
  showModifyForm(offre: Offre): void {
    this.showModify = true;
    // Vous pouvez également pré-remplir le formulaire avec les données de l'offre ici si nécessaire
  }
  modifyOffre(offre: Offre): void {
    if (this.validateForm.valid) {
      const updatedOffre: Offre = {
        id_offre: offre.id_offre,
        titre: this.validateForm.value.titre,
        description: this.validateForm.value.description,
        skills: this.validateForm.value.skills,
        duree: this.validateForm.value.duree,
        Keywords: '',
        message: undefined
      };
      this.offreService.modifyOffre(updatedOffre.id_offre, updatedOffre).subscribe(
        (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'L\'offre a été modifiée avec succès!';
        },
        error => {
          console.error('Erreur lors de la modification de l\'offre :', error);
          this.message = 'Une erreur est survenue lors de la modification de l\'offre.';
        }
      );
    }
  }
  searchOffers(keywords: string): void {
    this.offreService.searchOffers(keywords).subscribe(offres => {
      this.offres = offres;
    });
  }
}
