import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LModalComponent } from './l-modal.component';

describe('LModalComponent', () => {
  let component: LModalComponent;
  let fixture: ComponentFixture<LModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
