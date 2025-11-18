import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopbarPlayerComponent } from './topbar-player.component';

describe('TopbarPlayerComponent', () => {
  let component: TopbarPlayerComponent;
  let fixture: ComponentFixture<TopbarPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopbarPlayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopbarPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
