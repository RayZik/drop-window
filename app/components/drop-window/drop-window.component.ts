import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

import { AppService } from '../../app.service';

@Component({
    selector: 'drop-window',
    templateUrl: './app/components/drop-window/drop-window.component.html',
    styleUrls: ['./app/components/drop-window/drop-window.component.css']
})

export class DropWindowComponent implements OnInit, OnChanges {

    @ViewChild('dataContainer') dataContainer: ElementRef;
    @Input() id: string;
    private chanage: string;

    constructor(private appService: AppService) { }

    ngOnInit() {

    }

    ngOnChanges(changes: SimpleChanges): void {
        this.chanage = changes['id'].previousValue;
        if (this.chanage !== this.id && this.id) {
            this.appService
                .getPriceById(this.id)
                .subscribe((data) => {
                    this.dataContainer.nativeElement.innerHTML = data['description_ru'] || data['description'] || '<div>Нет описания</div>';
                });
        }
    }
}
