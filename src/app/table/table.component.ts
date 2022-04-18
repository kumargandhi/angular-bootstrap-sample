import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { TABLE_TABS } from './constants';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
    readonly TABLE_TABS = TABLE_TABS;
    selectedTab = _.head(Object.values(TABLE_TABS));
    tabs = Object.values(TABLE_TABS);

    constructor() {
        // do nothing
    }

    ngOnInit(): void {
        // do nothing
    }
}
