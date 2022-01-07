import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { FORM_TABS } from './constants';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit {
    readonly FORM_TABS = FORM_TABS;
    selectedTab = _.head(Object.values(FORM_TABS));
    tabs = Object.values(FORM_TABS);

    ngOnInit(): void {
        // do nothing
    }
}
