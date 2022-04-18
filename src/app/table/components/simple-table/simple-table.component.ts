import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-simple-table',
    templateUrl: './simple-table.component.html',
    styleUrls: ['./simple-table.component.scss'],
})
export class SimpleTableComponent implements OnInit {
    users = [
        {
            uid: '1',
            first: 'Mark',
            last: 'Otto',
            handle: '@mdo',
        },
        {
            uid: '2',
            first: 'Jacob',
            last: 'Thornton',
            handle: '@fat',
        },
        {
            uid: '2',
            first: 'Larry the Bird',
            last: 'Thornton',
            handle: '@twitter',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
