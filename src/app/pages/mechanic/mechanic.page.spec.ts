import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MechanicPage } from './mechanic.page';

describe('MechanicPage', () => {
  let component: MechanicPage;
  let fixture: ComponentFixture<MechanicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MechanicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
