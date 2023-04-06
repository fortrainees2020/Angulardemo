import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { GreetComponent } from './greet.component';

describe('GreetComponent', () => {
  let component: GreetComponent;
  let fixture: ComponentFixture<GreetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Initial state', () => {
    expect(component.customerName).toBe("Daffy Duck");
  });


//Verify component state change. 
it('State change', () => {
  component.customerName = "Bob" //Change state
  fixture.detectChanges(); //Trigger state change handling
  let paraText =
    fixture.nativeElement.querySelector('p').textContent
  expect(paraText).toBe('Welcome Bob');
});

/**
 *  DebugElementClass: This class provides utilities to help write test scripts.
 * Useful properties:
        ◊ componentInstance - Same as ComponentFixture.componentInstance
        ◊ nativeElement - Same as ComponentFixture.nativeElement
        ◊ parent : DebugElement - The parent element.
 Useful methods:
      ◊ ◊
      query()/queryAll() - Obtain child DebugElement by CSS selector query.
      triggerEventHandler() - Used to simulate user interactions like button clicks.
 */
//-----------SimulatingUserInteraction
//--We trigger a button click event and verify the change in the component's state.
it('Should handle click', () => {
  let button : DebugElement =
    fixture.debugElement.query(By.css("button"))
    button.triggerEventHandler("click", null)
    fixture.detectChanges();
expect(component.customerName).toBe("Bugs Bunny")
  let paraText =
    fixture.nativeElement.querySelector('p').textContent
expect(paraText).toBe('Welcome Bugs Bunny'); });
});
