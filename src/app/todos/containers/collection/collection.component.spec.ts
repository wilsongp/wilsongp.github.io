import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';

import { CollectionComponent } from './collection.component';
import { Store } from '@ngrx/store';
import { MatCardModule } from '@angular/material';
import { Observable } from 'rxjs/Observable';

@Component({selector: 'app-todo', template: '<div></div>'})
class MockTodoComponent {
  @Input() todo;
}

@Component({selector: 'app-add-form', template: '<div></div>'})
class MockAddFormComponent {

}

class MockStore {
  select = jasmine.createSpy('store.select');
  dispatch = jasmine.createSpy('store.dispatch');
}

describe('CollectionComponent', () => {
  let component: CollectionComponent;
  let fixture: ComponentFixture<CollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [
        CollectionComponent,
        MockAddFormComponent,
        MockTodoComponent
      ],
      providers: [
        {provide: Store, useClass: MockStore}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
