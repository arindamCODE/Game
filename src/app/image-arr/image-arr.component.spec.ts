import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageArrComponent } from './image-arr.component';

describe('ImageArrComponent', () => {
  let component: ImageArrComponent;
  let fixture: ComponentFixture<ImageArrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageArrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageArrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
