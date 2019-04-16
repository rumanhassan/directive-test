import {
    async,
    ComponentFixture,
    TestBed,
    fakeAsync,
    tick
} from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Component, ViewChild, OnInit } from '@angular/core';
import { TrueFalseValueDirective } from './true-false-value.directive';
import { By } from '@angular/platform-browser';
import {
    FormGroup,
    FormControl,
    ReactiveFormsModule,
    FormsModule
} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
    template: `
      <form [formGroup]="form">
        <input
          type="checkbox"
          formControlName="testDirective"
          trueFalseValue
          [trueValue]="'yes'"
          [falseValue]="'no'"
        />
        Test Directive
      </form>
    `
})
class TestHostComponent {
    form;

    constructor() {
        this.form = new FormGroup({
            testDirective: new FormControl('no')
        });
    }
}

describe('TrueFalseValue [true-false-value.directive]', () => {
    let component: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;
    let el;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            imports: [FormsModule, ReactiveFormsModule, RouterModule.forRoot([])],
            declarations: [TestHostComponent, TrueFalseValueDirective],
            providers: []
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestHostComponent);
        component = fixture.debugElement.componentInstance;
        el = fixture.debugElement.query(By.css('input'));
        fixture.detectChanges();
    });

    it('should set trueValue when checkbox is enabled', fakeAsync(() => {
        // const hostComponent = new TestHostComponent();
        el.triggerEventHandler('change', { target: { checked: true } });
        fixture.detectChanges();
        tick();
        console.log(
            'sssss---------',
            component.form.value
        );
        expect(component.form.value.testDirective).toEqual('yes');
    }));
});
