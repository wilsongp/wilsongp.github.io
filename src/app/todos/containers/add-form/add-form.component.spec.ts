import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormComponent } from './add-form.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatCardModule } from '@angular/material';
import { Store } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

class MockStore {
  select = jasmine.createSpy('store.select').and.returnValue(Observable.of({newTodo: {}}));
  dispatch = jasmine.createSpy('store.dispatch');
}

describe('AddFormComponent', () => {
  let component: AddFormComponent;
  let fixture: ComponentFixture<AddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        BrowserAnimationsModule
      ],
      declarations: [ AddFormComponent ],
      providers: [
        {provide: Store, useClass: MockStore}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
