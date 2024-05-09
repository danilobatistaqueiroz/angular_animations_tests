import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { OpenCloseComponent } from './open-close.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BLUE_RGB, YELLOW_RGB, BLACK_RGB } from './open-close.animations';
import { AnimationDriver } from '@angular/animations/browser';
import { MockAnimationDriver, MockAnimationPlayer } from '@angular/animations/browser/testing';

describe('OpenCloseComponent', () => {
  let component: OpenCloseComponent;
  let fixture: ComponentFixture<OpenCloseComponent>;
  let button: HTMLButtonElement;
  let openCloseContainer: HTMLElement;
    
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenCloseComponent, NoopAnimationsModule],
      providers: [{provide: AnimationDriver, useClass: MockAnimationDriver}],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenCloseComponent);
    component = fixture.componentInstance;
    button = fixture.debugElement.query(By.css('button')).nativeElement;
    openCloseContainer = fixture.debugElement.query(By.css('.open-close-container')).nativeElement;
    component.isOpen=true;
  });

  it('should start "* => close" animation', () => {
    fixture.detectChanges( );
    button.click();
    fixture.detectChanges( );
    let player = MockAnimationDriver.log.pop()! as MockAnimationPlayer;
    player.play();
    player.finish();

    const computedStyle = window.getComputedStyle(openCloseContainer);
    expect(computedStyle.backgroundColor).toBe(BLUE_RGB);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be opened', () => {
    expect(component.isOpen).toBeTrue();
    component.toggle();
    expect(component.isOpen).toBeFalse();
  });

  it('should change background color', <any>fakeAsync((): void => {
    fixture.detectChanges( );
    expect(getComputedStyle(openCloseContainer).backgroundColor).toBe(BLACK_RGB);
    let player = MockAnimationDriver.log.pop()! as MockAnimationPlayer;
    player.play();
    player.finish();
    expect(getComputedStyle(openCloseContainer).backgroundColor).toBe(YELLOW_RGB);
  }));

  it('should check the styles on page load', <any>fakeAsync(() => {
    fixture.detectChanges( );
    let player = MockAnimationDriver.log.pop()! as MockAnimationPlayer;
    player.play();
    player.finish();

    const computedStyle = getComputedStyle(openCloseContainer);
    expect(computedStyle.opacity).toBe('1');
    expect(computedStyle.height).toBe('200px');
    expect(computedStyle.backgroundColor).toBe(YELLOW_RGB);
  }));

  it('should start "closed => open" animation when toggled to open', () => {
    fixture.detectChanges( );
    button.click();//close
    fixture.detectChanges( );
    button.click();//open
    fixture.detectChanges( );
    let player = MockAnimationDriver.log.pop()! as MockAnimationPlayer;
    player.play();
    player.finish();
  
    const computedStyle = window.getComputedStyle(openCloseContainer);
    expect(computedStyle.backgroundColor).toBe(YELLOW_RGB);
  });

});
