import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ClipService } from '../services/clip.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-allclips',
  templateUrl: './allclips.component.html',
  styleUrls: ['./allclips.component.css'],
  providers: [DatePipe]
})
export class AllclipsComponent implements OnInit {

  constructor(public clipService: ClipService) {
    this.clipService.getAllClips()

   }

  ngOnInit(): void {
    this.clipService.pageClips = []

  }

}