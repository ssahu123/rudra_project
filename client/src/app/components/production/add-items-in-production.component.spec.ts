import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemInProductionComponent } from './add-items-in-production.component';

describe('AddTutorialComponent', () => {
  let component: AddItemInProductionComponent;
  let fixture: ComponentFixture<AddItemInProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddItemInProductionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddItemInProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
